import Layout from "./Layout";
import Image from "next/image";
import MenuVar from "./MenuVar";
import Navbar from "./Navbar";
import Styles from "../styles/servicios.module.css";
import Footer from "./Footer";

const PageWithoutHeader = ({ children }) => {
  return (
    <section>
      <Navbar className="" />

      <div className={Styles.container}>
        <video
          className={Styles.video}
          src="/img/video1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={Styles.right}>
          <p> ¿NECESITAS CRECER? </p>
        </div>

        <video
          className={Styles.video}
          src="/img/video6.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <Footer/>
    </section>
  );
};

export default PageWithoutHeader;
