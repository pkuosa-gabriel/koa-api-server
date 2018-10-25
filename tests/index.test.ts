import Debug from 'debug';
import request from 'supertest';

import server from '../src/index';

const debug = Debug('test:index');
afterEach(() => {
  server.close();
  debug('Server shut down!');
});
describe('routes: index', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('text/plain');
    expect(response.text).toEqual('Hello World!');
  });
});
