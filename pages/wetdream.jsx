import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Ticker from "../components/ticker";
import style from "../styles/Client.module.css";
import style2 from "../styles/Wet.module.css";
import Image from "next/legacy/image";

function Wetdream() {
  const [screenRatio, setScreenRatio ] = useState(1);
  const handleWidth = () => setScreenRatio(window.innerWidth / 1000);
  useEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
  }, [])
  return (
    <main className={style.container}>
      <Header fontColor="white" links={["home", "about", "work"]} />
      <Ticker text="wet dream" />
      <p className={style.copy}>
        WET DREAM IS QU’S MUSIC/VISUAL PROJECT WITH DYLAN WHITE AND BENJAMIN
        JOHNSON. MUSIC CAN BE FOUND ON SPOTIFY.
      </p>
      <section className={style.photoContainer}>
        <div className={style2.videoWrapper}>
          <iframe
            width={640 * screenRatio}
            height={360 * screenRatio}
            src="https://www.youtube.com/embed/8KWRkCOSyfU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style2.videoWrapper}>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/336836268?h=ecf932df6f"
            width={640 * screenRatio}
            height={360 * screenRatio}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Wetdream;
