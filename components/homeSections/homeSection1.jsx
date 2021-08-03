import React from "react";
import style from "../../styles/Home.module.css";
import Image from 'next/image'

function HomeSection1() {
  return (
    <section className={style.photoSection1}>
            <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto,w_700/v1627616769/General%20Qu/nike%20x%20beyond%20labels/1_dlofr0.jpg"
          width={700}
          height={467}
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto,w_700/v1627616769/General%20Qu/nike%20x%20beyond%20labels/7_a8n2bs.jpg"
          width={700}
          height={467}
        />
      </div>
    </section>
  );
}

export default HomeSection1;
