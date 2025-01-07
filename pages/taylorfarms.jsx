import Image from "next/image";
import Header from "../components/header";
import Ticker from "../components/ticker";
import { clients } from "../public/clients";
import style2 from "../styles/Wet.module.css";
import style from "../styles/Client.module.css";
import { useEffect, useState } from "react";

const TaylorFarms = (props) => {
  const thisClient = clients["taylorfarms"];
  const [screenRatio, setScreenRatio] = useState(1);
  const handleWidth = () => setScreenRatio(window.innerWidth / 1000);
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <main className={style.container}>
      <Header
        fontColor="white"
        links={["home", "about", "work"]}
        pageTitle="TAYLOR FARMS"
      />
      <Ticker text={thisClient.header} />
      <section className={style.photoContainer}>
        <div className={style2.videoWrapper}>
          <iframe
            width={640 * screenRatio}
            height={360 * screenRatio}
            src="https://www.youtube.com/embed/ip8ynDPYAP8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {thisClient.photos.map((photo) => (
          <div
            className={style.imageWrapper}
            key={photo.src}
            style={{ maxWidth: photo.width }}
          >
            <Image
              alt="photo"
              src={photo.src}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 750px) 100vw, 1200px"
              priority
            />
          </div>
        ))}
      </section>
      <p className={style.copy}>{thisClient.copy}</p>
    </main>
  );
};

export default TaylorFarms;
