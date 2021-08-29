import React from "react";
import style from "../../styles/Home.module.css";
import Image from 'next/image'

function HomeSection7() {
  return (
    <section className={style.photoSection7}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_750/v1627625079/General%20Qu/dolphin%20midwives/2_qjsq45.jpg"
          width={750}
          height={531}
          alt="dolphin midwives"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_650/v1627625079/General%20Qu/dolphin%20midwives/1_qeniqx.jpg"
          width={650}
          height={650}
          alt="dolphin midwives"
        />
      </div>
    </section>
  );
}

export default HomeSection7;