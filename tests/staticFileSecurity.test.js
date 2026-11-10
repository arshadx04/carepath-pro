import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { mkdtemp, rm, symlink, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const databasePath = resolve(projectRoot, 'data', `security-regression-${process.pid}.sqlite`);
process.env.CAREPATH_DB_PATH = databasePath;

const [{ createApp }, { closeAccountStore, isPrivateStoragePath }] = await Promise.all([
  import('../server/app.js'),
  import('../server/accountStore.js'),
]);
const app = createApp();

async function dispatch(pathname) {
  let statusCode;
  let body;
  await app(
    { url: pathname, method: 'GET', headers: {}, socket: {} },
    { writeHead(code) { statusCode = code; }, end(value) { body = value; } },
  );
  return { statusCode, body };
}

after(async () => {
  closeAccountStore();
  for (const suffix of ['', '-wal', '-shm']) {
    await rm(databasePath + suffix, { force: true });
  }
  delete process.env.CAREPATH_DB_PATH;
});

test('marks the database and SQLite journal files as private', () => {
  assert.equal(isPrivateStoragePath(databasePath), true);
  assert.equal(isPrivateStoragePath(databasePath + '-wal'), true);
  assert.equal(isPrivateStoragePath(databasePath + '-shm'), true);
});

test('does not serve the SQLite database or journal paths', async () => {
  for (const suffix of ['', '-wal', '-shm']) {
    const response = await dispatch(`/data/${basename(databasePath + suffix)}`);
    assert.equal(response.statusCode, 404, `expected ${suffix || 'database'} to be hidden`);
  }
});

test('rejects symlinks that point outside the static root', async t => {
  const outsideDirectory = await mkdtemp(resolve(tmpdir(), 'carepath-static-'));
  const outsideFile = resolve(outsideDirectory, 'outside.txt');
  const linkPath = resolve(projectRoot, 'tests', `security-link-${process.pid}.txt`);
  await writeFile(outsideFile, 'private fixture');
  try {
    await symlink(outsideFile, linkPath, 'file');
  } catch (error) {
    await rm(outsideDirectory, { recursive: true, force: true });
    if (['EPERM', 'EACCES', 'ENOTSUP'].includes(error.code)) {
      t.skip('this platform does not allow creating symlinks for the test');
      return;
    }
    throw error;
  }

  try {
    const response = await dispatch(`/tests/${basename(linkPath)}`);
    assert.equal(response.statusCode, 403);
  } finally {
    await unlink(linkPath).catch(() => {});
    await rm(outsideDirectory, { recursive: true, force: true });
  }
});

