import Image from "next/legacy/image";
import Header from "../components/header";
import Ticker from "../components/ticker";
import { clients } from "../public/clients";
import style2 from "../styles/Wet.module.css";
import style from "../styles/Client.module.css";
import { useEffect, useState } from "react";

const Naruto = (props) => {
  const thisClient = clients["jordan-zionxnaruto"];
  const [screenRatio, setScreenRatio] = useState(1);
  const handleWidth = () => setScreenRatio(window.innerWidth / 1000);
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <main className={style.container}>
      <Header fontColor="white" links={["home", "about", "work"]} />
      <Ticker text={thisClient.header} />
      <section className={style.photoContainer}>
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
            />
          </div>
        ))}
        <div className={style2.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RXeJ9kUmVTM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <p className={style.copy}>{thisClient.copy}</p>
    </main>
  );
};

export default Naruto;
