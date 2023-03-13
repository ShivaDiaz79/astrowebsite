import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        {/* <div className={styles.barra}> */}
        <div className={'flex justify-between items-center'}>
          <Link href="/">
            <div className="h-28 w-28 relative">
            <Image
              fill
              src="/Img/logomkt.svg"
              alt="Imagen logo"
              className="object-contain"
            />
            </div>
          </Link>

          <nav className={styles.navegacion}>  
              <Link  href="/">Inicio</Link>
              <Link className="text-lg p-5" href="/nosotros"> Nosotros</Link>
              <Link className="text-lg p-5" href="/nosotros2"> Nosotros2</Link>
              <Link className="text-lg" href="/servicios"> Servicios</Link>
              <Link className="text-lg" href="/blog"> Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
