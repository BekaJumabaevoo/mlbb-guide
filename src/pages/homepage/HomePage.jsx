import React from "react";
import video from "../../assets/video.mp4";
import s from "./homepage.module.css";
import { NavLink } from "react-router-dom";
import Newscontainer from "../../components/newscontainer/Newscontainer";

function HomePage() {
  return (
    <div className={s.home}>
      <video autoPlay loop muted className={s.back_video}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={s.content}>
        <h5 className={s.text}>
          «Гайды на современную многопользовательскую игру»
        </h5>
        <div className={s.line}></div>
        <li>
          <NavLink to="/regist" className={s.regist}>
            Регистрация
          </NavLink>
        </li>
        <div className={s.news}>
          <div className={s.news_text}>
            <h4 className={s.all_news}>ПОСЛЕДНИЕ НОВОСТИ</h4>
            <li>
              <NavLink to="/news" className={s.all_show}>
                ПОКАЗАТЬ ВСЕ &#10144;
              </NavLink>
            </li>
          </div>
          <div className={s.news_content}>
              <Newscontainer />
          </div>
        </div>
      </div>
      <div className={s.hero}>
        <div className={s.hero_content}>
          <h4 className={s.hero_title}>КОГО ВЫ</h4>
          <h3 className={s.hero_subtitle}>ВЫБЕРЕТЕ?</h3>
          <div className={s.line}></div>
          <li className={s.hero_text}>
            Список героев в ML: BB огромен и безгранично разнообразен: здесь вы
            встретите и магов-тактиков, и свирепых громил, и хитроумных
            негодяев. Их невероятные способности и сокрушительные ульты
            непременно приведут вас к победе.
          </li>
          <li>
            <NavLink to="/heroes" className={s.hero_show}>
              ВСЕ ГЕРОИ
            </NavLink>
          </li>
        </div>
      </div>
      <div className={s.champ}>
        <div className={s.champ_content}>
          <h4 className={s.champ_title}>ПРОФЕССИОНАЛЬНЫЙ</h4>
          <h3 className={s.champ_subtitle}>ТУРНИРНЫЙ СЕЗОН</h3>
          <div className={s.line}></div>
          <li className={s.champ_text}>
            Отдыхая от продвижения по системе рейтинга, вы можете учиться у
            лучших. В профессиональном сезоне вы увидите высочайший уровень
            соревновательной Моблы, и следить за ним можно в клиенте игры, на
            Twitch и на YouTube. Не пропускайте ни одной трансляции, ведь с
            каждым матчем приближается самый большой киберспортивный турнир в
            мире — M1.
          </li>
        </div>
      </div>
 
    </div>
  );
}

export default HomePage;
