import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import Root from "./containers/Root/Root";
import * as stores from "./stores";
import "./sass/global.scss";

const browserHistory = createBrowserHistory();

const app = document.getElementById("app-content");

render(
  <Provider {...stores}>
    <Root history={browserHistory} />
  </Provider>,
  app
);
