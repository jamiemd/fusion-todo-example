import Router from "fusion-plugin-react-router";
import Styletron from "fusion-plugin-styletron-react";

import root from "./root.js";

import React from "react";
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken
} from "fusion-plugin-react-redux";
import ReduxActionEmitterEnhancer from "fusion-plugin-redux-action-emitter-enhancer";
import App from "fusion-react";
import reducer from "./reducers/todos";

export default function start() {
  const app = new App(root);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(Styletron);
  app.register(Router);
  __NODE__ && app.register(GetInitialStateToken, async ctx => ({}));

  return app;
}
