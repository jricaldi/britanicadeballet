import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Inicio from '../components/Inicio';

const history = createBrowserHistory();

const Root = () =>
  <Router history={ history }>
    <Route exact path="/" component={ Inicio } />
  </Router>;

export default Root;
