// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";

import Home from "./pages/home.js";
import PageNotFound from "./pages/pageNotFound.js";
import Todos from "./components/todos.js";

const root = (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route exact path="/" component={Todos} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
