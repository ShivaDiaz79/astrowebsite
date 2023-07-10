import React, { useEffect } from 'react';
import LogoAstro from './LogoAstro';
import MenuVar from './MenuVar';
import { useInView } from 'react-intersection-observer';

const LandingHeader = () => {
  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    const header = document.querySelector('#landing-header');

    if (inView) {
      header.style.color = header.getAttribute('data-header-color');
    } else {
      header.style.color = 'red-500'; // Reestablecer el color por defecto cuando no está en la vista
    }
  }, [inView]);

  useEffect(() => {
    const listIten = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector('#menu-backdrop');

    listIten.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();
      
        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
        menuBackDrop.style.pointerEvents = "none"; 

            <div
        id='menu-backdrop'
        className={ `absolute  backdrop-blur-lg rounded 
       translate-x-[var(--left)]  translate-y-[var(--top)]
        left-0 top-0
       w-[var(--width)] h-[var(--height)]
        transition-all duration-500
         ease-in-out  opacity-50 z-10
        
        `}
        />
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });
  }, []);

  return (
    <div>
      <header id="landing-header" ref={ref} className="sm:py-6 px-10 flex items-center fixed top-0 w-full justify-between z-40">
        <LogoAstro />
        
        <MenuVar />
        <nav className="">
          <ul className="hidden sm:flex text-2xl font-loco [&>li>a]:text-white [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:inline [&>li>a]:px-4 [&>li>a]:py-2 z-10">
            <li>
              <a href="/">ZONA CERO</a>
            </li>
            <li>
              <a href="/quienesSomoss">QUIENES SOMOS</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
          </ul>
        </nav>

        <nav className="hidden sm:flex flex-grow justify-end basis-0">
          <ul className="flex text-2xl font-loco [&>li>a]:text-white [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:inline [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <a href="/servicioUx">DISEÑO UX</a>
            </li>
            <li>
              <a href="/desarrolloWeb">WEBSITE</a>
            </li>
            <li>
              <a href="/desarrolloApp">APLICACIONES</a>
            </li>
            <li>
              <a href="/serviciosWebmaster">WEB MASTER</a>
            </li>
          </ul>
        </nav>
        <div
  id='menu-backdrop'
  className={ `absolute bg-transparent rounded 
  translate-x-[var(--left)]  translate-y-[var(--top)]
  left-0 top-0
  w-[var(--width)] h-[var(--height)]
  transition-all duration-500
  ease-in-out border border-gray-500 shadow-3xl z-10
  `}
/>

      </header>
    </div>
  );
};

export default LandingHeader;
