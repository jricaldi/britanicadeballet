import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from '../Layout/Layout';

const history = createBrowserHistory();

const Root = () =>
  <Router history={ history }>
    <Route exact path="/" component={ Layout } />
  </Router>;

export default Root;
