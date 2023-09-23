import React from "react";
import HeroImg from "../img/hero-img.png";
const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
        <p className="text-mediumGrey">Abolutely hot collections🔥</p>
        <p className="md:text-7xl text-4xl font-extrabold mt-5">
          The Best Place to find and buy amazing&nbsp;
          <span className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-lightViolet to-lightPink">
            Frames
          </span>
        </p>
        <p className="mt-5 md:text-lg text-mediumGrey md:w-3/4">
          Transform moments into memories with our meticulously crafted frames,
          where each click finds its perfect place.
        </p>

        {/* Desktop */}
        <button className="mr-auto mt-8 text-2xl  rounded-lg p-4 px-6 hover:bg-gradient-to-r hover:from-lightPink hover:to-lightViolet hover:text-white font-light border w-1/2 md:flex md:justify-center md:items-center hidden">
          Buy Now
        </button>
      </div>
      <div className="md:h-screen flex items-center justify-center">
        <img
          src={HeroImg}
          className=" md:ml-auto h-[75%] object-contain"
          alt=""
        />
      </div>

      {/* Mobile */}
      <button className="mr-auto mt-8 text-lg  rounded-lg p-3 px-6 w-full  bg-gradient-to-r from-lightPink to-lightViolet font-medium text-white md:hidden mb-24">
        Buy Now
      </button>
    </section>
  );
};

export default HeroSection;
