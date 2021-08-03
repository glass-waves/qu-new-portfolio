import React from "react";
import style from "../styles/Ticker.module.css";
import Marquee from "react-marquee-slider";

function Ticker({text, backgroundColor}) {
  

  return (
<div className={style.title} 
  style={{
    backgroundColor: backgroundColor
  }}
>
  <Marquee velocity={20} minScale={0.7} resetAfterTries={200}  className={style.marquee}>
    <h3 className={style.text}> {text} </h3> 
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
    <h3 className={style.text}> {text} </h3>
  </Marquee>
</div>
  )
}

export default Ticker;
