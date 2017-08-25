import getEnv from '..//helpers/getEnv';

export default {
  indexFile: getEnv('INDEX_FILE', 'index.html'),
};
