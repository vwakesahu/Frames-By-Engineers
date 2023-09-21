import React from "react";
import HeroSection from "../components/HeroSection";

import F1 from "../img/pictures/Frame 6.png";
import F2 from "../img/pictures/Frame 1.png";

import F3 from "../img/pictures/Frame 7.png";

import F4 from "../img/pictures/Frame 8.png";

import Frames from "../components/Frames";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex md:flex-row flex-col gap-8 justify-center">

        {/* Frames */}
        <Frames image={F1}/>
        <Frames image={F2}/>
        <Frames image={F3}/>
        <Frames image={F4}/>
      </div>
    </div>
  );
};

export default HomePage;
