import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../styles/nosotros.module.css";


const Nosotros = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Quiénes somos</h2>
        <p>
          las ventajas de tener una aplicación móvil y un sitio web totalmente
        </p>
        <p>
          Mejora la visibilidad en línea: Tener una aplicación móvil y un sitio
          web 
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/img/foto2.jpg"
          alt="Imagen de la empresa"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.galleryContainer}>
        <div className={styles.column}>
          <Image src="/img/foto2.jpg" alt="Imagen 1" width={600} height={400} />
          <Image src="/img/foto2.jpg" alt="Imagen 2" width={600} height={400} />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} />
          
        </div>
        <div className={styles.column}>
          <Image src="/img/foto2.jpg" alt="Imagen 3" width={300} height={400} />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} />
          
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
