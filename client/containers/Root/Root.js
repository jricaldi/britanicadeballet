import React, { PureComponent } from 'react';
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

export default class Root extends PureComponent {
  componentDidMount = () => {
    aos.init();
  }

  render = () =>
    <Router history={ history } onLoad={ this.completedLoad }>
      <Route exact path="/" component={ Layout } />
    </Router>;
}
