const registerBabel = require('./register-babel');
const serverApp = require('../server/server');

function main() {
  registerBabel();
  serverApp();
}

main();
