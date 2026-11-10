import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { rm } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const databasePath = resolve(projectRoot, 'data', `password-reset-${process.pid}.sqlite`);
const emailRequests = [];
const originalFetch = globalThis.fetch;
process.env.CAREPATH_DB_PATH = databasePath;
process.env.RESEND_API_KEY = 'test-resend-key';
process.env.CAREPATH_FROM_EMAIL = 'CarePath <support@example.com>';
process.env.CAREPATH_PUBLIC_URL = 'https://carepath.example/';
globalThis.fetch = async (url, options) => {
  emailRequests.push({ url, options });
  return { ok: true, status: 200 };
};

const [{ createApp }, accountStore] = await Promise.all([
  import('../server/app.js'),
  import('../server/accountStore.js'),
]);
const app = createApp();

async function dispatch(method, pathname, { body, cookie } = {}) {
  const requestBody = body === undefined ? [] : [Buffer.from(JSON.stringify(body))];
  const request = Readable.from(requestBody);
  request.url = pathname;
  request.method = method;
  request.headers = {
    host: 'localhost',
    origin: 'http://localhost',
    ...(cookie ? { cookie } : {}),
  };
  request.socket = { remoteAddress: 'password-reset-test' };
  let statusCode;
  let headers = {};
  let responseBody;
  const response = {
    setHeader(name, value) { headers[name] = value; },
    writeHead(code, extraHeaders = {}) {
      statusCode = code;
      headers = { ...headers, ...extraHeaders };
    },
    end(value) { responseBody = value; },
  };
  await app(request, response);
  return { statusCode, headers, body: responseBody ? JSON.parse(responseBody) : null };
}

after(async () => {
  globalThis.fetch = originalFetch;
  accountStore.closeAccountStore();
  for (const suffix of ['', '-wal', '-shm']) await rm(databasePath + suffix, { force: true });
  delete process.env.CAREPATH_DB_PATH;
  delete process.env.RESEND_API_KEY;
  delete process.env.CAREPATH_FROM_EMAIL;
  delete process.env.CAREPATH_PUBLIC_URL;
});

test('password reset sends a generic email, consumes the token once, and revokes sessions', async () => {
  const email = `reset-${process.pid}@example.com`;
  const oldPassword = 'OriginalPassword123!';
  const newPassword = 'RecoveredPassword456!';
  const registration = await dispatch('POST', '/api/auth/register', {
    body: { email, password: oldPassword },
  });
  assert.equal(registration.statusCode, 201);
  const firstCookie = registration.headers['Set-Cookie'].split(';')[0];
  const secondLogin = await dispatch('POST', '/api/auth/login', {
    body: { email, password: oldPassword },
  });
  assert.equal(secondLogin.statusCode, 200);
  const secondCookie = secondLogin.headers['Set-Cookie'].split(';')[0];

  const requested = await dispatch('POST', '/api/auth/password-reset/request', { body: { email } });
  const unknown = await dispatch('POST', '/api/auth/password-reset/request', { body: { email: 'missing@example.com' } });
  assert.equal(requested.statusCode, 202);
  assert.deepEqual(requested.body, unknown.body);
  assert.equal(emailRequests.length, 1);
  assert.equal(emailRequests[0].url, 'https://api.resend.com/emails');
  assert.equal(emailRequests[0].options.headers.Authorization, 'Bearer test-resend-key');

  const message = JSON.parse(emailRequests[0].options.body);
  const href = message.html.match(/href="([^"]+)"/)[1];
  const token = new URLSearchParams(new URL(href).hash.slice(1)).get('resetToken');
  assert.ok(token);

  const reset = await dispatch('POST', '/api/auth/password-reset/confirm', {
    body: { token, newPassword },
  });
  assert.equal(reset.statusCode, 200);
  assert.deepEqual((await dispatch('GET', '/api/auth/me', { cookie: firstCookie })).body, { user: null });
  assert.deepEqual((await dispatch('GET', '/api/auth/me', { cookie: secondCookie })).body, { user: null });
  assert.equal((await dispatch('POST', '/api/auth/password-reset/confirm', {
    body: { token, newPassword: 'AnotherPassword789!' },
  })).statusCode, 400);
  assert.equal((await dispatch('POST', '/api/auth/login', { body: { email, password: oldPassword } })).statusCode, 401);
  assert.equal((await dispatch('POST', '/api/auth/login', { body: { email, password: newPassword } })).statusCode, 200);
  assert.equal(accountStore.getBookmarks(registration.body.user.id).length, 0);
});

