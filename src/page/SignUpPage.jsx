import React from "react";
import SignUp from "../components/SignUp";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
  const userInfo = localStorage.getItem("access_token");
  if (userInfo) {
    return <Navigate to="/todo" />;
  }

  return <SignUp />;
};

export default SignUpPage;
