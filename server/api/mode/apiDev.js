import webpack from 'webpack';
import devMidleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
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
  console.log('dev!!!!');
  const middleware = devMidleware(compiler, serverOptions);

  app.use(middleware);

  app.use(hotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(`${webpackConfig.output.path}/${config.indexFile}`));
    res.end();
  });
};
