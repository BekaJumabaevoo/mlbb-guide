import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

const Header = () => {
  return (
    <div className={s.header}>
      <nav className={s.nav}>
        <div className={s.nav_content}>
          <NavLink to="/" className={s.logo}>
            <img src={logo1} alt="" className={s.logo_img} />
            <img src={logo2} alt="" className={s.logo_text} />
          </NavLink>
          <ul className={s.nav_link}>
          <li className={s.li_link}>
            <NavLink to="/heroes" className={s.link}>
              Герои
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" className={s.link}>
              Предметы
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={s.link}>
              Новости
            </NavLink>
          </li>
          </ul>
        </div>


          <li>
            <NavLink to="/signin" className={s.auth}>
              Войти
            </NavLink>
          </li>
      </nav>
      
    </div>
  );
};

export default Header;
