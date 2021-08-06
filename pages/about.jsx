import React from "react";
import Header from "../components/header";
import Ticker from "../components/ticker";
import style from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <main className={style.container}>
      <Header fontColor="white" links={["home", "work"]} />
      <Ticker text="general qu" backgroundColor="black" />
      <section className={style.flex}>
        <div className={style.imageContainer}>
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/v1628108634/General%20Qu/about/quPortrait_edep7e.jpg"
            alt="portrait"
            width={663}
            height={886}
          />
        </div>
        <div className={style.textContainer}>
          <div className={style.textBox}>
            <p>
              contact -{" "}
              <Link href="mailto:hi@generalqu.com">
                <span className={style.mailLink}>hi@generalqu.com</span>
              </Link>
            </p>
            <p>based out of portland, oregon</p>
            <p>pronouns - she/her</p>
          </div>
          <div className={style.textBox}>
            <p>services -</p>
            <p>interior, set and prop styling/design</p>
            <p>photography</p>
            <p>aesthetic development</p>
            <p>interior design consultation</p>
          </div>
        </div>
      </section>
      <Ticker text="defining aesthetic" backgroundColor="black" />
    </main>
  );
}

export default About;
