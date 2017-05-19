import React from 'react';
import { render } from 'react-dom';
import Root from './views/root/Root';
import './main.scss';

const app = document.getElementById('app-content');


render(
  <Root />,
  app);
