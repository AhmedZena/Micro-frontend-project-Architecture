import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// custom history object
import { createMemoryHistory } from "history";

// mount funct to start the app
const mount = (el, { onNavigate }) => {
  console.log(onNavigate);
  // create a custom history object
  const history = createMemoryHistory(); //custom history object that is used to navigate between different routes
  onNavigate && history.listen(onNavigate); // that listenning to path and when change it work

  ReactDOM.render(<App history={history} />, el);

  return {
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
    mount(el, {});
  }
}

// we are run throught container
// and we shoiuld export the mount function
export { mount };
