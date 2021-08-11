import LoginButton from "./LoginButton";
import LogOutButton from "./LogOutButton";
import SignUpButton from "./SignUpButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogOutButton />
  ) : (
    <div>
      <LoginButton /> <SignUpButton />
    </div>
  );
};

export default AuthenticationButton;
