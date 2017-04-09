import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack.config';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const clientPath = path.resolve(__dirname, '../client');

const app = express();
const compiler = webpack(webpackConfig);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (debug) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: clientPath,
  }));

  app.use(webpackHotMiddleware)(compiler);
}


app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});
