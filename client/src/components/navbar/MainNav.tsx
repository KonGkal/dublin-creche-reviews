import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="button-container">
      <ul className="container nav-bar">
        <li className="main-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav-item">
          {isAuthenticated ? <Link to="/review">Review</Link> : null}
        </li>
        <li className="main-nav-item">
          {isAuthenticated ? <Link to="/myReviews">My Reviews</Link> : null}
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
