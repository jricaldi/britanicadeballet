import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Root from './containers/Root/Root';
import * as stores from './stores';
import './sass/global.scss';

if (___OFFLINE_APP___) {
  const offlinePluginRuntime = require('offline-plugin/runtime'); //eslint-disable-line
  offlinePluginRuntime.install({
    onUpdateReady: () => offlinePluginRuntime.applyUpdate(),
  });
}
const app = document.getElementById('app-content');

render(
  <Provider { ...stores }>
    <Root />
  </Provider>,
  app);
