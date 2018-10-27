# koa-api-server (Code name: _fugacious_)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/pkuosa-gabriel/koa-api-server/branch/master/graph/badge.svg)](https://codecov.io/gh/pkuosa-gabriel/koa-api-server)
[![codebeat badge](https://codebeat.co/badges/fe291c9f-31d1-4ff6-b9c1-0e3f1f7fb0af)](https://codebeat.co/projects/github-com-pkuosa-gabriel-koa-api-server-master)
[![Greenkeeper badge](https://badges.greenkeeper.io/pkuosa-gabriel/koa-api-server.svg)](https://greenkeeper.io/)

A simple RESTful API server based on [koa.js](https://github.com/koajs/koa).

## Highlights

- Work as a cloud function (using now cloud v2)
- Behavior-driven-development

## Tech Stack

- Typescript + Babel + Webpack
- Koa.js
- Knex.js + PostgreSQL
- Jest
- Other tools
  - lint-staged
  - husky
  - prettier
  - codecov
  - travis (used only for sending code coverage reports)
  - now

## Notes

### Test with Jest

In [koa-http-server](https://github.com/pkuosa-gabriel/koa-http-server), Mocha
and Chai were used. This time, I tried Jest instead, which was originally
developed by Facebook. and is another popular test framework.

- Use `supertest`-generated random ports instead of a fixed port to avoid the
  'address in use' error in `Jest`.

### About SQL

- Although `Knex` has tried its best to uniform different databases, there are
  quite a few differences which require attention. For example, some tests
  designed for `PostgreSQL` will fail when using `SQLite`.

### About modules

- `module.exports` can be rewritten with multi `export const`.
- run with `ts-node`:

  ```bash
  ts-node -O '{\"module\": \"commonjs\"}'
  ```

- Unlike a recent blog said, it is OK to set `module` as `commonjs` in
  `tsconfig.json`.

### Deployment

- Now cloud v2 was used in this repository. I really appreciate the brilliant
  work of zeit.co. Without their product, it is impossible for _fugacious_ to be
  deployed as a cloud function.

## Problems

- `PM2` seems unable to recognize a .ts configuration file.
- `koa-webpack` does not work very well with `Typescript`. I kept relevant code
  as comments in the repository, and might give it another go in the future.
- There is something wrong with the Travis-Now integration, which I have never
  met before. The errors were like `cannot read property 'length' of undefined`.
  It seemed that the error occurred when `now` was trying to read configurations
  from `package.json` or `now.json`, but I have not figured it out yet, and I
  have switched to using the native Now-Github integration.

## References

- [Start building web apps with koajs and typescript](https://medium.com/netscape/start-building-web-apps-with-koajs-and-typescript-366264dec608)
- [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/)
- [Building a RESTful API with Koa and Postgres](https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/)
- Many other blogs and articles which I forgot to record.
