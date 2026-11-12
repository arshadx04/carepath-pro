import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { existsSync, realpathSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { Pool } from 'pg';

const scrypt = promisify(scryptCallback);
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const PASSWORD_RESET_TTL_SECONDS = 60 * 30;
const SCRYPT_OPTIONS = { N: 2 ** 17, r: 8, p: 1, maxmem: 256 * 1024 * 1024 };

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required when PostgreSQL storage is enabled.');
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.PG_POOL_MAX || 10),
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});
pool.on('error', error => console.error('Unexpected idle PostgreSQL client error:', error.message));

// A deployment may retain its old SQLite file while PostgreSQL is active.
// Keep that file and its journal sidecars private in either storage mode.
const configuredSqlitePath = process.env.CAREPATH_DB_PATH;
const sqliteDatabasePath = configuredSqlitePath === ':memory:'
  ? null
  : resolve(configuredSqlitePath || fileURLToPath(new URL('../data/carepath.sqlite', import.meta.url)));
const privateSqlitePaths = new Set();
if (sqliteDatabasePath) {
  const sqliteDirectory = dirname(sqliteDatabasePath);
  const sqliteFileName = basename(sqliteDatabasePath);
  for (const fileName of [sqliteFileName, `${sqliteFileName}-wal`, `${sqliteFileName}-shm`]) {
    privateSqlitePaths.add(resolve(sqliteDirectory, fileName));
  }
  if (existsSync(sqliteDirectory)) {
    try {
      const canonicalDirectory = realpathSync(sqliteDirectory);
      for (const fileName of [sqliteFileName, `${sqliteFileName}-wal`, `${sqliteFileName}-shm`]) {
        privateSqlitePaths.add(join(canonicalDirectory, fileName));
      }
    } catch {
      // The configured SQLite directory may not exist in a PostgreSQL-only deployment.
    }
  }
  if (existsSync(sqliteDatabasePath)) {
    try { privateSqlitePaths.add(realpathSync(sqliteDatabasePath)); } catch { /* handled by resolved path */ }
  }
}

export function isPrivateStoragePath(candidate) {
  const resolved = resolve(candidate);
  if (privateSqlitePaths.has(resolved)) return true;
  try {
    return privateSqlitePaths.has(realpathSync(resolved));
  } catch {
    return false;
  }
}
export function normalizeEmail(value) { return typeof value === 'string' ? value.trim().toLowerCase() : ''; }
export function isValidEmail(email) { return email.length <= 254 && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email); }
export function isValidPassword(password) {
  return typeof password === 'string' && [...password].length >= 8 &&
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

export async function createUser(email, credentials) {
  const id = randomBytes(16).toString('hex');
  await pool.query(
    'INSERT INTO users (id, email, password_salt, password_hash, created_at) VALUES ($1, $2, $3, $4, $5)',
    [id, email, credentials.salt, credentials.hash, Date.now()],
  );
  return { id, email };
}
export async function findUserByEmail(email) {
  const result = await pool.query(
    'SELECT id, email, password_salt, password_hash FROM users WHERE LOWER(email) = LOWER($1)',
    [email],
  );
  return result.rows[0];
}
export async function deleteUser(id) { await pool.query('DELETE FROM users WHERE id = $1', [id]); }
export async function updatePassword(userId, credentials) {
  await pool.query('UPDATE users SET password_salt = $1, password_hash = $2 WHERE id = $3',
    [credentials.salt, credentials.hash, userId]);
}
export async function revokeUserSessions(userId) {
  await pool.query('DELETE FROM sessions WHERE user_id = $1', [userId]);
}
function tokenDigest(token) { return createHash('sha256').update(token).digest('hex'); }

export async function createPasswordResetToken(userId) {
  const client = await pool.connect();
  const now = Math.floor(Date.now() / 1000);
  try {
    await client.query('BEGIN');
    await client.query('DELETE FROM password_reset_tokens WHERE expires_at <= $1', [now]);
    await client.query('DELETE FROM password_reset_tokens WHERE user_id = $1', [userId]);
    const token = randomBytes(32).toString('base64url');
    await client.query(
      'INSERT INTO password_reset_tokens (token_hash, user_id, expires_at, created_at) VALUES ($1, $2, $3, $4)',
      [tokenDigest(token), userId, now + PASSWORD_RESET_TTL_SECONDS, now],
    );
    await client.query('COMMIT');
    return token;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally { client.release(); }
}

export async function completePasswordReset(token, credentials) {
  if (typeof token !== 'string' || token.length > 128) return false;
  const digest = tokenDigest(token);
  const now = Math.floor(Date.now() / 1000);
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await client.query(
      'SELECT user_id, expires_at FROM password_reset_tokens WHERE token_hash = $1 FOR UPDATE', [digest]);
    const record = result.rows[0];
    if (!record || Number(record.expires_at) <= now) {
      await client.query('DELETE FROM password_reset_tokens WHERE token_hash = $1', [digest]);
      await client.query('COMMIT');
      return false;
    }
    await client.query('UPDATE users SET password_salt = $1, password_hash = $2 WHERE id = $3',
      [credentials.salt, credentials.hash, record.user_id]);
    await client.query('DELETE FROM sessions WHERE user_id = $1', [record.user_id]);
    await client.query('DELETE FROM password_reset_tokens WHERE user_id = $1', [record.user_id]);
    await client.query('COMMIT');
    return true;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally { client.release(); }
}

export async function createSession(userId) {
  const now = Math.floor(Date.now() / 1000);
  await pool.query('DELETE FROM sessions WHERE expires_at <= $1', [now]);
  const token = randomBytes(32).toString('base64url');
  await pool.query(
    'INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES ($1, $2, $3, $4)',
    [tokenDigest(token), userId, now + SESSION_TTL_SECONDS, now],
  );
  return { token, maxAge: SESSION_TTL_SECONDS };
}
export async function getSession(token) {
  if (!token || token.length > 128) return null;
  const digest = tokenDigest(token);
  const result = await pool.query(
    'SELECT users.id, users.email, sessions.expires_at FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = $1',
    [digest]);
  const record = result.rows[0];
  if (!record) return null;
  if (Number(record.expires_at) <= Math.floor(Date.now() / 1000)) {
    await pool.query('DELETE FROM sessions WHERE token_hash = $1', [digest]);
    return null;
  }
  return { id: record.id, email: record.email };
}
export async function revokeSession(token) {
  if (token) await pool.query('DELETE FROM sessions WHERE token_hash = $1', [tokenDigest(token)]);
}
export async function getBookmarks(userId) {
  const result = await pool.query(
    'SELECT condition_id FROM bookmarks WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
  return result.rows.map(row => row.condition_id);
}
export async function saveBookmark(userId, conditionId) {
  await pool.query(
    'INSERT INTO bookmarks (user_id, condition_id, created_at) VALUES ($1, $2, $3) ON CONFLICT (user_id, condition_id) DO NOTHING',
    [userId, conditionId, Date.now()]);
  return getBookmarks(userId);
}
export async function deleteBookmark(userId, conditionId) {
  await pool.query('DELETE FROM bookmarks WHERE user_id = $1 AND condition_id = $2', [userId, conditionId]);
  return getBookmarks(userId);
}
export async function closeAccountStore() { await pool.end(); }
