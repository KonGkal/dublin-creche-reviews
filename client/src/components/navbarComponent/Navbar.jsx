import React from "react";
import MainNav from "./MainNav";
import AuthenticationNav from "./AuthenticationNav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar-routes">
      <MainNav />
      <AuthenticationNav />
    </div>
  );
};

export default Navbar;
