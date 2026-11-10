import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, realpathSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { promisify } from 'node:util';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scrypt = promisify(scryptCallback);
const configuredPath = process.env.CAREPATH_DB_PATH;
const DB_PATH = configuredPath === ':memory:'
  ? ':memory:'
  : resolve(configuredPath || fileURLToPath(new URL('../data/carepath.sqlite', import.meta.url)));
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const SCRYPT_OPTIONS = { N: 2 ** 17, r: 8, p: 1, maxmem: 256 * 1024 * 1024 };

if (DB_PATH !== ':memory:') mkdirSync(dirname(DB_PATH), { recursive: true });
const database = new DatabaseSync(DB_PATH);
const databaseDirectory = dirname(DB_PATH);
const canonicalDatabaseDirectory = realpathSync(databaseDirectory);
const databaseFileName = basename(DB_PATH);
const privateStoragePaths = new Set([
  databaseFileName,
  `${databaseFileName}-wal`,
  `${databaseFileName}-shm`,
].flatMap(fileName => [
  resolve(databaseDirectory, fileName),
  join(canonicalDatabaseDirectory, fileName),
]));
if (existsSync(DB_PATH)) privateStoragePaths.add(realpathSync(DB_PATH));

export function isPrivateStoragePath(candidate) {
  const resolved = resolve(candidate);
  if (privateStoragePaths.has(resolved)) return true;
  try {
    return privateStoragePaths.has(realpathSync(resolved));
  } catch {
    return false;
  }
}
database.exec(`
  PRAGMA foreign_keys = ON;
  PRAGMA journal_mode = WAL;
  PRAGMA busy_timeout = 5000;
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL COLLATE NOCASE UNIQUE,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at INTEGER NOT NULL
  ) STRICT;
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  ) STRICT;
  CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions(expires_at);
  CREATE TABLE IF NOT EXISTS bookmarks (
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    condition_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    PRIMARY KEY (user_id, condition_id)
  ) STRICT;
`);

const queries = {
  userByEmail: database.prepare('SELECT id, email, password_salt, password_hash FROM users WHERE email = ?'),
  userById: database.prepare('SELECT id, email FROM users WHERE id = ?'),
  insertUser: database.prepare('INSERT INTO users (id, email, password_salt, password_hash, created_at) VALUES (?, ?, ?, ?, ?)'),
  insertSession: database.prepare('INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)'),
  sessionUser: database.prepare('SELECT users.id, users.email, sessions.expires_at FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ?'),
  deleteSession: database.prepare('DELETE FROM sessions WHERE token_hash = ?'),
  deleteExpiredSessions: database.prepare('DELETE FROM sessions WHERE expires_at <= ?'),
  listBookmarks: database.prepare('SELECT condition_id FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC'),
  addBookmark: database.prepare('INSERT OR IGNORE INTO bookmarks (user_id, condition_id, created_at) VALUES (?, ?, ?)'),
  removeBookmark: database.prepare('DELETE FROM bookmarks WHERE user_id = ? AND condition_id = ?'),
  deleteUser: database.prepare('DELETE FROM users WHERE id = ?'),
  updatePassword: database.prepare('UPDATE users SET password_salt = ?, password_hash = ? WHERE id = ?'),
  deleteUserSessions: database.prepare('DELETE FROM sessions WHERE user_id = ?'),
};

export function normalizeEmail(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

export function isValidEmail(email) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
  return typeof password === 'string' && [...password].length >= 12 &&
    [...password].length <= 128 && Buffer.byteLength(password, 'utf8') <= 1024;
}

export async function hashPassword(password, salt = randomBytes(16)) {
  const hash = await scrypt(password, salt, 64, SCRYPT_OPTIONS);
  return { salt: salt.toString('base64url'), hash: Buffer.from(hash).toString('base64url') };
}

export async function verifyPassword(password, user) {
  const salt = user ? Buffer.from(user.password_salt, 'base64url') : Buffer.alloc(16);
  const expected = user ? Buffer.from(user.password_hash, 'base64url') : Buffer.alloc(64);
  const actual = Buffer.from(await scrypt(password, salt, expected.length || 64, SCRYPT_OPTIONS));
  return Boolean(user && expected.length === actual.length && timingSafeEqual(expected, actual));
}

export function createUser(email, credentials) {
  const id = randomBytes(16).toString('hex');
  queries.insertUser.run(id, email, credentials.salt, credentials.hash, Date.now());
  return { id, email };
}

export function findUserByEmail(email) {
  return queries.userByEmail.get(email);
}

export function getUserById(id) {
  return queries.userById.get(id) || null;
}

export function deleteUser(id) {
  queries.deleteUser.run(id);
}

export function updatePassword(userId, credentials) {
  queries.updatePassword.run(credentials.salt, credentials.hash, userId);
}

export function revokeUserSessions(userId) {
  queries.deleteUserSessions.run(userId);
}

function tokenDigest(token) {
  return createHash('sha256').update(token).digest('hex');
}

export function createSession(userId) {
  const now = Math.floor(Date.now() / 1000);
  queries.deleteExpiredSessions.run(now);
  const token = randomBytes(32).toString('base64url');
  const expiresAt = now + SESSION_TTL_SECONDS;
  queries.insertSession.run(tokenDigest(token), userId, expiresAt, now);
  return { token, maxAge: SESSION_TTL_SECONDS };
}

export function getSession(token) {
  if (!token || token.length > 128) return null;
  const record = queries.sessionUser.get(tokenDigest(token));
  if (!record) return null;
  if (record.expires_at <= Math.floor(Date.now() / 1000)) {
    queries.deleteSession.run(tokenDigest(token));
    return null;
  }
  return { id: record.id, email: record.email };
}

export function revokeSession(token) {
  if (token) queries.deleteSession.run(tokenDigest(token));
}

export function getBookmarks(userId) {
  return queries.listBookmarks.all(userId).map(row => row.condition_id);
}

export function saveBookmark(userId, conditionId) {
  queries.addBookmark.run(userId, conditionId, Date.now());
  return getBookmarks(userId);
}

export function deleteBookmark(userId, conditionId) {
  queries.removeBookmark.run(userId, conditionId);
  return getBookmarks(userId);
}


export function closeAccountStore() {
  database.close();
}
