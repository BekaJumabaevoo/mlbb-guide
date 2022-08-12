import React from "react";
import "./form.css";
import { NavLink } from "react-router-dom";

const Regist = () => {
  return (
    <div className="login">
    <div className="login-box">
      <h2>Регистрация</h2>
      <form>
        <div className="user-box">
          <input type="text"  name="" required=""/>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="text"  name="" required=""/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" />
          <label>Password</label>
        </div>
            <NavLink to="/auth">
          Зарегистрироваться
            </NavLink>
            <li>
            <NavLink className="title" to="/auth">Есть аккаунт?</NavLink>
            </li>
      </form>
    </div>
    </div>
  );
};

export default Regist;
