
import s from "./items.module.css";
import search from "../../assets/icon/search.svg";
import items from "../../assets/items.json";
import { useState } from "react";




const Items = () => {
  const [value, setValue] = useState('')
  const fliterItem = items.filter(item => {
   
    return item.name.toLowerCase().includes(value.toLocaleLowerCase())
  })
  
  return (
    <div className={s.container}>
      <div className={s.items}>
        <h3 className={s.items_text}>ВЫБЕРИТЕ ПРЕДМЕТ</h3>
        <p className={s.game}>НУ ПРЕДМЕТЫ ХЕРНЯ, БАЛАНС ТОЖЕ</p>
        <div className={s.content}>
          <div className={s.filter}>
            <li className={s.filter_text}>ФИЛЬТР</li>
            <div className={s.attribute}>
              <button className={s.btn}>Атака</button>
              <button className={s.btn}>Магия</button>
              <button className={s.btn}>Защита</button>
              <button className={s.btn}>Передвижение</button>
            </div>
            <div className={s.search_box}>
              <img  src={search} alt="support" className={s.search_icon} />
              <input className={s.search_input} type="text" onChange={(event) => setValue(event.target.value)}/>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr  className={s.thead}>
              <th>Тип</th>
              <th>Предмет</th>
              <th>Название</th>
              <th>Характеристики</th>
              <th>Эффект</th>
            </tr>
          </thead>

          <tbody >
            {fliterItem.map((item) => (
              <tr key={item.id}>
                <td className={s.role}>{item.role}</td>
                <td><img className={s.img} src={item.img} alt="" /></td>
                <td>{item.name}</td>
                <td className={s.characteristic}>{item.characteristic}</td>
                <td>{item.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
