import React, { useState, useEffect } from "react";
import s from "./heroes.module.css";
import search from "../../assets/icon/search.svg";
import axios from "axios";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [value, setValue] = useState('')
  
  useEffect(() => {
    axios
      .get("https://mlbb-verkg.herokuapp.com/api/v1/hero/heroes-list/")
      .then((res) => {
        setHeroes(res.data);
      });
  }, []);

  console.log(heroes);
  const fliterHero = heroes.filter(game => {
      return game.name.toLowerCase().includes(value.toLocaleLowerCase())
  })
  const roles = [
    {
      role: "Танки",
      id: 7
    },
    {
      role: "Бойцы",
      id: 2
    },
    {
      role: "Маги",
      id: 4
    },
    {
      role: "Убийцы",
      id: 3 
    },
    {
      role: "Стрелки"
    },
    {
      role: "Поддержки"
    }
  ]


  return (
    <div className={s.container}>
      <div className={s.heroes}>
        <h3 className={s.hero_text}>ВЫБЕРИТЕ ГЕРОЯ</h3>
        <p className={s.game}>НУ ПЕРСОНАЖИ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
            <li className={s.filter_text}>ФИЛЬТР</li>
            <ul className={s.attribute}>
          {roles.map((role, i)=>{
            return(
              <li className={s.btn} key={i}> 
                 {role.role}
                </li>
                )
})}
            </ul>
            <div className={s.search_box}>
              <img  src={search} alt="support" className={s.search_icon} />
              <input className={s.search_input} type="text" onChange={(event) => setValue(event.target.value)}/>
            </div>
          </div>
        </div>
          <div className={s.block} >
            {fliterHero.map((hero) => {
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
