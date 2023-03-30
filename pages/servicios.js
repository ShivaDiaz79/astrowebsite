import Image from "next/image";
import Layout from "@/components/Layout";
import Styles from "../styles/servicios.module.css";
const Nosotros = () => {
  return (
    <Layout>
      <div className={Styles.container}>
        <video
          className={Styles.video}
          src="/img/video1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={Styles.right}>
          <p>Escribe aquí</p>
        </div>

        <video
          className={Styles.video}
          src="/img/video6.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={Styles.right}>
          <p>Escribe aquí</p>
        </div>
        <div className={Styles.section}>
          <h2>Título</h2>
          <h3>Subtítulo</h3>
          <div className={Styles.carousel}>
            <div className={`${Styles.square} effect`}>
              <img src="/img/foto2.jpg" alt="Imagen 1" />
              <p>Texto de la imagen 1</p>
            </div>
            <div className={`${Styles.square} effect`}>
              <img src="/img/foto2.jpg" alt="Imagen 2" />
              <p>Texto de la imagen 2</p>
            </div>
            <div className={`${Styles.square} effect`}>
              <img src="/img/foto2.jpg" alt="Imagen 3" />
              <p>Texto de la imagen 3</p>
            </div>
          </div>
          <div className={Styles.table}>
            <div className={`${Styles.square} effect`}>
              <img src="/img/foto2.jpg" alt="Imagen 4" />
              <p>Texto de la imagen 4</p>
            </div>

            <div className={Styles.square}>
              <img src="/img/foto2.jpg" alt="Imagen 5" />
              <p>Texto de la imagen 5</p>
            </div>
            <div className={Styles.square}>
              <img src="/img/foto2.jpg" alt="Imagen 6" />
              <p>Texto de la imagen 6</p>
            </div>
            <div className={Styles.square}>
              <img src="/img/foto2.jpg" alt="Imagen 7" />
              <p>Texto de la imagen 7</p>
            </div>
            <div className={Styles.square}>
              <img src="/img/foto2.jpg" alt="Imagen 8" />
              <p>Texto de la imagen 8</p>
            </div>
            <div className={Styles.square}>
              <img src="/img/foto2.jpg" alt="Imagen 9" />
              <p>Texto de la imagen 9</p>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
