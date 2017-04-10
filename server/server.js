import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack.config';
import { renderReactTemplate } from './helpers/renderReactTemplate';
import { getAssets } from './helpers/get-assets';
import Index from './views/Index';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const clientPath = path.resolve(__dirname, '../client');

const app = express();
const compiler = webpack(webpackConfig);

app.use((req, res) => {
  const { jsAssets, cssAssets } = getAssets();

  const indexContent = renderReactTemplate(Index, {
    jsAssets,
    cssAssets,
    title: 'Britanica de Ballet',
  });
  res.send(indexContent);
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
