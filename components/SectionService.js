import React from 'react';
import TranslateServicios from './TranslateCmpt/TranslateServicios';
import RectanGule from './RectanGule';

const SectionService = () => {
  const serviciosData = [
  
    {
      text:
        'Con Next.js, puedo crear sitios web altamente funcionales y rápidos que se adaptan a tus necesidades empresariales. Esta tecnología te permitirá tener un sitio web de alto rendimiento, optimizado para SEO y con una experiencia de usuario excepcional.',
    },
    {
      text:
        ' Si estás pensando en expandirte al mercado móvil, puedo desarrollar aplicaciones nativas para iOS y Android utilizando React Native. Con esta tecnología, tus aplicaciones serán rápidas, eficientes y ofrecerán una experiencia fluida a tus usuarios.',
    },
    {
      text:
        'Astro.js es una herramienta versátil que combina lo mejor de diferentes frameworks, como React, Vue y Svelte, para crear sitios web atractivos y personalizados. Con Astro.js, puedo adaptarme a tus requerimientos y ofrecerte una solución única para tu negocio.',
    },
    {
      text:
        'En cuanto al diseño, utilizo Tailwind CSS, un framework de estilos altamente configurable que me permite crear interfaces modernas y atractivas. Con esta herramienta, tus sitios web y aplicaciones tendrán un aspecto profesional y cautivarán a tus clientes.',
    },
    {
      text:
        'Construir tu app o sitio web con estas poderosas tecnologías es una inversión en el éxito de tu negocio. Aprovecha mi experiencia y conocimientos para crear soluciones digitales que superen las expectativas de tus clientes y te posicionen como un líder en tu industria.',
    },
  ];

  return (
    <section className="landing-section bg-black h-auto w-screen text-center relative">

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <video className="h-full w-full object-center object-cover" autoPlay muted loop>
          <source src="/Img/ux2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center pt-10">

        <RectanGule title='Innovación en Desarrollo Web y Apps con Enfoque Diferente al Mercado Nacional' parrafo='Como expertos en desarrollo web y móvil, ofrecemos creaciones unicas utilizando potentes lenguajes de programación como Next.js, React, React Native, Astro.js y Tailwind CSS que son las que lideran el mercado mundial. Nuestra filosofía es única en el desarrollo web y de aplicaciones. No nos limitamos únicamente a la programación, sino que también realizamos un exhaustivo análisis del mercado antes de proponer un diseño de UX/UI que se adapte a las necesidades y preferencias de tus usuarios.

Nuestro servicio de Web Master, (una función que aún no se encuentra ampliamente implementada en el mercado), nos encargamos de mantener y optimizar tu sitio web de manera continua, garantizando su funcionamiento óptimo, seguridad y actualizaciones periódicas.

Nuestro objetivo es brindarte soluciones digitales completas y efectivas, combinando la tecnología más avanzada con estrategias de diseño centradas en el usuario.'/>
        <RectanGule parrafo='A diferencia de otros, nos tomamos el tiempo de explicarte la importancia de darle a tus activos digitales la mejor opción en función a su escalabilidad  el desarrollo web personalizado tiene varias ventajas sobre el uso de un gestor de contenido (CMS) en términos de crecimiento y beneficios a largo plazo. Si bien el desarrollo web personalizado puede requerir una inversión inicial más alta en comparación con el uso de un CMS, a largo plazo puede ofrecerte mayores beneficios y un retorno de inversión más sólido al adaptarse a tus necesidades específicas y permitir un crecimiento escalable y sostenible. Aquí hay algunas razones por las que el desarrollo web y app puede ser más beneficioso:'/>
        
       
     
      </div>

      <div className="flex flex-col justify-center bg-black bg-opacity-25">

        {serviciosData.map((servicio, index) => (
          <div key={index} className="mx-4 sm:mx-10 py-6">
            <TranslateServicios text1={servicio.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionService;
