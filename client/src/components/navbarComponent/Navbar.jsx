import React from "react";

import MainNav from "./MainNav";
import AuthenticationNav from "./AuthenticationNav";

const Navbar = () => {
  return (
    <div>
      <MainNav />
      <AuthenticationNav />
    </div>
  );
};

export default Navbar;
