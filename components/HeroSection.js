import Image from "next/image";
import LandingHeader from "./LandingHeader";

const HeroSection = () => {
  return (
    <section className=" landing-section bg-black h-screen w-screen text-center relative "
    data-header-color="white"
    >
      
      <div className="z-30 relative h-full flex flex-col">
        <header>
        
          <div className="flex flex-col items-center">
            <Image
              src="/Img/Logo-ASTRO-compl.-blanco.png"
              className=" my-8"
              height={240}
              width={400}
              alt="logo"
            />
            <p className="text-white text-3xl mt-2">
              Encontraras la mejor informacion de desarrollo web, apps , software y criptomonedas
            </p>
          </div>
        </header>
        <footer className="flex flex-grow flex-col justify-end pb-20">
          <div>
            <a
              className="text-white border-[3px] border-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors rounded font-medium px-12 py-6"
              href="/"
            >
              hace click si quieres
            </a>
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <video
          className="h-full w-full object-center object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/Img/astro.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
