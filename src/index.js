import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./page/App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SignUpPage from "./page/SignUpPage";
import SignInPage from "./page/SignInPage";
import TodoPage from "./page/TodoPage";
import AuthRoute from "./components/AuthRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Navigate to="/signup" />} />
      <Route path={"/signup"} element={<SignUpPage />} />
      <Route path={"/signin"} element={<SignInPage />} />
      <Route exact path="/todo" element={<AuthRoute />}>
        <Route exact path="/todo" element={<TodoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
