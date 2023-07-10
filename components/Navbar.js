import Link from "next/link";
import MenuVar from "./MenuVar";
import { useState } from "react";
import MenuFlot from "./MenuFlot";

const Navbar = () => {
  const [menuDown, setMenuDown] = useState("");
  const abrirMenu = (name) => {
    if (name === menuDown) {
      setMenuDown("");
      return;
    }

    setMenuDown(name);
  };

  return (
    <>
      <nav className="absolute flex justify-end sm:flex-justify-center items-center z-10 p-9 pt-12 top-0 left-0 right-0">
        <a href="/">
          <img
            className="h-1 flex justify-between items-start md:h-1 lg:h-16 lg:w-48  pl-14 animate-pulse "
            src="/Img/Isologoastro.svg"
            alt="logo astro"
          />
        </a>

        <div
          id="menu"
          className=" hidden lg:block w-full flex-grow lg:items-center lg:w-auto" >
          <div className="text-sm lg:flex-grow text-center  text-white">
            <a
              href="/"
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-anton text-6xl px-5 ">
                  ZONA CERO
                </span>
              </div>
            </a>

            <a
              // onClick={(event) => {
              //   event.preventDefault();
              //   abrirMenu("servicios");
              // }}
              href="/quienesSomoss"
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-white  hover:text-slate-500"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-anton text-6xl px-5 ">
                  QUIENES SOMOS
                </span>
              </div>
            </a>
            <a
              href="blog"
              className="flex items-center pr-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500"
            >
              <div className="inline-flex items-center">
                <span className="mr-1 font-anton text-6xl px-5">BLOG</span>
              </div>
            </a>
          </div>
          <MenuFlot menuDown={menuDown} />
        </div>

        <MenuVar />
      </nav>



    </>
  );
};

export default Navbar;
