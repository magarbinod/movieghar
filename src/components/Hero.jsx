import React from "react";

const Hero = () => {
  return (
    <>
      <div className="cw-hero-wrapper">
        <div className="cw-hero flex items-center">
          <div className="container mx-auto">
            <div className="">
              <div>
                <p className="text-white">Duration: 60m</p>
                <p className="text-white mt-8">
                  <span class="fa fa-star checked text-warning"></span>7.5
                </p>
                <h1 className="text-7xl font-bold text-white mt-8">
                  Jurassic World
                </h1>
                <p className="text-white w-1/2 mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus odio exercitationem, ad natus molestias eos magni sed
                  voluptates quasi? Quod accusamus iure sequi ab. Possimus
                  molestias sequi totam fugiat ratione!
                </p>
                <div className="cw-hero-button mt-10">
                  <button className="btn bg-red-600 rounded-full border-0 mr-12 text-white px-10">
                    Watch
                  </button>
                  <button className="btn rounded-full btn-neutral-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
