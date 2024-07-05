import React from "react";
import MarketingWebApp from "./components/MarketingWebApp";
import Header from "./components/Header";

import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <h1>Hey There! from container </h1> */}
        <MarketingWebApp />
      </div>
    </BrowserRouter>
  );
};
