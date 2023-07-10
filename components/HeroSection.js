import Image from "next/image";
import TypedText from "./TypedText";

const HeroSection = () => {
  const title =
    "Encontraras la mejor informacion de desarrollo web, apps , software y criptomonedas";
  const paragraph = "";
  return (
    <section
      className=" landing-section bg-black h-screen  text-center relative "
      data-header-color=""
    >
      <div className="z-30 relative h-screen w-screen flex flex-col">
        <header>
          <div className="flex flex-col items-center">
            <Image
              src="/Img/Logo-ASTRO-compl.-blanco.png"
              className=" my-8"
              height={240}
              width={400}
              alt="logo"
            />
            <TypedText
              title={title}
              paragraph={paragraph}
              titleStyle="text-4xl font-bold font-loco"
              paragraphStyle="text-lg"
              h1Color="text-white"
              paragraphColor="text-blue-500"
            />
           
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
