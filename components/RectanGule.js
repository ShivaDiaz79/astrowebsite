

const RectanGule = ({ parrafo, title, }) => {
  return (
    <div>
      <section className=" py-10 lg:py-20 flex justify-center bg-light-gray rounded-lg">
        <div className="relative  flex flex-col container px-8 lg:px-52">
          <div className=" bg-black flex flex-col w-full shadow-button rounded-lg py-8 px-8 justify-center items-center mb-6">
            <h2 className="text-4xl text-white  lg:text-6xl font-bold mb-2">
              {title}
            </h2>
            <p className=" bg-blue-600  text-white text-2xl lg:text-2xl font-normal ">
            {parrafo}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RectanGule;