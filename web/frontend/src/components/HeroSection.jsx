import React from "react";
import HeroImg from '../img/hero-img.png';
const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0">
        <p className="text-mediumGrey">Abolutely hot collections🔥</p>
        <p className="md:text-7xl text-4xl font-extrabold mt-5">
          The Best Place to find and buy amazing&nbsp;
          <span className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-lightViolet to-lightPink">
             Frames
          </span>
        </p>
        <p className="mt-5 md:text-lg text-lightGrey">Transform moments into memories with our meticulously crafted frames, where each click finds its perfect place.</p>
      </div>
      <div className="md:h-screen flex items-center justify-center">
        <img src={HeroImg} className=" md:ml-auto h-[75%]" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
