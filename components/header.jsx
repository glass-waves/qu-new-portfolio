import style from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header({ fontColor, links }) {
  return (
    <header className={style.header}>
      <div></div>
      {/* <h1 className={style.logo} style={{ color: fontColor }}>
        general qu
      </h1> */}
      <Link
        className={style.logoContainer}
        href="/home"
        aria-label="General Qu Home"
      >
        <Image
          src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_auto,w_1000/v1630192952/General%20Qu/logo/General_Qu_white_vywhbg.png"
          // src="https://res.cloudinary.com/glasswavs/image/upload/c_scale,dpr_auto,w_1000/v1630192960/General%20Qu/logo/General_Qu_green_eddo9f.png"
          width={613}
          height={120}
          alt="logo"
        />
      </Link>
      <div></div>
      <nav className={style.nav} style={{ color: fontColor }}>
        {links.map((link) => (
          <Link key={link} className={style.link} href={`/${link}`}>
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
