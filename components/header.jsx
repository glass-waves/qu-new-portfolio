import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import PropTypes from "prop-types";

function Header({ fontColor, links, pageTitle }) {
  return (
    <>
      <Head>
        <title>{`${pageTitle.toUpperCase()} | General Qu`}</title>
      </Head>
      <header className={style.header}>
        <div></div>

        <Link
          className={style.logoContainer}
          href="/home/"
          aria-label="General Qu Home"
        >
          <Image
            src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_auto,w_1000/v1630192952/General%20Qu/logo/General_Qu_white_vywhbg.png"
            width={613}
            height={120}
            alt="logo"
          />
        </Link>

        <div></div>

        <nav className={style.nav} style={{ color: fontColor }}>
          {links.map((link) => (
            <Link key={link} className={style.link} href={`/${link}/`}>
              {link}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
Header.propTypes = {
  fontColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  pageTitle: PropTypes.string.isRequired,
};

// export default Header;
export default Header;
