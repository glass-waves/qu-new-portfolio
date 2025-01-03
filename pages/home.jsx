// import Head from "next/head";
import Image from "next/image";
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

      {/* Tennis*/}
      <section className={style.photoSection7}>
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1735874924/General%20Qu/home/1_cyasks.png"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1735874929/General%20Qu/home/2_i0orjn.png"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
      </section>


      <section className={style.photoSection2}>

      </section>


      <section className={style.photoSection7}>
        {/* Woman in red */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/dpr_2.0,f_auto/v1735874921/General%20Qu/home/1_aug7ck.jpg"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
        {/* Tent */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/dpr_2.0/v1735874921/General%20Qu/home/2_acbywf.jpg"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
        {/* Lemon */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1735874920/General%20Qu/home/3_b0tps3.jpg"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
        {/* Couch */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1735874921/General%20Qu/home/4_hs11cd.jpg"
            width={1200}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: '800px' }}
          />
        </div>
      </section>
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
