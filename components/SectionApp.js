import ContaiLe from "./ContaiLe";

const SectionApp = () => {
  const crearContaiLe = (title, parrafo1, parrafo2, parrafo3, parrafo4, imagen) => {
    return (
      <ContaiLe
        title1={title}
        parrafo1={parrafo1}
        parrafo2={parrafo2}
        parrafo3={parrafo3}
        parrafo4={parrafo4}
        imagen={imagen}
      />
    );
  };

  return (
    <section className="landing-section bg-black  text-center relative" data-header-color="">
      <div className="z-30 relative h-full flex flex-col ">
        <footer>
          <div className="mx-6 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-black">
            {crearContaiLe(
              "Análisis de requisitos",
              "Comprender y documentar los requisitos y objetivos de la aplicación.",
              "Realizar investigaciones",
              "Recopilar información",
              "Definir los alcances del proyecto",
              "/Img/1.png"
            )}
            {crearContaiLe(
              "Diseño",
              "Se crea un diseño conceptual de la aplicación",
              "Arquitectura general",
              "La interfaz de usuario.",
              "Estructura de datos y otros componentes clave.",
              "/Img/2.png"
            )}
            {crearContaiLe(
              "Desarrollo",
              "Se escribe y se codifica el código de la aplicación.",
              "Implementar las funcionalidades y características definidas.",
              "Creación de componentes, Gestión de bases de datos",
              "Integración de API",
              "/Img/3.png"
            )}
          </div>
        </footer>
        <footer className="my-2">
          <div className="mx-6 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-black">
            {crearContaiLe(
              "Pruebas",
              "Verificacion de la aplicación que funcione correctamente y cumpla con los requisitos establecidos.",
              "Pruebas de integración.",
              "Pruebas de rendimiento",
              "Pruebas de usuario para garantizar la calidad y la usabilidad de la aplicación.",
              "/Img/4.png"
            )}
            {crearContaiLe(
              "Despliegue",
              "Superada las pruebas, se considera lista para su uso, se lleva a cabo el despliegue en el entorno de producción.",
              "Configuración de servidores.",
              "Bases de datos.",
              "Otros recursos necesarios para que la aplicación esté disponible para los usuarios finales.",
              "/Img/c.jpg"
            )}
            {crearContaiLe(
              "Mantenimiento y actualizaciones",
              "Solución de errores, la optimización del rendimiento",
              "Implementación de actualizaciones y nuevas características",
              "Gestión de la seguridad",
              "Escalabilidad de la aplicación.",
              "/Img/g.jpg"
            )}
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 left-0 h-full w-full z-10"></div>
    </section>
  );
};

export default SectionApp;

