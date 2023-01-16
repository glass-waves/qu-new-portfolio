import React from "react";
// import PropTypes from "prop-types";
import styles from "../styles/Enter.module.css";
import Link from "next/link";
import Image from "next/image";

function Enter(props) {
  return (
    <section className={styles.container}>
      <div className={styles.imageAndText}>
        <Link href="/home" passHref>
          <Image
            alt="enter image"
            quality={100}
            priority
            src="https://res.cloudinary.com/glasswavs/image/upload/v1665356847/General%20Qu/2022_revamp/sorel_fall22/SOREL_FA22_KINETIC_IMPACT_STRAP_1999491125_PINK_ONBODY_5647_ocvk9y.jpg"
            width={1200}
            height={800}
          />
          <h1 className={styles.text}>ENTER</h1>
        </Link>
      </div>
    </section>
  );
}

Enter.propTypes = {};

export default Enter;
