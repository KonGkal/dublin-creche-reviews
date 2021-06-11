import React from "react";

import LoginButton from "../loginButtonComponent/LoginButton";
import LogOutButton from "../logOutButtonComponent/LogOutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogOutButton /> : <LoginButton />;
};

export default AuthenticationButton;
