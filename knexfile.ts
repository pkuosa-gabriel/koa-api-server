import path from 'path';

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

// TODO: replace connection addresses with environment variables
export const development = {
  client: 'pg',
  connection: 'postgres://gabriel@localhost:5432/koa_api',
  migrations: {
    directory: path.join(BASE_PATH, 'migrations'),
    extensions: ['js', 'ts'],
  },
  pool: {
    max: 5,
    min: 1,
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds'),
  },
};

export const production = {
  client: 'pg',
  connection:
    'postgresql://urlnyhzphfrc5zi4gbkp:5UeZHVkWc0xvrTxVZEIQ@bakgesa1d3jug3d-postgresql.services.clever-cloud.com:5432/bakgesa1d3jug3d',
  migrations: {
    directory: path.join(BASE_PATH, 'migrations'),
    extensions: ['js', 'ts'],
  },
  pool: {
    max: 5,
    min: 1,
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds'),
  },
};

// // Use SQLite3 for testing
// export const test = {
//   client: 'sqlite3',
//   connection: {filename: './tests/testdb.sqlite3'},
//   migrations: {
//     directory: path.join(BASE_PATH, 'migrations'),
//     extensions: ['js', 'ts'],
//   },
//   pool: {
//     max: 1,
//     min: 1,
//   },
//   seeds: {
//     directory: path.join(BASE_PATH, 'seeds'),
//   },
// };

// Use local PostgreSQL for testing
export const test = {
  client: 'pg',
  connection: 'postgres://gabriel@localhost:5432/koa_api_test',
  migrations: {
    directory: path.join(BASE_PATH, 'migrations'),
    extensions: ['js', 'ts'],
  },
  pool: {
    max: 5,
    min: 1,
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds'),
  },
};
