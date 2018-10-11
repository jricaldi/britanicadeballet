// import redirectToSSL from 'express-sslify';
import serveStatic from 'serve-static';
import compression from 'compression';
import config from '../../config/config';

export const startApiForProdMode = (webpackConfig, app, staticPath) => {
  console.log('prodf!!!!');
  // app.use(redirectToSSL.HTTPS({ trustProtoHeader: true })); // redirect to HTTPS https://github.com/florianheinemann/express-sslify#reverse-proxies-heroku-nodejitsu-and-others
  app.use(compression());
  app.use(serveStatic(staticPath));
  app.use(serveStatic(webpackConfig.output.path));
  app.get('*', (req, res) => {
    res.sendFile(`${webpackConfig.output.path}/${config.indexFile}`);
  });
};
