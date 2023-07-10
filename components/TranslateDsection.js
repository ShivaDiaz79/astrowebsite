import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateDsection = ({ text1 }) => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1500,
      easing: "linear",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <header className="text-white text-3xl font-medium text-center justify-center text-spacing sm:mx-60 bg-red-500 m-2 py-6 sm:p-20">
        {text1}
      </header>
    </div>
  );
};

export default TranslateDsection;
