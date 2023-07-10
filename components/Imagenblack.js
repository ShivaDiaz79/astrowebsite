import React from 'react'

import Image from 'next/image';

const Imagenblack = () => {
  return (
    <div className='bg-black flex flex-col sm:flex-row flex-wrap justify-center items-center p-6 gap-6'>
    <Image
      className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="/Img/2.png"
      alt="image description"
      width={900}
      height={700}
    />
     <Image
      className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="/Img/2.png"
      alt="image description"
      width={900}
      height={700}
    />
     <Image
      className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="/Img/2.png"
      alt="image description"
      width={900}
      height={700}
    />
     <div className="bg-white dark:bg-gray-900 p-6">
      <h1 className="mb-4 text-4xl font-extrabold font-loco leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        TODO LOS DISEÑOS SIN LIMITACIONES{' '}
        <span className="text-blue-600 dark:text-blue-500">PARA QUE SEAS #1</span> Y TU PUBLICO SE FIDELICE.
      </h1>
      <p className="text-2xl font-normal text-gray-500 lg:text-xl dark:text-gray-400"> IMAGINATE PODER CONSTRUIR TU SITIO WEB SIN SENSURA, SIN LOS LIMITANTES QUE LO CRM TE OFRECEN. SER DUEÑO DEL CODIGO Y REUSARLO EN LA MEDIDA QUE TU EMPRESA CRECE.      </p>
    </div>
    </div>
  );
};

export default Imagenblack