import React, { Suspense, lazy } from "react";
// import MarketingWebApp from "./components/MarketingWebApp";
import Header from "./components/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// styling
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress.js";
// import AutApp from "./components/AuthApp";

const AuthAppLazy = lazy(() => import("./components/AuthApp.js"));
const MarketingWebAppLazy = lazy(() =>
  import("./components/MarketingWebApp.js")
);

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthAppLazy} />
              <Route path="/" component={MarketingWebAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
