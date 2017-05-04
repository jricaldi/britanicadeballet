import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import webpack from 'webpack';
import serveStatic from 'serve-static';
import path from 'path';
import webpackConfig from '../webpack.config';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const clientPath = path.resolve(__dirname, '../client');
const staticPath = path.join(__dirname, '../static');

const app = express();
const compiler = webpack(webpackConfig);

app.use(serveStatic(staticPath));

app.use((req, res) => {
  res.sendFile(`${staticPath}/bundles/index.html`);
});


if (debug) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: clientPath,
    stats: {
      colors: true,
    },
  }));
  console.log(webpackHotMiddleware(compiler));
}

app.listen(PORT, () => {
  console.log('Running Britanica de Ballet app');
});
