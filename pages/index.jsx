import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Enter.module.css";
import Link from "next/link";
import Image from "next/image";

function Enter(props) {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            alt="left enter image"
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto:best,w_500/v1627590500/General%20Qu/enter/ENTERpage1_1_urjjl8.png"
            width={500}
            height={501}
          />
        </div>
        <div className={styles.image}>
          <Link href="/home">
            <Image
              className={styles.hover}
              alt="left enter image"
              src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto,w_500/v1630272385/General%20Qu/enter/centerenterr.png"
              width={594}
              height={595}
            />
          </Link>
        </div>

        <div className={styles.image}>
          <Image
            alt="right enter image"
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,q_auto:best,w_500/v1627590500/General%20Qu/enter/ENTERpage1_3_wykn8x.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

Enter.propTypes = {};

export default Enter;
