import TypedText from "./TypedText";
import Link from "next/link";

const MenuService = () => {
  const newLocal =
    "  hidden   sm:grid grid-cols-4 justify-center items-center  my-24 py-28";
  const newLocal_1 = (
    <div className=" items-center justify-center col-start-4 m-4 avatar transition-transform hover:scale-110 ">
      <Link
        className="bg-black w-48 h-48 col-start-4 gap-4 m-4 rounded-box hover:bg-slate-400 border border-white"
        href="/desarrolloApp"
      >
        <h1 className="text-5xl  text-white font-anton justify-center text-center  items-center my-10 pt-7">
          {" "}
          APPS
        </h1>
      </Link>
    </div>
  );

  return (
    <div className={newLocal}>
      <div className=" items-center justify-center col-start-4 m-4 avatar transition-transform hover:scale-110 ">
        <Link
          className="bg-black w-48 h-48 col-start-4 gap-4 m-4 rounded-box hover:bg-slate-400 border border-white"
          href="/servicioUx"
        >
          <h1 className="text-5xl  text-white font-anton justify-center text-center  items-center my-10">
            {" "}
            DISEÑO UX-UI{" "}
          </h1>
        </Link>
      </div>

      <div className=" items-center justify-center col-start-4 m-4 avatar transition-transform hover:scale-110 ">
        <Link
          className="bg-black w-48 h-48 col-start-4 gap-4 m-4 rounded-box hover:bg-slate-400 border border-white"
          href="/desarrolloWeb"
        >
          <h1 className="text-5xl  text-white font-anton justify-center text-center  items-center my-10 pt-8">
            {" "}
            WEBSITE
          </h1>
        </Link>
      </div>

      {newLocal_1}

      <div className=" items-center justify-center col-start-4 m-4 avatar transition-transform hover:scale-110 ">
        <Link
          className="bg-black w-48 h-48 col-start-4 gap-4 m-4 rounded-box hover:bg-slate-400 border border-white"
          href="/serviciosWebmaster"
        >
          <h1 className="text-5xl  text-white font-anton justify-center text-center  items-center my-10">
            {" "}
            WEB MASTER
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default MenuService;
