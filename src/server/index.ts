import Debug from 'debug';
import Koa from 'koa';
import koaBody from 'koa-body';
// import koaWebpack from 'koa-webpack';
// import config from '../../webpack.config';
import indexRouter from './routes/index';
import poemsRouter from './routes/poems';

const debug = Debug('fugacious:server');
const app = new Koa();

const port = process.env.PORT || 3000;

// if (process.env.NODE_ENV === 'development') {
//   koaWebpack({config}).then(middleware => {
//     app.use(middleware);
//   });
// }

app.use(koaBody());
app.use(indexRouter.routes());
app.use(poemsRouter.routes());

let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    debug(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
  });
} else {
  server = app.listen();
}

export default server;
