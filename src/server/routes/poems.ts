import Debug from 'debug';
import Router from 'koa-router';
import queries from '../db/queries/poems';

const debug = Debug('fugacious:poems');
const poemsRouter = new Router();
const BASE_URL = `/api/v1/poems`;

poemsRouter.get(BASE_URL, async ctx => {
  debug(`Receive GET on ${BASE_URL}`);
  try {
    const poems = await queries.getAllPoems();
    ctx.body = {status: 'success', data: poems};
  } catch (err) {
    debug('Error: ', err);
    ctx.status = 404;
  }
});

export default poemsRouter;
