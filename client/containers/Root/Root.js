import React, { Component } from "react";
import { observer } from "mobx-react";
import { Router, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

import "./root.scss";

@observer
export default class Root extends Component {
  render({ history } = this.props) {
    return (
      <Router history={history}>
        <Route
          exact
          path="/"
          render={(routeProps) => <Layout {...routeProps} />}
        />
      </Router>
    );
  }
}
