import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <ul className="container">
        <li style={{ marginRight: "1em" }}>
          <Link to="/">Home</Link>
        </li>
        <li>{isAuthenticated ? <Link to="/review">Review</Link> : null}</li>
      </ul>
    </div>
  );
};

export default MainNav;
