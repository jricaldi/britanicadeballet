import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Inicio from '../components/Inicio';
import Layout from '../components/layout/Layout';

const history = createBrowserHistory();

const Root = () =>
  <Router history={ history }>
    <Layout>
      <Route exact path="/" component={ Inicio } />
    </Layout>
  </Router>;

export default Root;
