import React from "react";
import video from "../../assets/video.mp4";
import s from "./homepage.module.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className={s.home}>
      <video autoPlay loop muted className={s.back_video}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={s.content}>
        <h3 className={s.text}>
          «Гайды на современную многопользовательскую игру»
        </h3>
        <div className={s.line}></div>
        <li>
          <NavLink to="/signup" className={s.regist}>
            Регистрация 
          </NavLink>
        </li>
        <div className={s.news}>
          <h4 className={s.all_news}>ПОСЛЕДНИЕ НОВОСТИ</h4>
          <li>
            <NavLink to="/news" className={s.all_show}>
              ПОКАЗАТЬ ВСЕ &#10144;
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
