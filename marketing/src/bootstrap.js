import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// mount funct to start the app
const mount = (el) => {
//   ReactDOM.render(<h1>Hi There!</h1>, el);
    ReactDOM.render(<App />, el);
};

// if we are in dev and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el);
  }
}

// we are run throught container
// and we shoiuld export the mount function
export { mount };
