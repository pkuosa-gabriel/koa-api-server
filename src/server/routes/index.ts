import Debug from 'debug';
import Router from 'koa-router';

const debug = Debug('fugacious:index');
const indexRouter = new Router();

indexRouter.get('/', async ctx => {
  debug('Receive GET on /');
  ctx.body = {status: 'success', message: 'Hello World!'};
});

export default indexRouter;
