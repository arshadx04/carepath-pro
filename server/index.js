import { createServer } from './app.js';

const accountStore = process.env.DATABASE_URL
  ? await import('./postgresAccountStore.js')
  : await import('./accountStore.js');

const server = createServer();
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 8080);

server.listen(port, host, () => {
  console.log(`CarePath Pro server listening on http://${host}:${port}`);
});

server.on('error', error => {
  console.error('CarePath Pro server failed to start:', error.message);
  process.exitCode = 1;
});

let shuttingDown = false;
const shutdown = () => {
  if (shuttingDown) return;
  shuttingDown = true;
  server.close(async error => {
    try {
      await accountStore.closeAccountStore();
    } catch (closeError) {
      console.error('CarePath Pro database shutdown failed:', closeError.message);
      process.exitCode = 1;
      return;
    }
    if (error) {
      console.error('CarePath Pro server shutdown failed:', error.message);
      process.exitCode = 1;
    }
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
