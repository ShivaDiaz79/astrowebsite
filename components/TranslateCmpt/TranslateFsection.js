import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TranslateFsection = ({ imageUrl, videoUrl }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      data-aos-duration="500"
      className="flex justify-center "
    >
      <img src={imageUrl} alt="Imagen" className="max-w-full h-auto" />
      <video src={videoUrl}  autoPlay
          muted
          loop
          className="max-w-full h-auto" />

      
    </div>
  );
};

export default TranslateFsection;
