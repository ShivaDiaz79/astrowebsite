import Image from "next/image";
import LandingHeader from "@/components/LandingHeader";

import Leters from "@/components/Leters";
import RectanGule from "@/components/RectanGule";

import Phone from "@/components/UiUx/Phone";
import SectionApp from "@/components/SectionApp";
import SectionAppb from "@/components/SectionAppb";


const index = () => {
  return (
    <div>
      <LandingHeader/> 

      <div className=" snap-y snap-mandatory relative w-full h-screen sm:overflow-auto sm:scroll-smooth">
        <div className="snap-center">
        <SectionAppb/>
        </div>
        <div className="snap-center">
        <SectionApp/>
        </div>
      </div>
   

    
      {/* <div>
      <Leters title="Desarrolla la próxima generación de aplicaciones móviles con React Native y lleva la innovación a tus manos." text2="La revolución móvil está en constante evolución, y React Native es la herramienta que te permitirá estar a la vanguardia. Desarrollar una aplicación con React Native te brinda la oportunidad de crear experiencias móviles únicas, fusionando la potencia de la programación nativa con la agilidad y la eficiencia de JavaScript. Con su enfoque en el rendimiento y la interoperabilidad, React Native te permite construir aplicaciones multiplataforma con una interfaz de usuario fluida y dinámica. " text=" Ya sea que estés creando una aplicación empresarial, una plataforma de comercio electrónico o una aplicación de entretenimiento, React Native te proporciona las herramientas necesarias para materializar tus ideas en experiencias móviles de alta calidad. Abre las puertas a la innovación, destaca en el mercado y lleva tu visión a las manos de millones de usuarios con React Native."/>

      </div> */}
      <div className=" grid grid-cols-1  sm:grid-cols-2 sm:h-full">
        
      {/* <div className=" bg-black m-6"> 
      <h1 className="flex m-6 sm:m-16 text-4xl font-anton sm:text-5xl text-white justify-end pb-8 sm:pb ">
           Desarrollamos aplicaciones para celulares y tablet con Reac Native
      </h1>
      <span className="flex m-5 tracking-tighter sm:mx-20 text-white text-justify justify-between text-2xl sm:text-3xl leading-relaxed font-schibsted ">
              Nos interesa mucho antes de que contrataten nuestros servicios
              informarte sobre las diferentes etapas de la creacion de una
              aplicacion. Nuestra prioridad es asegurarnos de que nuestros
              clientes o futuros clientess tengan un conocimiento completo sobre
              cada etapa del proceso de creación de su aplicación.
      </span>
      <span className=" flex m-5 tracking-tighter sm:mx-20 text-white  text-justify justify-between text-2xl sm:text-3xl font-schibsted">
              Desde la planificación y definición de objetivos hasta la
              producción y lanzamiento, nos encargamos de guiarlos en todo
              momento. Esto garantiza que cada proyecto se lleve a cabo de
              manera eficiente y exitosa, y que estén informados y satisfechos
              con el resultado final.
      </span>
      </div> */}
      {/* <div className=" flex items-center">
        <Phone/>
        </div> */}
      </div>
      

      {/* <RectanGule title="Descubre las etapas del desarrollo de una aplicación con React Native: desde la idea hasta el lanzamiento exitoso " parrafo="Explora las seis etapas clave del desarrollo de una aplicación con React Native y desata el poder de la creación de aplicaciones móviles. Desde el análisis de requisitos y el diseño conceptual, hasta el desarrollo, las pruebas exhaustivas, el despliegue y el mantenimiento continuo, desentraña cada paso crucial en el camino hacia el éxito de tu aplicación. Aprende cómo convertir tus ideas en una experiencia móvil interactiva y cautivadora con la potencia de React Native como tu aliado de desarrollo. ¡Impulsa tu aplicación al siguiente nivel y haz que destaque en el competitivo mundo de las aplicaciones móviles!"/> */}
        
    
      </div>
    
  );
};

export default index;
