import TranslateBsection from "./TranslateBsection";
import TranslateFsection from "./TranslateCmpt/TranslateFsection";

const SectionZero = () => {
  return (
    <section className=" bg-black sm:h-screen sm:w-screen text-center relative ">
      <div className="z-30 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-4">
        <footer className="sm:mt-96 bg-black">
          <TranslateFsection videoUrl={"/Img/tierra.mp4"} />
        </footer>

        <header className="sm:mt-96 text-white font-loco text-3xl sm:text-4xl ">
          <TranslateBsection
            text1={
              " Somos una solución completa y efectiva para tu negocio en línea."
            }
          />
        </header>
      </div>
    </section>
  );
};

export default SectionZero;
