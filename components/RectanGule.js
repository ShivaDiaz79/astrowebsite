

const RectanGule = ({ parrafo, title }) => {
  return (
    <div>
      <section className="py-10 lg:py-20 flex rounded-lg">
        <div className="relative  flex flex-col  px-8 lg:px-48">
          <div className="  flex flex-col w-full shadow-button rounded-lg py-8 px-8  items-center mb-6">
            <h2 className="text-4xl text-white  sm:text-6xl font-loco font-bold mb-2">
              {title}
            </h2>
            <p className=" bg-black bg-opacity-25  text-white text-left sm:text-left tracking-normal text-2xl sm:text-4xl font-lato font-normal ">
            {parrafo}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RectanGule;