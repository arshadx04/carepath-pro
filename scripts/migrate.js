import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required to run database migrations.');
}

const schemaPath = fileURLToPath(new URL('../migrations/001_postgres_schema.sql', import.meta.url));
const schema = await readFile(schemaPath, 'utf8');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE === 'disable' ? false : { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
});

try {
  await pool.query(schema);
  console.log('CarePath Pro PostgreSQL schema is up to date.');
} finally {
  await pool.end();
}
