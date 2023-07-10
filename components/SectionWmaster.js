import React from "react";

const SectionWmaster = () => {
  return (
    <section
      className="landing-section bg-black  h-screen w-screen text-center relative"
      data-header-color=""
    >
     

      <div className="z-30 relative h-full flex flex-col">
        <header>
       
            <h2 className="text-white pt-40 text-3xl mx-4 sm:mx-60  font-schibsted font-medium sm:pb-40">
              Desata el Poder de tu Marca en Internet construyendo Experiencias
              Digitales Impresionantes
            </h2>
            <div className=" ">
              <p className=" text-white text-xl sm:text-3xl font-mintsans text-justify  font-medium mt-2">
                Con el apoyo de un Webmaster experimentado, aprenderás las
                mejores prácticas, estrategias y herramientas necesarias para
                optimizar tu presencia en internet. Desde el desarrollo de
                sitios web hasta la gestión de contenidos y la optimización para
                motores de búsqueda.<br/>
                Un porcentaje significativo de empresas ha sufrido las consecuencias negativas de desarrollar y lanzar su plataforma digital sin la atención, seguimiento y actualizaciones necesarias en su código. Esto ha llevado al fracaso y a dejar una sensación desagradable en el ámbito empresarial. Por esta razón, contar con los servicios de un profesional que se adapte a las necesidades económicas y, sobre todo, a la etapa de crecimiento de la empresa, resulta de vital importancia.
               </p>
       
          </div>
        </header>
      
      </div>

      <div className="absolute top-0 bottom-0 left-0 h-full w-full z-10">
        <video
          className="h-full w-full object-center object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/Img/programas.mp4" type="video/mp4" />
        </video>
      </div>
      
    </section>
  );
};

export default SectionWmaster;
