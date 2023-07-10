import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateCsection = ({ text1 }) => {
  useEffect(() => {
    AOS.init({
      offset: 300, // Ajusta el offset según tus necesidades
      duration: 300, // Ajusta la duración según tus necesidades
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="aos-animate bg-red-700 py-20 px-20"
      data-aos="zoom-out-left"
      data-aos-offset="300"
      data-aos-duration="300"
    >
      <header className="">
        {text1}
      </header>
    </div>
  );
};

export default TranslateCsection;

