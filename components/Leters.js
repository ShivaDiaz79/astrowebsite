import React from 'react';

const Leters =({ text, text2, title, }) => {
  return (
    <section className=" bg-white flex flex-col gap-y-5 pt-8 pb-5 md:flex-row md:gap-x-24 md:py-20">
      <div className="flex-1">
        <h2 className="text-3xl font-anton  text-[#000] md:text-[50px] md:leading-[1.25] pl-4">
        {title}
        </h2>
        <div className="mt-5 h-[3px] w-14 bg-[#C61D] md:mt-6 md:w-24" />
      </div>
      <article className="flex-1">
  <p className="text-justify  text-xl font-schibsted md:text-3xl space-y-4 m-3 sm:m-8">
    {text2}
    <br />
    {text}
    <br />
  </p>
</article>


    </section>
  );
};

export default Leters;
