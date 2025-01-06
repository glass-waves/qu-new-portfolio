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
      <Header fontColor="white" links={["work", "about"]} />
      <Ticker text=" defining aesthetic" backgroundColor="#000" />

      <section className={style.photoSection7}>
        {/* Tennis*/}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736195006/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/1_mlxz3w.png"
            width={600}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736195007/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/2_tqtycv.png"
            width={600}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>

      <section className={style.photoSection7}>
        {/* Woman in red */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736194998/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/1_fexss6.jpg"
            width={800}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        {/* Tent */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736195000/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/2_ecf3px.jpg"
            width={800}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>

      <section className={style.photoSection7}>
        {/* Lemon */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736194997/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/3_giwlnj.jpg"
            width={650}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        {/* Couch */}
        <div className={style.imageMargin}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1736195002/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/4_u8keu1.jpg"
            width={650}
            height={800}
            alt="sorel_fall"
            style={{ maxHeight: "800px" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>
      {/* Butterflies */}
      <HomeSection8 />
      {/* Flowers */}
      <HomeSection7 />
      {/* Green Lady */}
      <HomeSection9 />
      {/* Nike Fitness */}
      <HomeSection10 />
      {/* Orange Lady */}
      <HomeSection11 />
      {/* Shoes */}
      <HomeSection12 />
      {/* Pink Lady */}
      <HomeSection13 />
      {/* Nike Gradient BG 50/50 */}
      <HomeSection1 />
      {/* Nike Gradient full */}
      <HomeSection2 />
      {/* Gold Teeth */}
      <HomeSection3 />
      {/* Blue Altar */}
      <HomeSection4 />
      {/* Pot */}
      <HomeSection5 />
      {/* Pot - Bust */}
      <HomeSection6 />
      <Ticker text="@GENERAL_QU #GENERALQU" backgroundColor="#000" />
    </main>
  );
}
