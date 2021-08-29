import React from "react";
import style from "../../styles/Home.module.css";
import Image from 'next/image'

function HomeSection6() {
  return (
    <section className={style.photoSection5}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_950/v1601060033/General%20Qu/pot-plant/potPlant5_qm2u5a.jpg"
          width={950}
          height={713}
          alt="pot plant"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_450/v1627624596/General%20Qu/olio%20lab/2_om0vxs.jpg"
          width={450}
          height={600}
          alt="pot plant"
        />
      </div>
    </section>
  );
}

export default HomeSection6;