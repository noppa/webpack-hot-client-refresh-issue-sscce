const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const indexHtml = fs.readFileSync('./index.html', 'utf8');
const iframeHtml = fs.readFileSync('./iframe.html', 'utf8');

const compiler = require('webpack')(require('./webpack.config.js'));

const koaWebpack = require('koa-webpack');

koaWebpack({
  compiler,
  devMiddleware: {
    publicPath: '/'
  },
  hotClient: {
    reload: true,
    hmr: false,
    autoConfigure: true,
    allEntries: true
  }
})
  .then((middleware) => {
    app.use(middleware);

    // Very simple setup to serve the html files without additional dependencies
    app.use((ctx, next) => {
      if (/\/$/.test(ctx.path)) {
        ctx.body = indexHtml;
      } else if (/iframe\.html$/.test(ctx.path)) {
        ctx.body = iframeHtml;
      }

      return next();
    });

    app.listen(8080, () => console.log('App started in localhost:8080'));
  });