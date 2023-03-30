

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
const Header = () => {
  const handleClick = (e) => {
    const logo = e.target.querySelector('.logo')
    logo.classList.add(styles.active)

    setTimeout(() => {
      logo.classList.remove(styles.active)
    }, 500)
  }
  return (
    <>
      <Head>
        <title>Next.js Video Header Example</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay muted loop>
            <source src="../Img/earthmoon.mp4" type="video/mp4" />
          </video>
          <div className={`${styles.content} ${styles.customContent}`}>
            <h1>BUSCABAS ALGO DIFERENTE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.logo}>
          <Image
              fill
              src="/Img/Isologoastro.svg"
              alt="Imagen logo"
              className="object-contain"
            />
            </div>
        
      </div>
        <div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros2">Nosotros</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
