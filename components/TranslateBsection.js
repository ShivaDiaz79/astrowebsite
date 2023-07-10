import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateBsection = ({ text1 }) => {
  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header
        className="aos-animate text-white  font-loco text-left ml-4"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 >
          {text1}
        </h2>
      </header>
    </div>
  );
};

export default TranslateBsection;
