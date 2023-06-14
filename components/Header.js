import Head from "next/head";
import ColorSeccion from "./ColorSeccion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";
import TypedText from "./TypedText";
import MenuService from "./MenuService";

const Header = () => {
  const handleClick = (e) => {
    
  

    setTimeout(() => {
      logo.classList.remove(styles.active);
    }, 500);
  };


  return (
    <>
      <Head>
        <title>ASTRO BG</title>
      </Head>
      <Navbar />
     
      <div className={styles.container}>
        <div className={styles.videoContainer}>
      
          <video className={styles.video} autoPlay muted loop>
            <source src="../Img/astro.mp4" type="video/mp4" />
          </video>
          <MenuService/>
        </div>
      </div>
    </>
  );
};

export default Header;
