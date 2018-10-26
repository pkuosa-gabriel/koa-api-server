import path from 'path';

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
const BASE_CONFIG = (
  connection: string,
  client = 'pg',
  migrations = {
    directory: path.join(BASE_PATH, 'migrations'),
    extensions: ['js', 'ts'],
  },
  pool = {
    min: 1,
    max: 5,
  },
  seeds = {
    directory: path.join(BASE_PATH, 'seeds'),
  },
) => {
  return {client, connection, migrations, pool, seeds};
};

// TODO: replace connection addresses with environment variables
export const development = BASE_CONFIG(
  'postgres://gabriel@localhost:5432/koa_api',
);
export const production = BASE_CONFIG(
  'postgres://urlnyhzphfrc5zi4gbkp:5UeZHVkWc0xvrTxVZEIQ@bakgesa1d3jug3d-postgresql.services.clever-cloud.com:5432/bakgesa1d3jug3d',
);
export const test = BASE_CONFIG(
  'postgres://gabriel@localhost:5432/koa_api_test',
);

// // Configuration for local sqlite3 database, not perfectly suitable for this project.
// export const sqlite = BASE_CONFIG(
//   './tests/testdb.sqlite3', 'sqlite3',
// );
