import path from 'path';

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  development: {
    client: 'pg',
    connection:
      'postgresql://uo0x3uir8nufcoy5nvft:EhU5TbtMQ1c9LjSrZiCr@b9xasdiuuy900yf-postgresql.services.clever-cloud.com:5432/b9xasdiuuy900yf',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    pool: {
      max: 5,
      min: 2,
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },

  production: {
    client: 'pg',
    connection:
      'postgresql://urlnyhzphfrc5zi4gbkp:5UeZHVkWc0xvrTxVZEIQ@bakgesa1d3jug3d-postgresql.services.clever-cloud.com:5432/bakgesa1d3jug3d',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    pool: {
      max: 5,
      min: 2,
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
};
