import React from "react";
import Image from "next/image";
import Header from "../../components/header.jsx";
import Ticker from "../../components/ticker.jsx";
import { clients } from "../../public/clients.js";
import style from "../../styles/Client.module.css";
import style2 from "../../styles/Wet.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const getStaticProps = async (context) => {
  return {
    props: {
      client: clients[context.params.client],
      currentUrl: "/work/" + context.params.client,
    },
  };
};

const clientKeys = Object.keys(clients);

const paths = clientKeys.map((clientKey) => {
  return { params: { client: clientKey } };
});

export async function getStaticPaths() {
  return {
    paths: paths,
    fallback: false, // See the "fallback" section below
  };
}

const Client = (props) => {
  const thisClient = props.client;
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
        pageTitle={thisClient.header}
        currentPage={props.currentUrl}
      />
      <Ticker text={thisClient.header} />
      <section className={style.photoContainer}>
        {thisClient.videos.map((video) => (
          <div className={style2.videoWrapper} key={video.src}>
            <iframe
              width={640 * screenRatio}
              height={360 * screenRatio}
              src={video.src}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        ))}
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

      {thisClient.copy && <p className={style.copy}>{thisClient.copy}</p>}
    </main>
  );
};

Client.propTypes = {
  client: PropTypes.shape({
    header: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      })
    ).isRequired,
    copy: PropTypes.string.isRequired,
  }).isRequired,
  currentUrl: PropTypes.string.isRequired,
};

export default Client;
