import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { rm } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const databasePath = resolve(projectRoot, 'data', `account-deletion-${process.pid}.sqlite`);
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
  request.socket = { remoteAddress: 'account-deletion-test' };
  let statusCode;
  let responseHeaders = {};
  let responseBody;
  const response = {
    setHeader(name, value) { responseHeaders[name] = value; },
    writeHead(code, headers = {}) {
      statusCode = code;
      responseHeaders = { ...responseHeaders, ...headers };
    },
    end(value) { responseBody = value; },
  };
  await app(request, response);
  return {
    statusCode,
    headers: responseHeaders,
    body: responseBody ? JSON.parse(responseBody) : null,
  };
}

after(async () => {
  accountStore.closeAccountStore();
  for (const suffix of ['', '-wal', '-shm']) await rm(databasePath + suffix, { force: true });
  delete process.env.CAREPATH_DB_PATH;
});

test('account deletion reauthenticates and removes sessions and bookmarks', async () => {
  const password = 'TestPassword123!';
  const registration = await dispatch('POST', '/api/auth/register', {
    body: { email: `delete-${process.pid}@example.com`, password },
  });
  assert.equal(registration.statusCode, 201);
  const cookie = registration.headers['Set-Cookie'].split(';')[0];

  const saved = await dispatch('POST', '/api/bookmarks', {
    cookie,
    body: { conditionId: 'asthma' },
  });
  assert.equal(saved.statusCode, 200);
  assert.deepEqual(saved.body.bookmarks, ['asthma']);

  const rejected = await dispatch('DELETE', '/api/auth/account', {
    cookie,
    body: { password: 'WrongPassword123!' },
  });
  assert.equal(rejected.statusCode, 401);
  assert.deepEqual(accountStore.getBookmarks(registration.body.user.id), ['asthma']);

  const deleted = await dispatch('DELETE', '/api/auth/account', { cookie, body: { password } });
  assert.equal(deleted.statusCode, 200);
  assert.deepEqual(deleted.body, { user: null });
  assert.match(deleted.headers['Set-Cookie'], /Max-Age=0/);
  assert.equal(accountStore.findUserByEmail(`delete-${process.pid}@example.com`), undefined);
  assert.deepEqual(accountStore.getBookmarks(registration.body.user.id), []);

  const staleSession = await dispatch('GET', '/api/auth/me', { cookie });
  assert.deepEqual(staleSession.body, { user: null });
});

