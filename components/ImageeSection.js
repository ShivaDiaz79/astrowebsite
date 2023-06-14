import Image from "next/image";

const ImageeSection = () => {
  return (
    <section>
      <div className="container mx-auto pb-6 md:pb-12">
        <h3 className="mb-2 font-bold text-xl md:text-2xl flex flex-col pb-2 md:pb-4 lg:text-3xl dark:text-slate-200 text-center after:mx-auto after:block after:w-1/2 after:md:w-1/4 after:pt-2 after:border-b-4 after:border-secondary-500 ">
          A CONTINUACION
          <span className="pt-2 text-lg font-normal lg:text-2xl">
            TODO LO QUE TENES QUE SABER A LA HORA DE CREAR TU WEBSITE
          </span>
        </h3>
        <div className="flex flex-wrap -mx-4 justify-center pt-6">
          <div className="flex relative px-4 w-full ">
            <div className="bg-white relative drop-shadow-lg rounded-xl overflow-hidden w-full break-words dark:bg-slate-700 dark:border-gray-700 group">
              <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-fit">
                <Image
                  className="object-cover"
                  src="/Img/1.png"
                  fill
                  alt="Picture of the author"
                />

                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 group-hover:opacity-30 bg-secondary-500"></div>
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 font-bold text-base md:text-lg text-center group-hover:text-secondary-500">
                Adjudicación de cartera y ahorros de clientes Banco Fassil en
                Intervención
              </h5>
              <p className="px-6 text-sm text-center md:text-base">
                Te invitamos a visitar nuestra sección de “Preguntas
                Frecuentes”, en este apartado encontrarás información sobre el
                proceso de migración. Tú quieres soluciones y nosotros te damos
                tranquilidad.
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex justify-center align-middle cursor-pointer m-0 font-normal items-center border-2 text-sm md:text-base rounded-full shadow outline-none focus:outline-none ease-linear transition-all duration-150
        px-4 py-2
        false
        bg-secondary-500 border-secondary-500 text-primary-500 active:bg-secondary-500/95 hover:bg-secondary-500/90 hover:shadow-lg hover:shadow-secondary-500/30
        "
                  href=""
                >
                  Preguntas Frecuentes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageeSection;
