import React from "react";
import s from "./heroes.module.css";
import tank from '../../assets/icon/tank.svg'
import fighter from '../../assets/icon/fighter.svg'
import mage from '../../assets/icon/mage.svg'
import assasin from '../../assets/icon/assasin.svg'
import marksman from '../../assets/icon/marksman.svg'
import support from '../../assets/icon/support.svg'
import search from '../../assets/icon/search.svg'

const Heroes = () => {
  return (
    <div className={s.container}>
      <div className={s.heroes}>
        <h3 className={s.hero_text}>ВЫБЕРИТЕ ГЕРОЯ</h3>
        <p className={s.game}>НУ ПЕРСОНАЖИ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
            <li className={s.filter_text}>ФИЛЬТР</li>
            <div className={s.attribute}>
              <li className={s.attribute_text}>АТРИБУТ</li>
              <div className={s.filter_btn}>
                <button className={s.btn}>
                  <img src={tank} alt="tank" className={s.img_btn}/>
                </button>
                <button className={s.btn}>
                  <img src={fighter} alt="fighter" className={s.img_btn}/>
                </button>
                <button className={s.btn}>
                  <img src={mage} alt="mage" className={s.img_btn}/>
                </button>
                <button className={s.btn}>
                  <img src={assasin} alt="assasin" className={s.img_btn}/>
                </button>
                <button className={s.btn}>
                  <img src={marksman} alt="marksman" className={s.img_btn}/>
                </button>
                <button className={s.btn}>
                  <img src={support} alt="support" className={s.img_btn}/>
                </button>
              </div>
            </div>
            <form className={s.search_box}>
            <img src={search} alt="support" className={s.search_icon}/>
            <input
              className={s.search_input}
              type="text"
            />
          </form>
          </div>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
