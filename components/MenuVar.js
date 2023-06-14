import React, { useState } from "react";
import ColorSeccion from "./ColorSeccion";
import Link from "next/link";

import MenuFlotante from "./MenuFlot";

const MenuVar = () => {
  const [isOpen, setIsOpen] = useState("");

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [menuDown, setMenuDown] = useState("");
  const abrirMenu = (name) => {
    if (name === menuDown) {
      setMenuDown("");
      return;
    }

    setMenuDown(name);
  };

  return (
    <div className=" mt-4  sm:hidden z-50">
      <button
        onClick={handleMenu}
        id="boton"
        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white "
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {isOpen && (
        <ColorSeccion color={3} className="top-0 fixed right-0 left-0 bottom-0">
          <div className="flex justify-end p-2 pb-6">
            <button
              className="p-2 my-4  rounded-full pr-4"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-white font-anton">Cerrar </span>
            </button>
          </div>
          <div className="text-xl lg:flex-grow text-center pr-4">
            <Link
              href="/"
              className="flex items-center font-anton pr-5 mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600"
            >
              <div className="inline-flex items-center">
                <span className="mr-10  mx-48 pl-4 font-anton text-6xl ">
                  ZONA CERO
                </span>
              </div>
            </Link>

            <a
               onClick={() => abrirMenu("servicios")}
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0  text-black hover:text-gray-600"
            >
              <div className="inline-flex items-center">
                <span className="mr-10 mx-48 pl-4 font-anton text-6xl">
                  SERVICIOS
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="rotate-180 ml-1.5 h-6 w-6 transform   text-black hover:text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 001.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="blog"
              className="flex  pr-5 mt-4 lg:inline-block lg:mt-0  text-black hover:text-gray-600"
            >
              <div className="">
                <span className="mr-10 pl-4 px-10 m-5 mx-48 text-6xl font-anton">
                  BLOG
                </span>
              </div>
            </a>
          </div>
          <MenuFlotante menuDown={menuDown} />
      
          <div className="flex-center p-9 justify-center">
            <a href="/">
              <img
                className=" h-36 px-56 w-auto animate-pulse"
                src="/Img/Isologoastro.svg"
                alt="Nombre de tu logo"
              />
            </a>
          </div>
        </ColorSeccion>
      )}
    </div>
  );
};

export default MenuVar;
