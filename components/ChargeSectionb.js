import React from "react";

const ChargeSectionb = () => {
  return (
    <section
      className="landing-section bg-black  h-screen w-screen text-center relative"
      data-header-color=""
    >
      <div className="z-30 relative h-full flex flex-col">
        <header></header>
        <footer className="flex flex-grow flex-col justify-end pb-20">
          <div className=" gap-4 flex mx-auto">
            <a
              className="text-white border-[3px] border-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors rounded font-medium px-12 py-6"
              href="/servicioUx"
            >
              Ver un poco mas antes de contactarnos
            </a>
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 left-0 h-full w-full z-10">
        <img
          className="h-full w-full object-center object-cover"
          src="/Img/aa.jpg"
          alt="ux"
        />
      </div>
    </section>
  );
};

export default ChargeSectionb;
