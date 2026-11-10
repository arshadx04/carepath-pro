import { createServer as createHttpServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { diseaseDatabase } from '../js/data/diseases.js';
import { symptomDatabase } from '../js/data/symptoms.js';
import { triageEngine } from '../js/engine/triageEngine.js';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const MAX_BODY_BYTES = 32 * 1024;
const MAX_SYMPTOMS = 50;
const MAX_FLAGS = 30;
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
      !flags.every(id => typeof id === 'string' && symptomDatabase.symptoms.some(s => s.id === id))) {
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
      condition: { id: disease.id, name: disease.name, medicalTerm: disease.medicalTerm },
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
    const body = await readFile(target);
    response.writeHead(200, {
      'Content-Type': MIME_TYPES[extname(target).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': target.endsWith('.html') ? 'no-cache' : 'public, max-age=300',
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
