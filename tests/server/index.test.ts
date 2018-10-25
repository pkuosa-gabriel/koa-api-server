import Debug from 'debug';
import request from 'supertest';
import server from '../../src/server/index';

const debug = Debug('test:index');
// afterEach(async () => {
//   await server.close();
//   debug('Server shut down!');
// });
describe('routes: index', () => {
  test('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('Hello World!');
  });
});
