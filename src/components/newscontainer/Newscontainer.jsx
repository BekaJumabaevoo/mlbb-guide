import React from 'react'
import s from "./newscontainer.module.css"
import img1 from "../../assets/news1.jpg"
import img2 from "../../assets/news2.jpg"
import img3 from "../../assets/news3.jpg"

const Newscontainer = () => {
  return (
    <div className={s.container}>
        <img src={img1} alt="newsimage" className={s.news_block}></img>
        <img src={img2} alt="newsimage" className={s.news_block}></img>
        <img src={img3} alt="newsimage" className={s.news_block}></img>
    </div>
  )
}

export default Newscontainer