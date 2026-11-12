# SQLite to PostgreSQL migration notes

## Compatibility decisions

- PostgreSQL is the target database; the application must connect through the `pg` Pool.
- Keep the existing four tables and their column names.
- Store timestamps as BIGINT epoch values during the compatibility migration. Do not convert them to TIMESTAMPTZ in this phase.
- Preserve source units: `users.created_at` and `bookmarks.created_at` are milliseconds; session and password-reset `created_at`/`expires_at` are seconds.
- Keep IDs and SHA-256 token digests as text.
- Keep foreign-key cascades for sessions, bookmarks, and reset tokens.
- Enforce case-insensitive email uniqueness with a unique index on `LOWER(email)`.
- Translate SQLite `INSERT OR IGNORE` to PostgreSQL `ON CONFLICT DO NOTHING`.

## Security invariants

- Passwords continue to use the existing salted scrypt parameters and encoded values.
- Session and password-reset tokens remain random opaque tokens; only SHA-256 digests are stored.
- Session lifetime remains seven days; password-reset lifetime remains thirty minutes.
- Password reset must run in one PostgreSQL transaction on one checked-out PoolClient: validate token, update password, revoke sessions, consume reset tokens, then commit. Roll back on any failure.
- Never log DATABASE_URL, raw tokens, passwords, or credential hashes.

## Data migration requirements

The SQLite database is not committed to Git, so this repository cannot establish whether a deployed or local database contains accounts. Before switching production traffic:
1. Identify the authoritative SQLite database file and make a protected backup.
2. Export the four tables while preserving IDs, token digests, password salts/hashes, and integer timestamp values.
3. Import users before dependent rows, in a transaction.
4. Verify row counts, foreign-key integrity, case-insensitive email uniqueness, and representative login/session/bookmark/reset behavior.
5. Keep the original SQLite backup protected until the PostgreSQL deployment is verified and rollback is no longer required.

## Current implementation status

This document and `migrations/001_postgres_schema.sql` are schema/design artifacts only. They do not switch the application to PostgreSQL. Backend conversion, automated PostgreSQL integration tests, data export/import tooling, and deployment remain outstanding.
