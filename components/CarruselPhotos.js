import React, { useState, useEffect } from 'react';

const CarouselPhotos = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? photos.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === photos.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === photos.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Cambia este valor para ajustar el intervalo de cambio de diapositivas (en milisegundos)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte

  }, [photos.length]);

  return (
    <div className="relative flex items-center sm:w-full sm:h-full sm:justify-center">
      <img
        src={`/img/${photos[currentSlide]}`}
        alt="Slide"
        className="object-cover object-center rounded-lg transition-transform transform-gpu hover:scale-110 hover:opacity-50"
      />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded-lg"
        onClick={handlePrevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-lg"
        onClick={handleNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default CarouselPhotos;

