import Debug from 'debug';
import request from 'supertest';
import knex from '../../src/server/db/connection';
import server from '../../src/server/index';

const debug = Debug('test:poems');
beforeEach(() => {
  debug('Database to be migrated!');
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      debug('Database to be seeded!');
      return knex.seed.run();
    });
});

afterEach(() => {
  debug('Database to be rolled back!');
  return knex.migrate.rollback();
});

afterEach(() => {
  server.close();
  debug('Server shut down!');
});
describe('routes: poems', () => {
  test('GET all poems via /api/v1/poems', async () => {
    const response = await request(server).get('/api/v1/poems');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      ['id', 'name', 'author', 'votes'].sort(),
    );
  });

  test('GET a poem via /api/v1/poems/:id', async () => {
    const response = await request(server).get('/api/v1/poems/1');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      ['id', 'name', 'author', 'votes'].sort(),
    );
  });

  test('GET a non-existing poem /api/v1/poems/:id', async () => {
    const response = await request(server).get('/api/v1/poems/999');
    expect(response.status).toEqual(404);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('The poem does not exist.');
  });
});
