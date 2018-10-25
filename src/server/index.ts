import Debug from 'debug';
import Koa from 'koa';
import Router from 'koa-router';

const debug = Debug('server:index');
const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

router.get('/*', async ctx => {
  ctx.body = 'Hello World!';
});

// if (process.env.NODE_ENV === 'development') {
//   const koaWebpack = require('koa-webpack');
//   const config = require('../webpack.config');
//   koaWebpack({config}).then(middleware => {
//     app.use(middleware);
//   });
// }

app.use(router.routes());

const server = app.listen(port);

debug(`Server running on port ${port}`);

export default server;
