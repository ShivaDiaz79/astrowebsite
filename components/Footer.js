import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>;
        <nav className={styles.navegacion}>;
            <div className={"contenedor &{styles.contenido}"}>
            </div>
            <Link href="/"> Inicio</Link>
            <Link href="/nosotros"> Nosotros</Link>
            <Link href="/servicios"> Servicios</Link>
            <Link href="/blog"> Blog</Link>
          </nav>
          <p className={styles.copyright}>
            todos los derechos reservados
          </p>


    </footer>
  )
}

export default Footer