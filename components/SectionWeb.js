import React from 'react'


const SectionWeb = () => {
  return (
    <section className="landing-section bg-black  h-screen w-screen text-center relative" data-header-color= "">
    <div className="z-30 relative h-full flex flex-col">
      <header>
      
        <div className="flex flex-col items-center">
        <h2 className=" text-white  mx-6 pt-40 text-[40px] font-medium "> Diseño de interfaz y experiencia de usuario</h2>
          <p className="text-white  text-lg font-schibsted font-medium mt-2">
          "El buen diseño no se trata solo de hacer que algo se vea bonito, sino de hacer que funcione de manera efectiva y brinde una experiencia excepcional al usuario".
          </p>
        </div>
      </header>
      <footer className="flex flex-grow flex-col justify-end pb-20">
        <div className=' gap-4 flex mx-auto'>
          <a
            className="text-white border-[3px] border-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors rounded font-medium px-12 py-6"
            href="/"
          >
             hace click si quieres contactarnos
          </a>
          <a
            className="text-white border-[3px] border-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors rounded font-medium px-12 py-6"
            href="/servicioUx"
          >
           Ver un poco mas antes de contactarnos
          </a>
        </div>
      </footer>
    </div>
    <div className="absolute top-0 bottom-0 left-0 h-full w-full z-10">
      <img className="h-full w-full object-center object-cover"
        
     src="/Img/3.png" alt="mueestra" />
    </div>
  </section>


  )
}

export default SectionWeb