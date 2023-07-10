import React from 'react'
import TranslateBsection from './TranslateBsection'

const SectionAppb = () => {
  return (
    <section className=" bg-black h-screen w-screen text-center relative ">
    <div className="z-30 relative h-full flex flex-col">
    <footer className="flex flex-grow flex-col  justify-end pb-20">
          <header>
            <div className="flex flex-col items-center text-white py-10  mx-4  text-center  text-4xl font-medium  font-loco text-spacing">
              <TranslateBsection
                text1={"ETAPAS DEL DESARROLLO APPS "}
              />
            </div>
          </header>
        </footer>
    </div>
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <video
        className="h-full w-full object-center object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/Img/reactnative1.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
  )
}

export default SectionAppb