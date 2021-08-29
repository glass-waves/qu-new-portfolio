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
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto:best,w_500/v1627590500/General%20Qu/enter/ENTERpage1_1_urjjl8.png"
            width={500}
            height={501}
          />
        </div>
        <div className={styles.imageLink}>
          <Link href="/home" passHref>
            <a className={styles.hover}>
              <Image
                alt="center enter image"
                src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto,w_500/v1630270192/General%20Qu/enter/ENTERpage1_2enter_ofvpcb.png"
                width={500}
                height={501}
              />
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            alt="right enter image"
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto:best,w_500/v1627590500/General%20Qu/enter/ENTERpage1_3_wykn8x.png"
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
