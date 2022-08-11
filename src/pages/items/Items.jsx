import React from 'react'
import s from "./items.module.css"
import search from '../../assets/icon/search.svg'

const Items = () => {
  return (
    <div className={s.container}>
          <div className={s.items}>
        <h3 className={s.items_text}>ВЫБЕРИТЕ ПРЕДМЕТ</h3>
        <p className={s.game}>НУ ПРЕДМЕТЫ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
            <li className={s.filter_text}>ФИЛЬТР</li>
            <div className={s.attribute}>

                <button className={s.btn}>
                 Атака
                </button>
                <button className={s.btn}>
                  Магия
                </button>
                <button className={s.btn}>
                  Защита
                </button>
                <button className={s.btn}>
                Передвижение
                </button>

            </div>
            <div className={s.search_box}>
            <img src={search} alt="support" className={s.search_icon}/>
            <input
              className={s.search_input}
              type="text"
            />
          </div>
          </div>
          <div className={s.box} >
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Items