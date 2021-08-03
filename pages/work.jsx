import React from "react";
import Ticker from "../components/ticker";
import style from "../styles/Work.module.css";
import Link from "next/link";
const clients = [
  "aurora elixirs",
  "barbari",
  "chrome",
  "demi",
  "dicks sporting goods",
  "dolphin midwives",
  "forest remedies",
  "gazzy by gazzo",
  "aphex",
  "munchies",
  "new age design",
  "nike",
  "olio lab",
  "pot plant",
  "stay over",
  "wet dream",
];

const Work = () => {
  return (
    <main className={style.main}>
      <Ticker text=" work  work  " />
      <section className={style.clientList}>
        {clients.map((client) => (
          <Link href={`/work/${client.split(' ').join('')}`}>
            <h2 className={style.clients} key={client}>
              {client}
            </h2>
          </Link>
        ))}
      </section>
      <Ticker text="general qu " />
    </main>
  );
};

export default Work;
