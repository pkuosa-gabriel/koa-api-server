import Debug from 'debug';
import request from 'supertest';
import {CODE} from '../../../src/common/response';
import server from '../../../src/server/index';

const debug = Debug('test:index');
afterEach(() => {
  server.close();
  debug('Server shut down!');
});
describe('routes: index', () => {
  test('GET hello-world via /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(CODE.OK);
    expect(response.type).toEqual('application/json');
    expect(response.body.message).toEqual('Hello World!');
  });
});
