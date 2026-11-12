# SQLite to PostgreSQL migration notes

## Compatibility decisions

- PostgreSQL uses the `pg` Pool when `DATABASE_URL` is configured.
- SQLite remains the default account store when `DATABASE_URL` is absent.
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
- Password reset runs in one PostgreSQL transaction on one checked-out PoolClient: validate token, update password, revoke sessions, consume reset tokens, then commit. Roll back on any failure.
- Never log `DATABASE_URL`, raw tokens, passwords, or credential hashes.

## Implementation status

Implemented in the application:

- PostgreSQL account-store implementation in `server/postgresAccountStore.js`.
- Runtime selection of PostgreSQL when `DATABASE_URL` is set, with SQLite retained as the default.
- Async account, session, password-reset, and bookmark operations in the API handlers.
- PostgreSQL schema in `migrations/001_postgres_schema.sql`.
- PostgreSQL store integration tests and a PostgreSQL service in GitHub Actions, alongside the SQLite regression suite.

The PostgreSQL CI integration test validates the store layer against a temporary PostgreSQL service. It does not validate a production database, a deployed HTTP service, or a migrated production account set.

## Production migration: NOT COMPLETED

Merging the PostgreSQL implementation does not migrate or switch production data. The deployed service remains on its configured database until an operator deliberately changes its environment.

Before setting `DATABASE_URL` in production:

1. Identify the authoritative SQLite database used by the deployed Node service. GitHub Pages is static hosting and does not run this API.
2. Confirm the target PostgreSQL instance, access policy, backups, and restore procedure.
3. Take a protected, verified backup of the SQLite database.
4. Export the four tables while preserving IDs, password salts/hashes, token digests, and integer timestamp values.
5. Import users before dependent rows, in a transaction. Do not copy expired sessions or reset tokens without an explicit policy.
6. Verify row counts, foreign-key integrity, case-insensitive email uniqueness, and representative login/session/bookmark/password-reset behavior.
7. Test the rollback procedure against a staging environment before production cutover.
8. Keep the original SQLite backup protected until PostgreSQL operation is verified and rollback is no longer required.

Do not commit database files, connection strings, passwords, or provider credentials to Git. Configure secrets through the hosting provider's environment settings.
