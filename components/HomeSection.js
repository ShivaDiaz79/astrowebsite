import Image from "next/image";

const HomeSection = ({ text, imagePath, imagenIzquierda = false }) => {
  return (
    <div
      className={`flex mt-6 bg-green-200 p-4 flex-col lg:flex-row ${
        imagenIzquierda && "lg:flex-row-reverse"
      }`} >
      <div className="flex-1 bg-blue-100 justify-center items-center flex">
        <Image height={700} width={700} src={imagePath} alt="Imagen mediana" />
      </div>
      <div className="flex-1 bg-red-100 flex justify-center items-center p-4">
        <p className="text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default HomeSection;
