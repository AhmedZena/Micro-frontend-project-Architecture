import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// custom history object
import { createMemoryHistory , createBrowserHistory } from "history";
 if (process.env.NODE_ENV !== "production") {
   console.log("Looks like we are in development mode!");
 } else {
    console.log("Looks like we are in production mode!");     
  }

// mount funct to start the app
const mount = (el, { onNavigate, defaultHistory }) => {
  console.log(defaultHistory , onNavigate);
  // create a custom history object
  const history =defaultHistory || createMemoryHistory();  //custom history object that is used to navigate between different routes
  onNavigate && history.listen(onNavigate); // that listenning to path and when change it work

  ReactDOM.render(<App history={history} />, el);

  return {
    str: "string",
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname: currentPathname } = history.location;
      if (currentPathname != nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// if we are in dev and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el, {defaultHistory:createBrowserHistory()});
  }
}

// we are run throught container
// and we shoiuld export the mount function
export { mount };
