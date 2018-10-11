const register = require('@babel/register');

const babelConfig = require('../webpack/babel.config');

const isProd = process.env.NODE_ENV === 'production';

// it is not good idea stop the app on production
!isProd && process.on('uncaughtException', err => {
  setTimeout(() => {
    console.error('✘✘✘ => BIG! ERROR with the app, STOP IT!!!', err);
    process.exit(1);
  }, 1000);
});

register(babelConfig);
