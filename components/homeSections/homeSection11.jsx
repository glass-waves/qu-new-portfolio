import React from "react";
import style from "../../styles/Home.module.css";
import Image from "next/legacy/image";

function HomeSection11() {
  return (
    <section className={style.photoSection2}>
      <div className={style.imageMargin}>
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/v1665356851/General%20Qu/2022_revamp/sorel_fall22/SOREL_FA22_KINETIC_IMPACT_LACE_1986491125_ORANGE_ONBODY_2581_a57fbe.jpg"
          width={1200}
          height={800}
          alt="sorel"
        />
      </div>
    </section>
  );
}

export default HomeSection11;