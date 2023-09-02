import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
