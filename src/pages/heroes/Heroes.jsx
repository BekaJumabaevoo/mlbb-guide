import React, { useState, useEffect } from "react";
import s from "./heroes.module.css";
import search from "../../assets/icon/search.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://mlbb-verkg.herokuapp.com/%2Fapi/v1/hero/heroes-list/")
      .then((res) => {
        setHeroes(res.data);
      });
  }, []);

  console.log(heroes);
  const [value, setValue] = useState('')
  const fliterHero = heroes.filter(game => {
      return game.name.toLowerCase().includes(value.toLocaleLowerCase())
  })


  return (
    <div className={s.container}>
      <div className={s.heroes}>
        <h3 className={s.hero_text}>ВЫБЕРИТЕ ГЕРОЯ</h3>
        <p className={s.game}>НУ ПЕРСОНАЖИ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
            <li className={s.filter_text}>ФИЛЬТР</li>
            <div className={s.attribute}>
                <NavLink className={s.btn}>
                  Танки
                </NavLink>
                <NavLink className={s.btn}>
                  Бойцы
                </NavLink>
                <NavLink className={s.btn}>
                  Маги
                </NavLink>
                <NavLink className={s.btn}>
                  Убийцы
                </NavLink>
                <NavLink className={s.btn}>
                  Стрелки
                </NavLink>
                <NavLink className={s.btn}>
                  Поддержки
                </NavLink>
            </div>
            <div className={s.search_box}>
              <img  src={search} alt="support" className={s.search_icon} />
              <input className={s.search_input} type="text" onChange={(event) => setValue(event.target.value)}/>
            </div>
          </div>
        </div>
          <div className={s.block}>
            {fliterHero.map((hero) => {
              console.log(hero)
              return (
                <div className={s.box} key={heroes.id}>
                  <img src={hero.images} alt="hero" className={s.hero_img}/>
                  <li className={s.hero_title}>{hero.name}</li>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Heroes;
