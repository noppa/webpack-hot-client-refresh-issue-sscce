const config = require('./webpack.config.js');
const serve = require('webpack-serve');

serve({
  config,
  logLevel: 'trace',
  hot: {
    autoConfigure: true,
    hot: false,
    reload: true,
  },
  dev: {
    publichPath: '/'
  },
  add: (app, middleware) => {
    middleware.webpack();
    middleware.content({
      index: 'index.html'
    });
  }
});