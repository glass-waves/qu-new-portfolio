import Head from "next/head";
import Header from "../components/header";
import style from "../styles/Home.module.css";
import Ticker from "../components/ticker.jsx";
import HomeSection1 from "../components/homeSections/homeSection1";
import HomeSection2 from "../components/homeSections/homeSection2";
import HomeSection3 from "../components/homeSections/homeSection3";
import HomeSection4 from "../components/homeSections/homeSection4";
import HomeSection5 from "../components/homeSections/homeSection5";
import HomeSection6 from "../components/homeSections/homeSection6";
import HomeSection7 from "../components/homeSections/homeSections7";

export default function Home() {
  return (
    <main className={style.container}>
      {/* <h1 className={style.logo}>general qu</h1> */}
      <Header fontColor="white" links={[ "work", "about"]}/>
      <Ticker text=" defining aesthetic" backgroundColor="#000"/>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      {/* <HomeSection7 /> dolphin midwives*/}
      <Ticker text="@GENERAL_QU #GENERALQU" backgroundColor="#000"/>
    </main>
  );
}
