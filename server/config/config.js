import getEnv from '..//helpers/getEnv';

export default {
  indexFile: getEnv('INDEX_FILE', 'index.html'),
  emailLogin: getEnv('EMAIL_LOGIN', 'jhon@snow.com'),
  emailPassword: getEnv('EMAIL_PASSWORD', 'Targaryen'),
};
