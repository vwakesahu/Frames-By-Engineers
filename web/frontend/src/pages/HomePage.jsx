import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Category from "../components/Category";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
