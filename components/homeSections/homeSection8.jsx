import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection8() {
  return (
    <section className={style.photoSection2}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1673909319/General%20Qu/2022_revamp/a_fluttering/1_xoudsg.jpg"
          width={1200}
          height={800}
          alt="fluttering"
        />
      </div>
    </section>
  );
}

export default HomeSection8;