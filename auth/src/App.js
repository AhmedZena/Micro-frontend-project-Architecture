import React from "react";
import { Switch, Route, Router } from "react-router-dom"; // Router is used to create a custom history object

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom";
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
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};
