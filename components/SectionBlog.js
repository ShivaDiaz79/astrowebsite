import React from "react";
import Translate from "./Translate";
import TranslateBsection from "./TranslateBsection";
import TranslateCsection from "./TranslateCsection";



const SectionBlog = () => {


  
  return (
    <section className="bg-black h-screen w-screen relative ">
      <div className="z-30 relative h-full flex flex-col">
        <header>
        <TranslateBsection
          text1="Texto 1 con animación fade-right"
        />

       
          <Translate>
          Sumérgete en el fascinante universo de las criptomonedas y descubre todo lo que necesitas saber sobre las principales monedas digitales. Desde el precio actual y la capitalización de mercado, hasta los cambios en 24 horas y datos históricos, te ofrecemos una visión completa y actualizada de las criptomonedas más relevantes. Acompáñanos en este viaje de conocimiento y mantente al día en el emocionante mundo de las finanzas digitales. 
          </Translate>
          <TranslateCsection text1="ESTAS SON LAS 20 CRIPTOS MAS IMPORTANTE DEL MERCADO"/>
        </header>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <video
          className="h-full w-full object-center object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/Img/astro.mp4" type="critp siembra" />
        </video>
      </div>
    </section>
  );
};

export default SectionBlog;



    {/* <header>
      
        <div className="flex flex-col items-center ">
        <h2 className=" text-white  mx-6  sm:pt-40 text-[40px]  sm:mx-60 space-y-1 tracking-tighter font-medium "> Explorando el mundo de las criptomonedas: </h2>
          <p className="text-white  text-2xl font-schibsted font-medium mt-2 sm:mt-60 mx-4 sm:mx-60 text-justify tracking-tighter">
                   </p>
        </div>
      </header> */}