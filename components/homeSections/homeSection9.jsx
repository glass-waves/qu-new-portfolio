import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection9() {
  return (
    <section className={style.photoSection2}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665356849/General%20Qu/2022_revamp/sorel_fall22/SOREL_FA22_KINETIC_BREAKTHRU_DAY_LACE_1986301125_GREEN_ONBODY_1610_l8axmz.jpg"
          width={1200}
          height={800}
          alt="sorel"
        />
      </div>
    </section>
  );
}

export default HomeSection9;