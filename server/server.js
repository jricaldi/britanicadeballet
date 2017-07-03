import express from 'express';
import webpack from 'webpack';
import serveStatic from 'serve-static';
import path from 'path';
import webpackConfig from '../webpack.config';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const staticPath = path.resolve(__dirname, '../static');

const app = express();
const compiler = webpack(webpackConfig);


if (debug) {
  const serverOptions = {
    contentBase: webpackConfig.output.path,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
    },
  };
  const middleware = require('webpack-dev-middleware')(compiler, serverOptions); //eslint-disable-line

  app.use(middleware);
  app.use(require('webpack-hot-middleware')(compiler)); //eslint-disable-line
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(`${webpackConfig.output.path}/index.html`));
    res.end();
  });
} else {
  app.use(serveStatic(staticPath));
  app.use(serveStatic(webpackConfig.output.path));
  app.get('*', (req, res) => {
    res.sendFile(`${webpackConfig.output.path}/index.html`);
  });
}

app.listen(PORT, () => {
  console.log(` 🌎  Running Británica de Ballet app on PORT = ${PORT}`);
});
