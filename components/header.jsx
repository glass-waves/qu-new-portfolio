import { span } from "prelude-ls";
import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";
import { icons } from "../public/icons.js";
import Image from "next/image";

function Header({ fontColor, links }) {
  return (
    <header className={style.header}>
      <div></div>
      {/* <h1 className={style.logo} style={{ color: fontColor }}>
        general qu
      </h1> */}
      <div className={style.logoContainer}>
      <Image
        src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_auto,w_1000/v1630192952/General%20Qu/logo/General_Qu_white_vywhbg.png"
        // src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_auto,w_1000/v1630192960/General%20Qu/logo/General_Qu_green_eddo9f.png"
        width={1000}
        height={196}
        alt="logo"
      />
      </div>
      <div></div>
      <nav className={style.nav} style={{ color: fontColor }}>
        {links.map((link) => (
          <Link key={link} href={`/${link}`}>
            <a className={style.link}>{link}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
