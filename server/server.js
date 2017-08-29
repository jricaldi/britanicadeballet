import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack.config';
import { startApiForDevMode } from './api/mode/apiDev';
import { startApiForProdMode } from './api/mode/apiProd';
import * as actions from './api/actions';

const debug = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '10000mb' }));
app.use(bodyParser.json({ limit: '10000mb' }));

if (debug) {
  startApiForDevMode(webpackConfig, app);
} else {
  const staticPath = path.resolve(__dirname, '../static');
  startApiForProdMode(webpackConfig, app, staticPath);
}

app.post('/sendMail', actions.sendMail);

app.listen(PORT, () => {
  console.log(` 🌎  Running Británica de Ballet app on PORT = ${PORT}`);
});
