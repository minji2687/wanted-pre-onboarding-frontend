import React from "react";
import Todo from "../components/Todo";
import { Navigate } from "react-router-dom";

const TodoPage = () => {
  const userInfo = localStorage.getItem("access_token");
  if (!userInfo) {
    return <Navigate to="/signin" />;
  }

  return <Todo />;
};

export default TodoPage;
