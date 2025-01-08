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
  "sorel szn 23",
  "teva",
  "blackwater holy light",
  "disney x columbia",
  "sorel varsity 24",
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
        })}
      </section>
      <Ticker text="general qu 🥴" />
    </main>
  );
};

export default Work;
