import assert from 'node:assert/strict';
import { after, test } from 'node:test';

const databaseUrl = process.env.TEST_DATABASE_URL;
if (!databaseUrl) throw new Error('TEST_DATABASE_URL is required.');
process.env.DATABASE_URL = databaseUrl;
const store = await import('../server/postgresAccountStore.js');
const schema = await (await import('node:fs/promises')).readFile(
  new URL('../migrations/001_postgres_schema.sql', import.meta.url), 'utf8');
await store.pool.query(schema);
await store.pool.query('TRUNCATE password_reset_tokens, bookmarks, sessions, users CASCADE');

after(async () => { await store.closeAccountStore(); });

test('PostgreSQL store preserves account, session, bookmark and password-reset behavior', async () => {
  const email = 'pg-test@example.com';
  const credentials = await store.hashPassword('InitialPassword123!');
  const user = await store.createUser(email, credentials);
  assert.equal((await store.findUserByEmail(email.toUpperCase())).id, user.id);
  assert.equal(await store.verifyPassword('InitialPassword123!', await store.findUserByEmail(email)), true);

  const session = await store.createSession(user.id);
  assert.equal((await store.getSession(session.token)).id, user.id);

  assert.deepEqual(await store.saveBookmark(user.id, 'sample-condition'), ['sample-condition']);
  assert.deepEqual(await store.saveBookmark(user.id, 'sample-condition'), ['sample-condition']);
  assert.deepEqual(await store.deleteBookmark(user.id, 'sample-condition'), []);

  const resetToken = await store.createPasswordResetToken(user.id);
  const replacement = await store.hashPassword('ReplacementPassword456!');
  assert.equal(await store.completePasswordReset(resetToken, replacement), true);
  assert.equal(await store.completePasswordReset(resetToken, replacement), false);
  assert.equal(await store.getSession(session.token), null);
  const refreshedUser = await store.findUserByEmail(email);
  assert.equal(await store.verifyPassword('ReplacementPassword456!', refreshedUser), true);

  await store.deleteUser(user.id);
  assert.equal(await store.findUserByEmail(email), undefined);
});

test('PostgreSQL store rejects duplicate emails case-insensitively', async () => {
  const user = await store.createUser('unique-pg@example.com', await store.hashPassword('InitialPassword123!'));
  await assert.rejects(
    store.createUser('UNIQUE-PG@example.com', await store.hashPassword('InitialPassword123!')),
    error => error.code === '23505',
  );
  await store.deleteUser(user.id);
});
