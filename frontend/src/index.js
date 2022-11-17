

import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { ThemeProvider } from "styled-components";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);