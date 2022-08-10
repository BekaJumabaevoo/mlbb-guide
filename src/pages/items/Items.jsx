import React from 'react'
import s from "./items.module.css"

const Items = () => {
  return (
    <div className={s.container}>
          <div className={s.items}>
        <h3 className={s.items_text}>ВЫБЕРИТЕ ПРЕДМЕТ</h3>
        <p className={s.game}>НУ ПРЕДМЕТЫ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
          <h4 className={s.filter_text}>ФИЛЬТР</h4>
          <div className='filter_btn'>
            <button><img src="" alt="" /></button>
            <button><img src="" alt="" /></button>
            <button><img src="" alt="" /></button>
            <button><img src="" alt="" /></button>
            <button><img src="" alt="" /></button>
          </div>
      <input type="text" />
          </div>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
          <div className={s.box}></div>
        </div>
      </div>
    </div>
  )
}

export default Items