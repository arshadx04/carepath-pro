import { createServer as createHttpServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isPrivateStoragePath, createSession, createUser, deleteBookmark, findUserByEmail, getBookmarks, getSession, isValidEmail, isValidPassword, normalizeEmail, revokeSession, revokeUserSessions, saveBookmark, updatePassword, hashPassword, verifyPassword } from './accountStore.js';
import { diseaseDatabase } from '../js/data/diseases.js';
import { symptomDatabase } from '../js/data/symptoms.js';
import { triageEngine } from '../js/engine/triageEngine.js';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const MAX_BODY_BYTES = 32 * 1024;
const MAX_SYMPTOMS = 50;
const MAX_FLAGS = 30;
const SESSION_COOKIE = 'carepath_session';
const AUTH_WINDOW_MS = 15 * 60 * 1000;
const AUTH_MAX_ATTEMPTS = 10;
const authAttempts = new Map();
const BOOKMARKABLE_CONDITION_IDS = new Set(diseaseDatabase.map(disease => disease.id));
const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function sendJson(response, statusCode, value, extraHeaders = {}) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders,
  });
  response.end(JSON.stringify(value));
}

function parseCookies(header = '') {
  const cookies = new Map();
  for (const part of header.split(';')) {
    const separator = part.indexOf('=');
    if (separator < 0) continue;
    cookies.set(part.slice(0, separator).trim(), part.slice(separator + 1).trim());
  }
  return cookies;
}

function sessionCookie(token, maxAge) {
  const secure = process.env.NODE_ENV === 'production' || process.env.COOKIE_SECURE === 'true';
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
}

function isSameOrigin(request) {
  const origin = request.headers.origin;
  if (!origin) return true;
  try {
    return new URL(origin).host.toLowerCase() === String(request.headers.host || '').toLowerCase();
  } catch {
    return false;
  }
}

function allowAuthAttempt(request) {
  const now = Date.now();
  for (const [ip, entry] of authAttempts) {
    if (entry.resetAt <= now) authAttempts.delete(ip);
  }
  const ip = request.socket.remoteAddress || 'unknown';
  const entry = authAttempts.get(ip);
  if (entry && entry.count >= AUTH_MAX_ATTEMPTS && entry.resetAt > now) return false;
  if (!entry || entry.resetAt <= now) authAttempts.set(ip, { count: 1, resetAt: now + AUTH_WINDOW_MS });
  else entry.count++;
  return true;
}

function getRequestSession(request) {
  const token = parseCookies(request.headers.cookie).get(SESSION_COOKIE);
  return { token, user: getSession(token) };
}

function replaceSession(request, userId) {
  const { token } = getRequestSession(request);
  revokeSession(token);
  return createSession(userId);
}

