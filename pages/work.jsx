import React from "react";
import Ticker from "../components/ticker";
import style from "../styles/Work.module.css";
import Link from "next/link";
import Header from "../components/header";

const clients = [
  // Newer Clients - Jan 2025 update
  "waterblossom",
  "quinn",
  "pairofthieves",
  "nicholas",
  "damian lillard x adidas",
  "adidas spring break 24",
  "adidas blog how to style a tennis skirt",
  "complex x settlemiers",
  "sorel spring 24",
  "basement under the ocean",
  "taylor farms",
  // Older Clients
  "fluttering",
  "teva fall 22",
  "sorel szn 22",
  "sorel fall 22",
  "sorel glow pack",
  "sorel spring 22",
  "jordan - zion x naruto",
  "nike sports bra",
  "nike behind the design",
  "nike fall 21 olympics",
  "t magazine",
  "florals",
  "nike beyond labels",
  "new age design",
  "demi",
  "wet dream",
  "stay over",
  "pot plant",
  "barbari",
  "dicks sporting goods",
  "munchies",
];

const Work = () => {
  return (
    <main className={style.main}>
      <Header fontColor="white" links={["home", "about"]} pageTitle="Work" />
      <Ticker text=" work work " />
      <section className={style.clientList}>
        {clients.map((client) => {
          if (client === "wet dream") {
            return (
              <Link
                key="wetdream"
                passHref
                className={style.aWrapper}
                href="/wetdream"
              >
                <h2 className={style.clients}>wet dream</h2>
              </Link>
            );
          } else if (client === "jordan - zion x naruto") {
            return (
              <Link
                key="naruto"
                passHref
                className={style.aWrapper}
                href="/naruto"
              >
                <h2 className={style.clients}>jordan - zion x naruto</h2>
              </Link>
            );
          } else if (client === "taylor farms") {
            return (
              <Link
                key="taylorfarms"
                passHref
                className={style.aWrapper}
                href="/taylorfarms"
              >
                <h2 className={style.clients}>taylor farms</h2>
              </Link>
            );
          } else {
            return (
              <Link
                passHref
                className={style.aWrapper}
                href={`/work/${client.split(" ").join("")}`}
                key={client}
              >
                <h2 className={style.clients}>{client}</h2>
              </Link>
            );
          }
        })}
      </section>
      <Ticker text="general qu 🥴" />
    </main>
  );
};

export default Work;
