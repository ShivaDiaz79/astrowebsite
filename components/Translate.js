import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Translate = ({ children }) => {
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
    <div
      className="text-white text-3xl font-schibsted bg-pink-500 m-2  font-medium sm:mt-10 mx-4 "
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {children}
    </div>
  );
};

export default Translate;



