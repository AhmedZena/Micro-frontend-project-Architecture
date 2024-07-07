import React from "react";
import MarketingWebApp from "./components/MarketingWebApp";
import Header from "./components/Header";

import { BrowserRouter } from "react-router-dom";

// styling 
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});


export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        {/* <h1>Hey There! from container </h1> */}
        <MarketingWebApp />
      </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
