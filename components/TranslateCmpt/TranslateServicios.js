import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateServicios = ({ text1, }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" bg-black bg-opacity-25 text-white text-2xl  font-mintsans text-justify  sm:text-4xl mx-4 sm:mx-10 px-10 "
  
      data-aos="zoom-in-left"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <span data-aos="zoom-in-left">{text1}</span>
    </div>
  );
};

export default TranslateServicios;