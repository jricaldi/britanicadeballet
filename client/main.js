import React from 'react';
import { render } from 'react-dom';
import * as offlinePluginRuntime from 'offline-plugin/runtime';
import Root from './containers/Root/Root';
import './sass/global.scss';

offlinePluginRuntime.install();

const app = document.getElementById('app-content');


render(
  <Root />,
  app);
