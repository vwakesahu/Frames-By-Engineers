import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8">
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
