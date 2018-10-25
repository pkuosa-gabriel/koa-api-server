// Update with your config settings.

const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  development: {
    client: 'postgresql',
    connection:
      'postgresql://uo0x3uir8nufcoy5nvft:EhU5TbtMQ1c9LjSrZiCr@b9xasdiuuy900yf-postgresql.services.clever-cloud.com:5432/b9xasdiuuy900yf',
    pool: {
      min: 2,
      max: 5,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },

  production: {
    client: 'postgresql',
    connection:
      'postgresql://urlnyhzphfrc5zi4gbkp:5UeZHVkWc0xvrTxVZEIQ@bakgesa1d3jug3d-postgresql.services.clever-cloud.com:5432/bakgesa1d3jug3d',
    pool: {
      min: 2,
      max: 5,
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
};
