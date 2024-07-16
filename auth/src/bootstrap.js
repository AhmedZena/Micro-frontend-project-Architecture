import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// custom history object
import { createMemoryHistory, createBrowserHistory } from "history";

// mount funct to start the app
const mount = (el, { onNavigate, defaultHistory , initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    }); //custom history object that is used to navigate between different routes
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
  const el = document.querySelector("#_auth-dev-root");

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

// we are run throught container
// and we shoiuld export the mount function
export { mount };
