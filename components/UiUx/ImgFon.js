import React from "react";

const ImgFon = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/di1v23yy0/image/upload/v1685981727/Logo-ASTRO-compl.-negro_rb40vj.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sm:hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-sm md:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgFon;
