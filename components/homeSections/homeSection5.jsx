import React from "react";
import style from "../../styles/Home.module.css";
import Image from 'next/image'

function HomeSection5() {
  return (
    <section className={style.photoSection5}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_950/v1601059997/General%20Qu/pot-plant/potPlant1_r8verk.jpg"
          width={950}
          height={713}
          alt="pot Plant"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_450/v1627624597/General%20Qu/olio%20lab/1_ifdmj9.jpg"
          width={450}
          height={600}
          alt="pot Plant"
        />
      </div>
    </section>
  );
}

export default HomeSection5;
