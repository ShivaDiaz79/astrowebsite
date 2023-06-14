import React from 'react'

const SectionBlog = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
    <div className="z-30 relative h-full flex flex-col">
      <header>
      
        <div className="flex flex-col items-center ">
        <h2 className=" text-white  mx-6 pt-40 text-[40px]  sm:mx-60 space-y-1 tracking-tighter font-medium "> Explorando el mundo de las criptomonedas: Descubre toda la información sobre las principales monedas digitales</h2>
          <p className="text-white  text-2xl font-schibsted font-medium mt-2 mx-4 sm:mx-60 text-justify tracking-tighter">
          Sumérgete en el fascinante universo de las criptomonedas y descubre todo lo que necesitas saber sobre las principales monedas digitales. Desde el precio actual y la capitalización de mercado, hasta los cambios en 24 horas y datos históricos, te ofrecemos una visión completa y actualizada de las criptomonedas más relevantes. Acompáñanos en este viaje de conocimiento y mantente al día en el emocionante mundo de las finanzas digitales.          </p>
        </div>
      </header>
      <footer className="flex flex-grow flex-col justify-end pb-20">
        <div className='flex flex-col gap-x-4'>
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
        <source src="/Img/crip.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
  )

}

export default SectionBlog