import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"; // hook manage me to

export default () => {
  const ref = useRef(null);

  // custom history
  const history = useHistory();
  useEffect(() => {
    const returns = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (currentPathname != nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    if (returns) {
      history.listen(returns?.onParentNavigate);
    }
  }, [history]);

  return <div ref={ref} />;
};
