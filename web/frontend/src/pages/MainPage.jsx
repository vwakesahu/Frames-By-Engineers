import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Trendy from "./Trendy";
import AboutsUs from "./AboutUs";
import CreateItem from "./CreateItem";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/trendy" element={<Trendy />} />
          <Route path="/about-us" element={<AboutsUs />} />
          <Route path="/create-item" element={<CreateItem />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
