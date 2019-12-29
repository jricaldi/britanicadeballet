import React, { Component } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Router, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { observer } from "mobx-react";
import "./root.scss";

@observer
export default class Root extends Component {
  componentDidMount = () => {
    aos.init();
  };

  render({ history } = this.props) {
    return (
      <Router history={history}>
        <Route
          exact
          path="/"
          render={routeProps => <Layout {...routeProps} />}
        />
      </Router>
    );
  }
}
