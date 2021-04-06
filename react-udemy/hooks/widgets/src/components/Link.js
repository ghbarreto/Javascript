import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = event => {
    // this adds the functionality to open a new tab holding (command || ctrl + click)
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    // not reloading the page when changing the url
    window.history.pushState({}, "", href);
    // this tells that the url changed, go to route.js and setup a handler there
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
