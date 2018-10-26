const projectName = 'koa-api-server';

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: projectName,
      script: './dist/server.bundle.js',
      instances: '1',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
