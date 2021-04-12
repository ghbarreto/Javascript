import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fluid three item menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/character/search" className="item">
        Character Search
      </Link>
      <Link to="/marketboard" className="item">
        Market Board
      </Link>
    </div>
  );
};

export default Header;
