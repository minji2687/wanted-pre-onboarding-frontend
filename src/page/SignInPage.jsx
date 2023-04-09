import React from "react";
import SignIn from "../components/SignIn";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  const userInfo = localStorage.getItem("access_token");
  if (userInfo) {
    return <Navigate to="/todo" />;
  }

  return <SignIn />;
};

export default SignInPage;
