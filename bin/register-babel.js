const fs = require('fs');
const path = require('path');

const babelrc = fs.readFileSync(path.resolve(__dirname, '../.babelrc'));
let config = {};
const debug = process.env.NODE_ENV !== 'production';

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('✘✘✘ => It was a problem processing .babelrc file', err);
}

// it is not good idea stop the app on production
debug && process.on('uncaughtException', err => {
  setTimeout(() => {
    console.error('✘✘✘ => BIG! ERROR with the app, STOP IT!!!', err);
    process.exit(1);
  }, 1000);
});

require('babel-register')(config);