async function handleAccountApi(request, response, pathname) {
  if (request.method === 'GET' && pathname === '/api/auth/me') {
    const { user } = getRequestSession(request);
    sendJson(response, 200, { user });
    return true;
  }

  if (request.method === 'PUT' && pathname === '/api/auth/password') {
    if (!isSameOrigin(request)) {
      sendJson(response, 403, { error: 'Cross-origin request rejected.' });
      return true;
    }
    if (!allowAuthAttempt(request)) {
      sendJson(response, 429, { error: 'Too many account requests. Try again in 15 minutes.' }, { 'Retry-After': '900' });
      return true;
    }
    const { user } = getRequestSession(request);
    if (!user) {
      sendJson(response, 401, { error: 'Sign in to change your password.' });
      return true;
    }
    let body;
    try {
      body = await readJsonBody(request);
    } catch (error) {
      sendJson(response, error.statusCode || 400, { error: error.message });
      return true;
    }
    const currentPassword = body?.currentPassword;
    const newPassword = body?.newPassword;
    if (typeof currentPassword !== 'string' || currentPassword.length === 0 || Buffer.byteLength(currentPassword, 'utf8') > 1024) {
      sendJson(response, 400, { error: 'Enter your current password.' });
      return true;
    }
    if (!isValidPassword(newPassword)) {
      sendJson(response, 400, { error: 'New password must be 12–128 characters.' });
      return true;
    }
    const userRecord = findUserByEmail(user.email);
    if (!(await verifyPassword(currentPassword, userRecord))) {
      sendJson(response, 401, { error: 'Current password is incorrect.' });
      return true;
    }
    const credentials = await hashPassword(newPassword);
    updatePassword(user.id, credentials);
    revokeUserSessions(user.id);
    const session = createSession(user.id);
    sendJson(response, 200, { user }, { 'Set-Cookie': sessionCookie(session.token, session.maxAge) });
    return true;
  }
  if (request.method === 'DELETE' && pathname === '/api/auth/account') {
    if (!isSameOrigin(request)) {
      sendJson(response, 403, { error: 'Cross-origin request rejected.' });
      return true;
    }
    if (!allowAuthAttempt(request)) {
      sendJson(response, 429, { error: 'Too many account requests. Try again in 15 minutes.' }, { 'Retry-After': '900' });
      return true;
    }
    const { token, user } = getRequestSession(request);
    if (!user) {
      sendJson(response, 401, { error: 'Sign in to delete your account.' });
      return true;
    }
    let body;
    try {
      body = await readJsonBody(request);
    } catch (error) {
      sendJson(response, error.statusCode || 400, { error: error.message });
      return true;
    }
    if (typeof body?.password !== 'string' || body.password.length === 0 || Buffer.byteLength(body.password, 'utf8') > 1024) {
      sendJson(response, 400, { error: 'Enter your current password to delete the account.' });
      return true;
    }
    const userRecord = findUserByEmail(user.email);
    if (!(await verifyPassword(body.password, userRecord))) {
      sendJson(response, 401, { error: 'Password is incorrect.' });
      return true;
    }
    deleteUser(user.id);
    revokeSession(token);
    sendJson(response, 200, { user: null }, { 'Set-Cookie': sessionCookie('', 0) });
    return true;
  }
  if (request.method === 'POST' && ['/api/auth/register', '/api/auth/login', '/api/auth/logout'].includes(pathname)) {
    if (!isSameOrigin(request)) {
      sendJson(response, 403, { error: 'Cross-origin request rejected.' });
      return true;
    }
    if (pathname === '/api/auth/logout') {
      const { token } = getRequestSession(request);
      revokeSession(token);
      sendJson(response, 200, { user: null }, { 'Set-Cookie': sessionCookie('', 0) });
      return true;
    }
    if (!allowAuthAttempt(request)) {
      sendJson(response, 429, { error: 'Too many account requests. Try again in 15 minutes.' }, { 'Retry-After': '900' });
      return true;
    }

    let body;
    try {
      body = await readJsonBody(request);
    } catch (error) {
      sendJson(response, error.statusCode || 400, { error: error.message });
      return true;
    }
    const email = normalizeEmail(body?.email);
    const password = body?.password;
    if (!isValidEmail(email)) {
      sendJson(response, 400, { error: 'Enter a valid email address.' });
      return true;
    }
    if (pathname === '/api/auth/register' && !isValidPassword(password)) {
      sendJson(response, 400, { error: 'Password must be 12–128 characters.' });
      return true;
    }
    if (typeof password !== 'string' || password.length === 0 || Buffer.byteLength(password, 'utf8') > 1024) {
      sendJson(response, 400, { error: 'Enter a valid password.' });
      return true;
    }

    if (pathname === '/api/auth/register') {
      if (findUserByEmail(email)) {
        sendJson(response, 409, { error: 'An account with that email already exists.' });
        return true;
      }
      const credentials = await hashPassword(password);
      let user;
      try {
        user = createUser(email, credentials);
      } catch (error) {
        if (String(error.message).includes('UNIQUE')) {
          sendJson(response, 409, { error: 'An account with that email already exists.' });
          return true;
        }
        throw error;
      }
      const session = replaceSession(request, user.id);
      sendJson(response, 201, { user }, { 'Set-Cookie': sessionCookie(session.token, session.maxAge) });
      return true;
    }

    const userRecord = findUserByEmail(email);
    if (!(await verifyPassword(password, userRecord))) {
      sendJson(response, 401, { error: 'Email or password is incorrect.' });
      return true;
    }
    const user = { id: userRecord.id, email: userRecord.email };
    const session = replaceSession(request, user.id);
    sendJson(response, 200, { user }, { 'Set-Cookie': sessionCookie(session.token, session.maxAge) });
    return true;
  }

  if (pathname === '/api/bookmarks' && request.method === 'GET') {
    const { user } = getRequestSession(request);
    if (!user) {
      sendJson(response, 401, { error: 'Sign in to access saved conditions.' });
      return true;
    }
    sendJson(response, 200, { bookmarks: getBookmarks(user.id) });
    return true;
  }

  if (pathname === '/api/bookmarks' && request.method === 'POST') {
    if (!isSameOrigin(request)) {
      sendJson(response, 403, { error: 'Cross-origin request rejected.' });
      return true;
    }
    const { user } = getRequestSession(request);
    if (!user) {
      sendJson(response, 401, { error: 'Sign in to save conditions.' });
      return true;
    }
    try {
      const body = await readJsonBody(request);
      if (typeof body?.conditionId !== 'string' || !BOOKMARKABLE_CONDITION_IDS.has(body.conditionId)) {
        sendJson(response, 400, { error: 'Choose a condition from the library.' });
        return true;
      }
      sendJson(response, 200, { bookmarks: saveBookmark(user.id, body.conditionId) });
    } catch (error) {
      sendJson(response, error.statusCode || 400, { error: error.message || 'Unable to save bookmark.' });
    }
    return true;
  }

  const removeMatch = pathname.match(/^\/api\/bookmarks\/([a-z0-9-]+)$/i);
  if (removeMatch && request.method === 'DELETE') {
    if (!isSameOrigin(request)) {
      sendJson(response, 403, { error: 'Cross-origin request rejected.' });
      return true;
    }
    const { user } = getRequestSession(request);
    if (!user) {
      sendJson(response, 401, { error: 'Sign in to edit saved conditions.' });
      return true;
    }
    sendJson(response, 200, { bookmarks: deleteBookmark(user.id, removeMatch[1]) });
    return true;
  }

  return false;
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('Request body exceeds the 32 KB limit.');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must be valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

function validateIntake(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return 'Expected a JSON object.';
  const selected = value.selectedSymptoms ?? [];
  const flags = value.redFlags ?? [];
  if (!Array.isArray(selected) || selected.length > MAX_SYMPTOMS ||
      !selected.every(id => typeof id === 'string' && symptomDatabase.symptoms.some(s => s.id === id))) {
    return 'selectedSymptoms must contain at most 50 known symptom IDs.';
  }
  if (!Array.isArray(flags) || flags.length > MAX_FLAGS ||
      !flags.every(id => id === 'none' || (typeof id === 'string' && symptomDatabase.symptoms.some(s => s.id === id)))) {
    return 'redFlags must contain at most 30 known symptom IDs.';
  }
  const pain = value.severity?.painScore;
  if (pain !== undefined && pain !== '' && pain !== null &&
      (!Number.isFinite(Number(pain)) || Number(pain) < 0 || Number(pain) > 10)) {
    return 'severity.painScore must be a number from 0 to 10.';
  }
  return null;
}

function publicEvaluation(result) {
  return {
    triageLevel: result.triageLevel,
    triageTitle: result.triageTitle,
    triageDescription: result.triageDescription,
    triageColor: result.triageColor,
    timeWindow: result.timeWindow,
    activeRedFlags: result.activeRedFlags.map(({ id, label, emergencyDesc }) => ({ id, label, emergencyDesc })),
    topMatches: result.topMatches.map(({ disease, matchedSymptoms, missedSymptoms, relevance }) => ({
      disease: { id: disease.id, name: disease.name, medicalTerm: disease.medicalTerm, category: disease.category, icd10: disease.icd10, summary: disease.summary, urgency: disease.urgency, urgencyText: disease.urgencyText },
      matchedSymptoms,
      missedSymptoms,
      relevance,
    })),
    doctorQuestions: result.doctorQuestions,
    intakeSummary: {
      totalSymptomsReported: result.intakeSummary.totalSymptomsReported,
      evaluatedAt: result.intakeSummary.evaluatedAt,
    },
    disclaimer: 'Educational demonstration only. Not clinically validated and not for diagnosis, treatment, or emergency decision-making.',
  };
}

async function serveStatic(pathname, response) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    sendJson(response, 400, { error: 'Invalid URL path.' });
    return;
  }
  const relativePath = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const filePath = resolve(projectRoot, relativePath);
  if (filePath !== projectRoot && !filePath.startsWith(projectRoot + sep)) {
    sendJson(response, 403, { error: 'Forbidden.' });
    return;
  }
  try {
    const info = await stat(filePath);
    const target = info.isDirectory() ? resolve(filePath, 'index.html') : filePath;
    const [realRoot, realTarget] = await Promise.all([realpath(projectRoot), realpath(target)]);
    if (realTarget !== realRoot && !realTarget.startsWith(realRoot + sep)) {
      sendJson(response, 403, { error: 'Forbidden.' });
      return;
    }
    if (isPrivateStoragePath(realTarget)) {
      sendJson(response, 404, { error: 'Not found.' });
      return;
    }
    const body = await readFile(realTarget);
    response.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(realTarget).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': realTarget.endsWith('.html') ? 'no-cache' : 'public, max-age=300',
    });
    response.end(body);
  } catch {
    sendJson(response, 404, { error: 'Not found.' });
  }
}

