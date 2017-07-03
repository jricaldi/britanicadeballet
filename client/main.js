import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root/Root';
import './sass/global.scss';

const app = document.getElementById('app-content');


render(
  <Root />,
  app);
