import React from 'react'
import TypedText from './TypedText'

const Efectletras = () => {
  const title = 'Nos especializamos en ofrecer trabajos de excelente calidad en el campo del marketing digital. Nuestro enfoque se centra en dos aspectos fundamentales: desarrollo de páginas web y aplicaciones, y en un exhaustivo estudio de mercado para garantizar resultados exitosos. Cuando se trata de crear una presencia en línea efectiva, sabemos que es crucial contar con una página web y aplicaciones que destaquen y cumplan con las expectativas de tus clientes. Es por eso que en Astro nos comprometemos a desarrollar proyectos personalizados, teniendo en cuenta las necesidades específicas de tu negocio. Antes de comenzar cualquier diseño, llevamos a cabo un minucioso estudio para comprender a tu público objetivo, analizar a tus competidores y descubrir oportunidades únicas. Esta investigación nos permite tomar decisiones informadas y crear una estrategia sólida para el éxito de tu proyecto. SIN LIMITES A LA IMAGINACION'
  
  const paragraph = '.........................';



  return (

    <TypedText
    title={title}
    paragraph={paragraph}
    titleStyle="text-2xl sm:text-4xl font-bold font-loco"
    paragraphStyle="text-lg"
    h1Color="text-white"
    paragraphColor="text-blue-500"
  />
    
  )
}

export default Efectletras
