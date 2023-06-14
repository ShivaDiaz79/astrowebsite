import { useState, useEffect } from "react";

const colors = ["bg-white", " bg-black", "bg-gray-900", "bg-neutral-300",];

const ColorSeccion =({ children, className, color = 0 }) =>{
  const [currentColor, setCurrentColor] = useState(color);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor((currentColor + 1) % colors.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentColor]);
// <div className={`h-screen flex justify-center items-center text-white text-3xl font-bold transition-colors duration-1000 ease-in-out ${colors[currentColor]}`}>
  return (
    <div className={`transition-colors duration-1000 ease-in-out ${colors[currentColor]} ${className}`}>
    {children}
    </div>
  );
}
export default ColorSeccion