
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TranslateEsection from "./TranslateCmpt/TranslateEsection";
import TranslateFsection from "./TranslateCmpt/TranslateFsection";


const ChargeSectionimg = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
    <div className="z-30 relative h-full flex flex-col">
      <header>
      <div className="flex flex-col items-center text-black py-10  mx-4 bg-amber-200 sm:mx-32 mt-40  text-center  text-4xl font-medium  text-spacing">
            <TranslateEsection
              text1={"ESTAS SON LAS 20 CRIPTOS MAS IMPORTANTE DEL MERCADO "}
            />
          </div>
      </header>

      <footer className="flex flex-grow flex-col  justify-center pb-20">
        <header>
          <div className="flex flex-col items-center text-black py-10  mx-4 bg-amber-200   text-center  text-4xl font-medium  text-spacing">
            <TranslateFsection
              text1={"ESTAS SON LAS 20 CRIPTOS MAS IMPORTANTE DEL MERCADO "}
            />
          </div>
        </header>
      </footer>
    </div>

    <div className="absolute top-0 bottom-0 left-0 right-0">
      <video
        className="h-full w-full object-center object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/Img/bic.mp4" type="video/mp4" />
      </video>
    </div>
  </section>

  
  )
}

export default ChargeSectionimg