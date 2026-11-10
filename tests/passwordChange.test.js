import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { rm } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const databasePath = resolve(projectRoot, 'data', `password-change-${process.pid}.sqlite`);
process.env.CAREPATH_DB_PATH = databasePath;

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
  request.socket = { remoteAddress: 'password-change-test' };
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
  accountStore.closeAccountStore();
  for (const suffix of ['', '-wal', '-shm']) await rm(databasePath + suffix, { force: true });
  delete process.env.CAREPATH_DB_PATH;
});

test('password change verifies the current password and revokes existing sessions', async () => {
  const email = `password-${process.pid}@example.com`;
  const oldPassword = 'OriginalPassword123!';
  const newPassword = 'NewSecurePassword456!';
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

  const weakPassword = await dispatch('PUT', '/api/auth/password', {
    cookie: secondCookie,
    body: { currentPassword: oldPassword, newPassword: 'short' },
  });
  assert.equal(weakPassword.statusCode, 400);

  const wrongCurrentPassword = await dispatch('PUT', '/api/auth/password', {
    cookie: secondCookie,
    body: { currentPassword: 'WrongPassword123!', newPassword },
  });
  assert.equal(wrongCurrentPassword.statusCode, 401);

  const changed = await dispatch('PUT', '/api/auth/password', {
    cookie: secondCookie,
    body: { currentPassword: oldPassword, newPassword },
  });
  assert.equal(changed.statusCode, 200);
  const currentCookie = changed.headers['Set-Cookie'].split(';')[0];

  assert.deepEqual((await dispatch('GET', '/api/auth/me', { cookie: firstCookie })).body, { user: null });
  assert.deepEqual((await dispatch('GET', '/api/auth/me', { cookie: secondCookie })).body, { user: null });
  assert.equal((await dispatch('GET', '/api/auth/me', { cookie: currentCookie })).body.user.email, email);
  assert.equal((await dispatch('POST', '/api/auth/login', { body: { email, password: oldPassword } })).statusCode, 401);
  assert.equal((await dispatch('POST', '/api/auth/login', { body: { email, password: newPassword } })).statusCode, 200);
});

