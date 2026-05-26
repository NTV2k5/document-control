import { spawn } from 'node:child_process';
import path from 'node:path';

const __dirname = import.meta.dirname;

const serverPath = path.resolve(
  __dirname,
  '../node_modules/@electric-sql/pglite-socket/dist/scripts/server.js',
);

console.log('Starting PGLite Database Server...');
const dbServer = spawn('node', [serverPath, '-m', '100', '--db=local.db'], {
  stdio: ['ignore', 'inherit', 'inherit'],
  shell: true,
});

// Wait 2.5 seconds for the database to boot up, then run migrations
setTimeout(() => {
  console.log('Running Database Migrations...');
  const migrate = spawn('npm', ['run', 'db:migrate'], {
    stdio: 'inherit',
    shell: true,
  });

  migrate.on('close', (code) => {
    if (code === 0) {
      console.log('Migrations applied successfully!');
    } else {
      console.error(`Migration failed with exit code ${code}`);
    }
  });
}, 2500);

process.on('SIGINT', () => {
  dbServer.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  dbServer.kill('SIGTERM');
  process.exit(0);
});