export function createApp() {
  return async function app(request, response) {
    const requestUrl = new URL(request.url || '/', 'http://localhost');
    const { pathname } = requestUrl;

    if (pathname.startsWith('/api/')) {
      response.setHeader('Cache-Control', 'no-store');
      try {
        if (await handleAccountApi(request, response, pathname)) return;
      } catch (error) {
        sendJson(response, 500, { error: 'Account service is temporarily unavailable.' });
        return;
      }
      if (request.method === 'GET' && pathname === '/api/health') {
        sendJson(response, 200, { status: 'ok', service: 'carepath-pro-api' });
        return;
      }
      if (request.method === 'GET' && pathname === '/api/catalog/symptoms') {
        sendJson(response, 200, { bodyRegions: symptomDatabase.bodyRegions, symptoms: symptomDatabase.symptoms });
        return;
      }
      if (request.method === 'GET' && pathname === '/api/catalog/conditions') {
        sendJson(response, 200, { conditions: diseaseDatabase });
        return;
      }
      if (request.method === 'POST' && pathname === '/api/check-ins/evaluate') {
        try {
          const intake = await readJsonBody(request);
          const validationError = validateIntake(intake);
          if (validationError) {
            sendJson(response, 400, { error: validationError });
            return;
          }
          sendJson(response, 200, publicEvaluation(triageEngine.evaluate(intake)));
        } catch (error) {
          sendJson(response, error.statusCode || 400, { error: error.message || 'Unable to evaluate check-in.' });
        }
        return;
      }
      sendJson(response, 404, { error: 'API route not found.' });
      return;
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      sendJson(response, 405, { error: 'Method not allowed.' }, { Allow: 'GET, HEAD' });
      return;
    }
    await serveStatic(pathname, response);
  };
}

export function createServer() {
  return createHttpServer(createApp());
}

