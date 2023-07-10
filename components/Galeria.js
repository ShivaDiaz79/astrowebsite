import React from 'react'
import PropTypes from 'prop-types'

const Galeria = props => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white font-loco lg:w-1/3 lg:mb-0 mb-4">La importancia del desarrollo visualmente atractivo </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-white font-lato text-base">Vivimos en una sociedad donde la información se encuentra en constante flujo, compitiendo por nuestra atención en múltiples plataformas y dispositivos. En este contexto, contar con un diseño visualmente atractivo se vuelve crucial para destacar y diferenciarse. Un desarrollo visualmente atractivo no solo es estéticamente agradable, sino que también transmite un mensaje claro y conciso de manera efectiva. Además, la belleza visual puede despertar emociones y generar una conexión más profunda con el público objetivo. Al ofrecer una experiencia visualmente atractiva, podemos crear un impacto duradero en la mente de las personas, logrando que nuestro mensaje se destaque y se recuerde con mayor facilidad. En definitiva, el desarrollo visualmente atractivo no solo es una ventaja competitiva, sino también una herramienta poderosa para comunicar ideas, emociones y conceptos de manera efectiva.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Img/3.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Img/3.png"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/Img/3.png"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/Img/3.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Img/3.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Img/3.png"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

Galeria.propTypes = {}

export default Galeria