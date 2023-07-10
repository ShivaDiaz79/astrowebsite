import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateEsection = ({ text1 }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="text-white text-3xl font-schibsted bg-pink-500 m-2 py-4 px-4font-medium sm:mt-10 mx-4"
      data-aos="zoom-in-right"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <span data-aos="zoom-in-right">{text1}</span>
    </div>
  );
};

export default TranslateEsection;







