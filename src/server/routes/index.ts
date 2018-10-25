import Debug from 'debug';
import Router from 'koa-router';

const debug = Debug('server:router');
const router = new Router();

router.get('/', async ctx => {
  debug('Receive GET on /');
  ctx.body = {status: 'success', message: 'hello, world!'};
});

export default router;
