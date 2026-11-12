import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const databasePath = resolve(projectRoot, 'data', `postgres-security-regression-${process.pid}.sqlite`);
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
if (!process.env.DATABASE_URL) throw new Error('TEST_DATABASE_URL is required.');
process.env.CAREPATH_DB_PATH = databasePath;

await mkdir(dirname(databasePath), { recursive: true });
for (const suffix of ['', '-wal', '-shm']) {
  await writeFile(databasePath + suffix, 'private database fixture');
}

const [{ createApp }, store] = await Promise.all([
  import('../server/app.js'),
  import('../server/postgresAccountStore.js'),
]);
const app = createApp();

async function dispatch(pathname) {
  let statusCode;
  await app(
    { url: pathname, method: 'GET', headers: {}, socket: {} },
    { writeHead(code) { statusCode = code; }, end() {} },
  );
  return statusCode;
}

after(async () => {
  await store.closeAccountStore();
  for (const suffix of ['', '-wal', '-shm']) {
    await rm(databasePath + suffix, { force: true });
  }
});

test('PostgreSQL mode keeps a retained SQLite database and journal files private', async () => {
  assert.equal(store.isPrivateStoragePath(databasePath), true);
  for (const suffix of ['', '-wal', '-shm']) {
    assert.equal(store.isPrivateStoragePath(databasePath + suffix), true);
    assert.equal(await dispatch(`/data/${basename(databasePath + suffix)}`), 404);
  }
});
