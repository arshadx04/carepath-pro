import { createServer } from './app.js';

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

const shutdown = () => server.close(() => process.exit(0));
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
