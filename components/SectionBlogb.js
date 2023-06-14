import React from "react";

const SectionBlogb = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <div className="flex flex-col items-center">
            <h2 className=" text-white  mx-6 pt-40 text-[40px] font-medium text-justify text-spacing">
              {" "}
              La pionera y líder del mercado de las criptomonedas
            </h2>
            <p className="text-white  text-3xl font-schibsted font-medium mt-2 text-justify  text-spacing mx-4 sm:mx-60">
              Bitcoin es la primera criptomoneda y sigue siendo la más conocida
              y valiosa. Fue creada en 2009 por una persona o grupo de personas
              bajo el seudónimo de Satoshi Nakamoto. Bitcoin utiliza la
              tecnología blockchain para permitir transacciones descentralizadas
              y seguras sin la necesidad de intermediarios. Es ampliamente
              aceptada como forma de pago en muchos lugares y ha ganado
              reconocimiento a nivel mundial.\n\nRazones para invertir en
              Bitcoin:\n\n- Alta liquidez y capitalización de mercado: Bitcoin
              es la criptomoneda con la mayor capitalización de mercado, lo que
              la convierte en una opción atractiva para los inversores.\n\n-
              Reserva de valor: Muchos consideran a Bitcoin como un activo
              digital similar al oro, ya que se percibe como una reserva de
              valor a largo plazo debido a su oferta limitada y su resistencia a
              la inflación.\n\n- Aceptación generalizada: Bitcoin ha ganado una
              amplia aceptación y es utilizado como forma de pago por empresas y
              comerciantes en todo el mundo.\n\n- Potencial de crecimiento: A
              medida que más personas y empresas adoptan Bitcoin, existe un
              potencial de aumento en su valor a largo plazo.
            </p>
          </div>
        </header>
        <footer className="flex flex-grow flex-col justify-end pb-20">
          <div className="flex flex-col gap-x-4">
            <a
              className="text-white border-[3px] border-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors rounded font-medium px-12 py-6"
              href="/"
            >
              hace click si quieres
            </a>
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
          <source src="/Img/bic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default SectionBlogb;
