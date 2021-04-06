import { useEffect, useState } from "react";
//another navigation example
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // this is the next step to navigation (without reloading the page)
    const onLocationChange = () => {
      // this piece of state tracks the value of window.location.pathname
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      // cleaning up function
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
