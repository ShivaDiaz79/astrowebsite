import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <section>
      <div className="container mx-auto sm:pb-12">
        <h3 className="mt-10 font-bold text-xl md:text-2xl flex flex-col pb-2 text-white font-loco md:pb-4 lg:text-3xl dark:text-slate-200 text-center after:mx-auto after:block after:w-1/2 after:md:w-1/4 after:pt-2 after:border-b-4 after:border-secondary-500">
          A CONTINUACION
          <span className="pt-2 text-md font-normal text-white font-loco lg:text-2xl">
            TODO LO QUE TENES QUE SABER A LA HORA DE CREAR TU WEBSITE
          </span>
        </h3>
        <div className="flex flex-wrap flex-col justify-center pt-6">
          <div className="flex relative px-4 w-full">
            <div className="">
              <div>
                <Image
                  className="object-cover"
                  src="/Img/2.png"
                  alt="Picture of the author"
                  width={900}
                  height={400}
                />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 font-bold text-white font-loco text-base md:text-lg text-center group-hover:text-secondary-500">
                En adelante te compartiremos ejemplos minimos de lo que podemos
                desarrollar para tu website
              </h5>
              <p className="px-6 text-sm text-white font-loco text-center md:text-base">
                Las grandes plataformas fueron creadas desde la imaginacion
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex justify-center align-middle cursor-pointer m-0 font-normal text-white font-loco items-center border-2 text-sm md:text-base rounded-full shadow outline-none focus:outline-none ease-linear transition-all duration-150 px-4 py-2 false bg-secondary-500 border-secondary-500 text-primary-500 active:bg-secondary-500/95 hover:bg-secondary-500/90 hover:shadow-lg hover:shadow-secondary-500/30"
                  href="/contacto"
                >
                  click
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
