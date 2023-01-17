import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection13() {
  return (
    <section className={style.photoSection2}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1673911358/General%20Qu/2022_revamp/sorel_fall22/3__qfuvir.jpg"
          width={1200}
          height={800}
          alt="sorel_fall"
        />
      </div>
    </section>
  );
}

export default HomeSection13;