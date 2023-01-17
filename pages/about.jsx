import React from "react";
import Header from "../components/header";
import Ticker from "../components/ticker";
import style from "../styles/About.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

function About() {
  /**
   * Creative Director
set & props styling
wardrobe styling
color consulting
   */
  return (
    <main className={style.container}>
      <Header fontColor="white" links={["home", "work"]} />
      <Ticker text="general qu" backgroundColor="black" />
      <section className={style.flex}>
        <div className={style.imageContainer}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_2.0,q_auto:best,w_650/v1630192741/General%20Qu/about/qu_portrait_qonodt.jpg"
            alt="portrait"
            width={650}
            height={910}
          />
        </div>
        <div className={style.textContainer}>
          <div className={style.textBox}>
            <p>
              contact -{" "}
              <Link passHref href="mailto:hi@generalqu.com">
                <span className={style.mailLink}>hi@generalqu.com</span>
              </Link>
            </p>
            <p>based out of portland, oregon</p>
            <p>pronouns - she/her</p>
          </div>
          <div className={style.textBox}>
            <p>services -</p>
            <p>creative direction</p>
            <p>set and props styling</p>
            <p>wardrobe styling</p>
            <p>color consulting</p>
          </div>
        </div>
      </section>
      <Ticker text="defining aesthetic" backgroundColor="black" />
    </main>
  );
}

export default About;
