import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/image";

function HomeSection3() {
  return (
    <section className={style.photoSection3}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_500/v1627619412/General%20Qu/demi/2_lklxst.jpg"
          width={500}
          height={750}
          alt="demi"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,h_750,q_auto/v1627619412/General%20Qu/demi/1_kriclc.jpg"
          width={1125}
          height={750}
          alt="demi"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_500/v1627619412/General%20Qu/demi/3_t42afa.jpg"
          width={500}
          height={750}
          alt="demi"
        />
      </div>
    </section>
  );
}

export default HomeSection3;
