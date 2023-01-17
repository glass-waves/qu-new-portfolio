import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection7() {
  return (
    <section className={style.photoSection7}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665356215/General%20Qu/2022_revamp/florals/floral2_v95xec.jpg"
          width={750}
          height={750}
          alt="floral 1"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665356230/General%20Qu/2022_revamp/florals/floral1_afqucq.jpg"
          width={750}
          height={750}
          alt="floral 2"
        />
      </div>
    </section>
  );
}

export default HomeSection7;