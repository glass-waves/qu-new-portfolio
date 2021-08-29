import React from "react";
import style from "../../styles/Home.module.css";
import Image from 'next/image'

function HomeSection4() {
  return (
    <section className={style.photoSection4}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,w_625/v1601060036/General%20Qu/new-age/newage1_vpddtx.jpg"
          width={625}
          height={781}
          alt="stay over"
        />
      </div>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,h_781,q_auto/v1601059990/General%20Qu/stay-over/stayOver1_ewdewb.jpg"
          width={781}
          height={781}
          alt="stay over"
        />
      </div>
    </section>
  );
}

export default HomeSection4;
