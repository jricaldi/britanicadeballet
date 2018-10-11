import React, { Component } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import { hot } from 'react-hot-loader';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from '../Layout/Layout';
import './root.scss';

const history = createBrowserHistory();

class Root extends Component {
  componentDidMount = () => {
    aos.init();
  };

  render = () => (
    <Router history={ history } onLoad={ this.completedLoad }>
      <Route exact path="/" component={ Layout } />
    </Router>
  );
}

export default hot(module)(Root);
