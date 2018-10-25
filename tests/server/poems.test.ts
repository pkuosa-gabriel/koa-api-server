import Debug from 'debug';
import request from 'supertest';
import knex from '../../src/server/db/connection';
import server from '../../src/server/index';

const debug = Debug('test:poems');
beforeEach(async () => {
  return knex.migrate
    .rollback()
    .then(() => {
      debug('Database to be migrated!');
      return knex.migrate.latest();
    })
    .then(() => {
      debug('Database to be seeded!');
      return knex.seed.run();
    });
});

afterEach(async () => {
  debug('Database to be rolled back!');
  return knex.migrate.rollback();
});

// afterEach(async () => {
//   await app.close();
//   debug('Server shut down!');
// });
describe('routes: poems', () => {
  test('GET /api/v1/movies', async () => {
    const response = await request(server).get('/api/v1/poems');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    debug(Object.keys(response.body.data[0]).sort());
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      ['id', 'name', 'author', 'votes'].sort(),
    );
  });
});
