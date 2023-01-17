import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection10() {
  return (
    <section className={style.photoSection10}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665355962/General%20Qu/2022_revamp/nike_sports_bra/04_v60ajv.jpg"
          width={600}
          height={900}
          alt="sports bra 1"
        />
      </div>
      <div className={style.imageMargin}>
      <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665355961/General%20Qu/2022_revamp/nike_sports_bra/01_mnmokt.jpg"
          width={600}
          height={900}
          alt="sports bra 2"
        />
      </div>
    </section>
  );
}

export default HomeSection10;