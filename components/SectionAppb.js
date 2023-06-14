import React from 'react'

const SectionAppb = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
    <div className="z-30 relative h-full flex flex-col">
      <header>
      
        <div className="flex flex-col items-center">
      
        </div>
      </header>
  
    </div>
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <video
        className="h-full w-full object-center object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/Img/reactnative.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
  )
}

export default SectionAppb