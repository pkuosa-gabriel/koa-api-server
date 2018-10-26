import Debug from 'debug';
import request from 'supertest';
import uuid from 'uuid';
import {CODE} from '../../../src/common/response';
import knex from '../../../src/server/db/connection';
import server from '../../../src/server/index';

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
    expect(response.status).toEqual(CODE.OK);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      [
        'id',
        'title',
        'author',
        'contents',
        'votes',
        'created_at',
        'updated_at',
      ].sort(),
    );
  });

  test('GET a poem via /api/v1/poems/:id', async () => {
    const response = await request(server).get('/api/v1/poems/1');
    expect(response.status).toEqual(CODE.OK);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      [
        'id',
        'title',
        'author',
        'contents',
        'votes',
        'created_at',
        'updated_at',
      ].sort(),
    );
  });

  test('GET a non-existing poem /api/v1/poems/:id', async () => {
    const response = await request(server).get('/api/v1/poems/999');
    expect(response.status).toEqual(CODE.NOT_FOUND);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('The poem does not exist.');
  });

  test('POST a poem via /api/v1/poems', async () => {
    const response = await request(server)
      .post('/api/v1/poems')
      .send({
        title: 'Test',
        author: 'Test Author',
        contents: uuid.v1(),
        votes: 6,
      });
    expect(response.status).toEqual(CODE.CREATED);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      [
        'id',
        'title',
        'author',
        'contents',
        'votes',
        'created_at',
        'updated_at',
      ].sort(),
    );
  });

  test('POST nothing via /api/v1/poems', async () => {
    const response = await request(server).post('/api/v1/poems');
    expect(response.status).toEqual(CODE.BAD_REQUEST);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual(
      'insert into "poems" default values returning * - null value in column "title" violates not-null constraint',
    );
  });

  test('POST a malformed poem via /api/v1/poems', async () => {
    const response = await request(server)
      .post('/api/v1/poems')
      .send({title: 'Test' + uuid.v1()});
    expect(response.status).toEqual(CODE.BAD_REQUEST);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual(
      'insert into "poems" ("title") values ($1) returning * - null value in column "author" violates not-null constraint',
    );
  });

  test('PATCH a poem via /api/v1/poems/:id', async () => {
    const response = await request(server)
      .patch('/api/v1/poems/1')
      .send({contents: 'Test' + uuid.v1()});
    expect(response.status).toEqual(CODE.ACCEPTED);
    expect(response.type).toEqual('application/json');
    expect(Object.keys(response.body.data[0]).sort()).toEqual(
      [
        'id',
        'title',
        'author',
        'contents',
        'votes',
        'created_at',
        'updated_at',
      ].sort(),
    );
  });

  test('PATCH a non-existing poem via /api/v1/poems/:id', async () => {
    const response = await request(server)
      .patch('/api/v1/poems/999')
      .send({contents: 'Test' + uuid.v1()});
    expect(response.status).toEqual(CODE.NOT_FOUND);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('The poem does not exist.');
  });

  test('DELETE a poem via /api/v1/poems/:id', async () => {
    const response = await request(server).delete('/api/v1/poems/1');
    expect(response.status).toEqual(CODE.ACCEPTED);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual(
      'The poem has been deleted successfully.',
    );
  });

  test('DELETE a non-existing poem via /api/v1/poems/:id', async () => {
    const response = await request(server).delete('/api/v1/poems/999');
    expect(response.status).toEqual(CODE.NOT_FOUND);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('The poem does not exist.');
  });
});
