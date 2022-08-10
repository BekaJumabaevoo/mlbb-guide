import React from "react";
import s from "./champ.module.css";
import video from "../../assets/champ.mp4";

const champ = () => {
  return (
    <div className={s.champ}>
      <video autoPlay loop muted className={s.back_video}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default champ;
