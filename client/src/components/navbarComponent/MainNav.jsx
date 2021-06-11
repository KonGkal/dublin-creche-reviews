import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
