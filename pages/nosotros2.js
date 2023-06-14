import Image from "next/image";
import Layout from "@/components/Layout";


const Nosotros = () => {
  return (
    <Layout>
      <div className="container flex flex-wrap justify-between items-center">
        <h2 className="text-2xl mb-8">Quiénes somos</h2>
        <p className="text-lg leading-relaxed mb-8">
          las ventajas de tener una aplicación móvil y un sitio web totalmente
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Mejora la visibilidad en línea: Tener una aplicación móvil y un sitio web 
        </p>
      </div>
      <div className="imageContainer mt-12 relative overflow-hidden">
        <Image
          src="/img/foto2.jpg"
          alt="Imagen de la empresa"
          width={400}
          height={400}
          className="transform transition-transform hover:scale-110"
        />
      </div>
      <div className="container flex flex-wrap justify-between items-center mt-12">
        <div className="column flex-basis-0 flex-grow-1 w-1/2 mr-4">
          <Image src="/img/foto2.jpg" alt="Imagen 1" width={600} height={400} className="transform transition-transform hover:scale-110 mb-4" />
          <Image src="/img/foto2.jpg" alt="Imagen 2" width={600} height={400} className="transform transition-transform hover:scale-110 mb-4" />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} className="transform transition-transform hover:scale-110" />
        </div>
        <div className="column flex-basis-0 flex-grow-1 w-1/2 ml-4">
          <Image src="/img/foto2.jpg" alt="Imagen 3" width={300} height={400} className="transform transition-transform hover:scale-110 mb-4" />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} className="transform transition-transform hover:scale-110 mb-4" />
          <Image src="/img/foto2.jpg" alt="Imagen 4" width={600} height={400} className="transform transition-transform hover:scale-110" />
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
