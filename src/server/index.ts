import Debug from 'debug';
import Koa from 'koa';
import indexRouter from './routes/index';
import poemsRouter from './routes/poems';

const debug = Debug('fugacious:server');
const app = new Koa();

const port = process.env.PORT || 3000;

// if (process.env.NODE_ENV === 'development') {
// const koaWebpack = require('koa-webpack');
// const config = require('../webpack.config');
// koaWebpack({config}).then(middleware => {
//   app.use(middleware);
// });
// }

app.use(indexRouter.routes());
app.use(poemsRouter.routes());

let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    debug(`Server running on port ${port}`);
  });
} else {
  server = app.listen();
}

export default server;
