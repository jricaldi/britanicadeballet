import webpack from 'webpack';
import config from '../../config/config';

export const startApiForDevMode = (webpackConfig, app) => {
  const compiler = webpack(webpackConfig);
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
    res.write(middleware.fileSystem.readFileSync(`${webpackConfig.output.path}/${config.indexFile}`));
    res.end();
  });
};
