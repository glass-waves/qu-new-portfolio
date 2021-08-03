import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/image";

function HomeSection2() {
  return (
    <section className={style.photoSection2}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto,w_1600/v1627616771/General%20Qu/nike%20x%20beyond%20labels/8_h0iw7i.jpg"
          width={1600}
          height={800}
        />
      </div>
    </section>
  );
}

export default HomeSection2;
