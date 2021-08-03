import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Enter.module.css";
import Link from "next/link";

function Enter(props) {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://res.cloudinary.com/glasswavs/image/upload/v1627590500/General%20Qu/enter/ENTERpage1_1_urjjl8.png"
        />
        <Link href="/home">
            <img
              className={styles.imageLink}
              src="https://res.cloudinary.com/glasswavs/image/upload/v1627590500/General%20Qu/enter/ENTERpage1_2enter_x5tjbb.png"
            />
        </Link>
        <img
          className={styles.image}
          src="https://res.cloudinary.com/glasswavs/image/upload/v1627590500/General%20Qu/enter/ENTERpage1_3_wykn8x.png"
        />
      </div>
    </section>
  );
}

Enter.propTypes = {};

export default Enter;
