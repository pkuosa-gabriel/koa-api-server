import Debug from 'debug';
import Router from 'koa-router';
import queries from '../db/queries/poems';

const debug = Debug('fugacious:poems');
const poemsRouter = new Router();
const BASE_URL = `/api/v1/poems`;

poemsRouter
  .get(BASE_URL, async ctx => {
    debug(`Receive GET on ${BASE_URL}`);
    try {
      const poems = await queries.getAllPoems();
      ctx.body = {status: 'success', data: poems};
    } catch (err) {
      debug('Error: ', err);
      ctx.status = 404;
    }
  })
  .get(`${BASE_URL}/:id`, async ctx => {
    debug(`Receive GET on ${BASE_URL}/:id`);
    try {
      const poem = await queries.getSinglePoem(ctx.params.id);
      if (poem.length) {
        ctx.body = {status: 'success', data: poem};
      } else {
        ctx.status = 404;
        ctx.body = {status: 'error', message: 'The poem does not exist.'};
      }
    } catch (err) {
      debug('Error: ', err);
      ctx.status = 404;
    }
  });

export default poemsRouter;
