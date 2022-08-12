import React from "react";
import "./form.css";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return(
      <div className="login"> 
    <div className="login-box">
      <h2>Вход</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password"  name="" required=""/>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Войти
        </a>
        <li>
          <NavLink to="/regist" className="title">Не зарегистрированы?</NavLink>
        </li>
      </form>
    </div>
    </div>
  );
};

export default Auth;
