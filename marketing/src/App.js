import React from "react";
import { Switch, Route, Router } from "react-router-dom"; // Router is used to create a custom history object

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  //  the history object is passed as a prop to the App component
  // it is a custom history object that is used to navigate between different routes
  // here it is a memory history object




  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};
