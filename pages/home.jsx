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
import HomeSection7 from "../components/homeSections/homeSection7";
import HomeSection8 from "../components/homeSections/homeSection8";
import HomeSection9 from "../components/homeSections/homeSection9";
import HomeSection10 from "../components/homeSections/homeSection10";
import HomeSection11 from "../components/homeSections/homeSection11";
import HomeSection12 from "../components/homeSections/homeSection12";
import HomeSection13 from "../components/homeSections/homeSection13";

export default function Home() {
  return (
    <main className={style.container}>
      {/* <h1 className={style.logo}>general qu</h1> */}
      <Header fontColor="white" links={["work", "about"]} />
      <Ticker text=" defining aesthetic" backgroundColor="#000" />
      <HomeSection8 />
      <HomeSection7 />
      <HomeSection9 />
      <HomeSection10 />
      <HomeSection11 />
      <HomeSection12 />
      <HomeSection13 />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <Ticker text="@GENERAL_QU #GENERALQU" backgroundColor="#000" />
    </main>
  );
}
