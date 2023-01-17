import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection12() {
  return (
    <section className={style.photoSection10}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665355909/General%20Qu/2022_revamp/sorel_spring_22/01_ewdsvn.jpg"
          width={700}
          height={466}
          alt="sorel fall 1"
        />
      </div>
      <div className={style.imageMargin}>
      <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665355910/General%20Qu/2022_revamp/sorel_spring_22/02_zgcyur.jpg"
          width={700}
          height={466}
          alt="sorel fall 2"
        />
      </div>
    </section>
  );
}

export default HomeSection12;