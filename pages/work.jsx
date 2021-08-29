import React from "react";
import Ticker from "../components/ticker";
import style from "../styles/Work.module.css";
import Link from "next/link";
import Header from "../components/header";
const clients = [
  "nike",
  "new age design",
  "demi",
  "wet dream",
  "stay over",
  "pot plant",
  "aurora elixirs",
  "barbari",
  "chrome",
  "dicks sporting goods",
  "dolphin midwives",
  "forest remedies",
  "gazzy by gazzo",
  "aphex",
  "munchies",
  "olio lab",
];

const Work = () => {
  return (
    <main className={style.main}>
      <Header fontColor="white" links={["home", "about"]} />
      <Ticker text=" work work " />
      <section className={style.clientList}>
        {clients.map((client) => {
          if (client === "wet dream") {
            return (
              <Link href="/wetdream">
                <a className={style.aWrapper}>
                  <h2 className={style.clients}>wet dream</h2>
                </a>
              </Link>
            );
          } else {
            return (
              <Link href={`/work/${client.split(" ").join("")}`} key={client}>
                <a className={style.aWrapper}>
                  <h2 className={style.clients}>{client}</h2>
                </a>
              </Link>
            );
          }
        })}
      </section>
      <Ticker text="general qu 🥴" />
      {/* <Ticker text="🥴 🥴 🥴" /> */}
    </main>
  );
};

export default Work;
