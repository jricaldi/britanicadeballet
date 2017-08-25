import express from 'express';
import path from 'path';
import webpackConfig from '../webpack.config';
import { startApiForDevMode } from './api/mode/apiDev';
import { startApiForProdMode } from './api/mode/apiProd';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();


if (debug) {
  startApiForDevMode(webpackConfig, app);
} else {
  const staticPath = path.resolve(__dirname, '../static');
  startApiForProdMode(webpackConfig, app, staticPath);
}

app.listen(PORT, () => {
  console.log(` 🌎  Running Británica de Ballet app on PORT = ${PORT}`);
});
