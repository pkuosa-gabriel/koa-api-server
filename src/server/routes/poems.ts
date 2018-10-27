// Need to explicitly import koaBody otherwise dev server cannot be started.
import koaBody from 'koa-body';

import Debug from 'debug';
import Router from 'koa-router';
import {CODE, MESSAGE} from '../../common/response';
import queries from '../db/queries/poems';

const debug = Debug('fugacious:poems');
const poemsRouter = new Router({
  prefix: '/api/v1/poems',
});
const PRE_GET = true;
const NON_PRE_GET = false;

const handle = async (
  ctx,
  queryFunc,
  queryParams,
  successCode,
  successMessage,
  failCode,
  failMessage,
  errorCode,
  errorMessage,
  preGet = NON_PRE_GET,
) => {
  try {
    let result;
    if (preGet === true) {
      result = await queries.getSinglePoem(queryParams[0]);
      await queryFunc(...queryParams);
    } else {
      result = await queryFunc(...queryParams);
    }
    debug('result = ', result);
    if (result.length) {
      ctx.status = successCode;
      ctx.body = {status: 'success', data: result, message: successMessage};
    } else {
      ctx.status = failCode;
      ctx.body = {status: 'fail', message: failMessage};
    }
  } catch (err) {
    ctx.status = errorCode;
    ctx.body = {status: 'error', message: err.message || errorMessage};
  }
};

const handleGetPoems = async ctx =>
  handle(
    ctx,
    queries.getAllPoems,
    [],
    CODE.OK,
    'Here are all the poems.',
    CODE.NOT_FOUND,
    'There are no poems.',
    CODE.BAD_REQUEST,
    MESSAGE.ERROR,
  );

const handleGetPoem = async ctx =>
  handle(
    ctx,
    queries.getSinglePoem,
    [ctx.params.id],
    CODE.OK,
    'Here is the requested poem.',
    CODE.NOT_FOUND,
    'The poem does not exist.',
    CODE.BAD_REQUEST,
    MESSAGE.ERROR,
  );

const handlePostPoem = async ctx =>
  handle(
    ctx,
    queries.addPoem,
    [ctx.request.body],
    CODE.CREATED,
    'The poem has been posted successfully.',
    CODE.NOT_ACCEPTABLE,
    'One or more fields are missing.',
    CODE.BAD_REQUEST,
    MESSAGE.ERROR,
  );

const handlePatchPoem = async ctx =>
  handle(
    ctx,
    queries.updatePoem,
    [ctx.params.id, ctx.request.body],
    CODE.ACCEPTED,
    'The poem has been patched successfully.',
    CODE.NOT_FOUND,
    'The poem does not exist.',
    CODE.BAD_REQUEST,
    MESSAGE.ERROR,
  );

const handleDeletePoem = async ctx =>
  handle(
    ctx,
    queries.deletePoem,
    [ctx.params.id],
    CODE.ACCEPTED,
    'The poem has been deleted successfully.',
    CODE.NOT_FOUND,
    'The poem does not exist.',
    CODE.BAD_REQUEST,
    MESSAGE.ERROR,
    PRE_GET,
  );

poemsRouter
  .get('/', handleGetPoems)
  .get('/:id', handleGetPoem)
  .post('/', handlePostPoem)
  .patch('/:id', handlePatchPoem)
  .delete('/:id', handleDeletePoem);

export default poemsRouter;
