import React from "react";
import Translate from "./Translate";
import TranslateBsection from "./TranslateBsection";


const SectionBlogb = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
      <div className="z-30 relative h-full flex flex-col">
     

        <footer className="flex flex-grow flex-col  justify-end pb-20">
          
            <div className="flex flex-col items-center text-black py-10  mx-4  text-center  text-4xl font-medium  text-spacing">
              <TranslateBsection
                text1={"ESTAS SON LAS 20 CRIPTOS MAS IMPORTANTE DEL MERCADO "}
              />
            </div>
         
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
  );
};

export default SectionBlogb;


