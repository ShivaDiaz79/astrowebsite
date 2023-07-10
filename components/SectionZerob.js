import TranslateBsection from "./TranslateBsection";
import TranslateFsection from "./TranslateCmpt/TranslateFsection";

const SectionZerob = () => {
  return (
    <section className=" bg-black sm:h-screen sm:w-screen text-center relative ">
      <div className="z-30 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-4">
        <header className="sm:mt-96 text-white font-loco  text-2xl sm:text-4xl ">
          <TranslateBsection
            text1={
              " Si estas buscando vender, ofrecer tus servicios o digitalizar tu idea de negocio. Somos la mejor opcion en cuanto tecnologia y experiencia. No desarrollamos con gestores de contenidos ni mucho menos con plantillas de aplicaciones. Nuestro trabajo es artesanal y exclusivo a nivel global."
            }
          />
        </header>
        <footer className="sm:mt-96 bg-black">
          <TranslateFsection videoUrl={"/Img/tierraverde.mp4"} />
        </footer>
      </div>
    </section>
  );
};

export default SectionZerob;
