import { span } from "prelude-ls";
import React from "react";
import style from "../styles/Header.module.css";
import Link from 'next/link';

function Header({ fontColor, links }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo} style={{ color: fontColor }}>
        general qu
      </h1>
      <nav className={style.nav} style={{ color: fontColor}}>
        {links.map(link => <Link href={`/${link}`}><span className={style.link}>{link}</span></Link>)}
      </nav>
    </header>
  );
}

export default Header;
