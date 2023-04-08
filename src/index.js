import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Todo from './components/Todo';
import AuthRoute from './components/AuthRoute'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}/>
      <Route path={"/signup"} element={<SignUp/>}/>
      <Route path={"/signin"} element={<SignIn/>}/>
      <Route exact path='/todo' element={<AuthRoute/>}>
        <Route exact path='/todo' element={<Todo/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
