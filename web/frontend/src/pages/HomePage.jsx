import React from "react";
import HeroSection from "../components/HeroSection";
import Frames from "../components/Frames.jsx";
import Pic1 from "../img/pictures/pic-1.jpg";
import Pic2 from "../img/pictures/pic-2.jpg";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="md:flex gap-8">
        <Frames
          innerHeight="[95%]"
          innerWidth="[95%]"
          outterHeight="[65%]"
          outterHeightMobile="[95%]"
          outterWidth="[20%]"
          outterWidthMobile="full"
          image={Pic1}
        />
        <Frames
          innerHeight="[95%]"
          innerWidth="[95%]"
          outterHeight="[65%]"
          outterHeightMobile="[95%]"
          outterWidth="[20%]"
          outterWidthMobile="full"
          image={Pic2}
        />
        <Frames
          innerHeight="[95%]"
          innerWidth="[95%]"
          outterHeight="[65%]"
          outterHeightMobile="[95%]"
          outterWidth="[20%]"
          outterWidthMobile="full"
          image={Pic1}
        />
        <Frames
          innerHeight="[95%]"
          innerWidth="[95%]"
          outterHeight="[65%]"
          outterHeightMobile="[95%]"
          outterWidth="[20%]"
          outterWidthMobile="full"
          image={Pic1}
        />
      </div>
    </div>
  );
};

export default HomePage;
