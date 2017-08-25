import nullish from './nullish';

const getEnv = (envValue, defaultValue) => {
  const value = process.env[envValue];
  if (nullish(value)) return defaultValue;
  return value;
};

export default getEnv;
