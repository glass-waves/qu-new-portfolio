import React from "react";
import Header from "../../components/header";
import Ticker from "../../components/ticker";
import style from "../../styles/Wet.module.css";
import Image from 'next/image'

function Wetdream() {
  return (
    <main className={style.container}>
      <Header fontColor="white" links={["home", "about", "work"]} />
      <Ticker text="wet dream" />
      <p className={style.copy}>
        WET DREAM IS QU’S MUSIC/VISUAL PROJECT WITH DYLAN WHITE AND BENJAMIN
        JOHNSON. MUSIC CAN BE FOUND ON SPOTIFY.
      </p>
      <section className={style.photoContainer}>
        {thisClient.photos.map((photo) => (
          <div
            className={style.imageWrapper}
            key={photo.src}
            style={{ maxWidth: photo.width }}
          >
            <Image alt={photo.src} src={photo.src} width={photo.width} height={photo.height} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Wetdream;
