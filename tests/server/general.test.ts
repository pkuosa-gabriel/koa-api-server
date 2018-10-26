// This test is for testing in the development environment.
process.env.NODE_ENV = 'development';
import Debug from 'debug';
import request from 'supertest';
import server from '../../src/server/index';

const debug = Debug('test:general');
afterEach(() => {
  server.close();
  debug('Server shut down!');
});
describe('general test', () => {
  test('GET hello-world via /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('Hello World!');
  });
});
