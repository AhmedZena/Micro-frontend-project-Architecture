import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"; // hook manage me to

export default () => {
  const ref = useRef(null);

  // custom history
  const history = useHistory();

  useEffect(() => {
   const { onParentNavigate }=   mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const {pathname:currentPathname} = history.location
        if (currentPathname!= nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
