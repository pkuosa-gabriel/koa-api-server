const Koa = require('koa');
const Router = require('koa-router');
const debug = require('debug')('server:index');
const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);

debug('Server running on port 3000');
