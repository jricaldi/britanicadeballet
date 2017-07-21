import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root/Root';
import './sass/global.scss';

if (___OFFLINE_APP___) {
  const offlinePluginRuntime = require('offline-plugin/runtime'); //eslint-disable-line
  offlinePluginRuntime.install();
}
const app = document.getElementById('app-content');


render(
  <Root />,
  app);
