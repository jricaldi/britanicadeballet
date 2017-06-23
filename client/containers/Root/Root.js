import React, { Component } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from '../Layout/Layout';
import './root.scss';

const history = createBrowserHistory();

export default class Root extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount = () => {
    aos.init();
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render = () => {
    const { loading } = this.state;

    if (loading) {
      return <div class="loadingLanding" />;
    }

    return <Router history={ history }>
      <Route exact path="/" component={ Layout } />
    </Router>;
  }

}
