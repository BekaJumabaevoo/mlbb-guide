import React from 'react'
import Newscontainer from '../../components/newscontainer/Newscontainer'
import s from "./news.module.css"
import news1 from "../../assets/news4.jpg"
import news2 from "../../assets/news5.jpg"
import news3 from "../../assets/news6.jpg"
import news4 from "../../assets/news7.jpg"
import news5 from "../../assets/news8.jpg"
import news6 from "../../assets/news9.jpg"

const News = () => {
  return (
    <div className={s.container}>
    <div className={s.news}>
      <h1>Актуальные Новости</h1>
      <Newscontainer />
      <div className={s.block}>

      <img src={news1} alt="" className={s.news_block}/>
      <img src={news2} alt="" className={s.news_block}/>
      <img src={news3} alt="" className={s.news_block}/>
      <img src={news4} alt="" className={s.news_block}/>
      <img src={news5} alt="" className={s.news_block}/>
      <img src={news6} alt="" className={s.news_block}/>
      </div>
    </div>
    </div>
  )
}

export default News