import React from "react";
import styles from "../styles/Enter.module.css";
import Link from "next/link";
import Image from "next/image";
import SEO from "../components/seo";
function Enter() {
  return (
    <>
      <SEO title="Enter" description="" keywords="" />
      <section className={styles.container}>
        <div className={styles.imageAndText}>
          <Link href="/home" passHref>
            <Image
              alt="enter image"
              quality={100}
              priority
              className="img"
              src="https://res.cloudinary.com/glasswavs/image/upload/v1736195054/General%20Qu/HOMEPAGE%20IMAGES%20ON%20TOP%20AND%20ENTER%20PAGE/ENTER_IMAGE_snkw2e.jpg"
              width={1200}
              height={800}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <h1 className={styles.text}>ENTER</h1>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Enter;
