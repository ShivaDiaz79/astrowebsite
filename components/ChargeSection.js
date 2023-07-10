import React from "react";

const ChargeSection = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <div className="flex flex-col items-center">
            <h2 className=" text-white  mx-6 pt-40 text-[40px] font-medium ">
              {" "}
              Experiencia de usuario - Diseño de interfaz 
            </h2>
            <p className="text-white  text-lg font-schibsted mx-3 font-medium mt-2">
              "El buen diseño no se trata solo de hacer que algo se vea bonito,
              sino de hacer que funcione de manera efectiva y brinde una
              experiencia excepcional al usuario".
            </p>
          </div>
        </header>
        <footer className="flex flex-grow flex-col justify-end pb-20">
      
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <video
          className="h-full w-full object-center object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/Img/webmaster4.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default ChargeSection;
