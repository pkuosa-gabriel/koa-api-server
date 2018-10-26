# koa-api-server (Code name: _fugacious_)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/pkuosa-gabriel/koa-api-server/branch/master/graph/badge.svg)](https://codecov.io/gh/pkuosa-gabriel/koa-api-server)
[![codebeat badge](https://codebeat.co/badges/fe291c9f-31d1-4ff6-b9c1-0e3f1f7fb0af)](https://codebeat.co/projects/github-com-pkuosa-gabriel-koa-api-server-master)

A simple RESTful API server based on [koa.js](https://github.com/koajs/koa).

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

- Use `supertest`-generated random ports instead of a fixed port to avoid the
  'address in use' error in `Jest`.
- `module.exports` can be rewritten with multi `export const`.
- `PM2` seems unable to recognize a .ts configuration file.
- Although `Knex` has tried its best to uniform different databases, there are
  quite a few differences which require attention.
- `koa-webpack` does not work very well with `Typescript`.

## Problems

- There is something wrong with the Travis-Now integration, which I have never
  met before. The errors were like:

```bash

```

I

## References

- [Start building web apps with koajs and typescript](https://medium.com/netscape/start-building-web-apps-with-koajs-and-typescript-366264dec608)
- [A clear and concise introduction to testing Koa with Jest and Supertest](https://www.valentinog.com/blog/testing-api-koa-jest/)
- [Building a RESTful API with Koa and Postgres](https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/)
- Many other blogs and articles which I forgot to record.
