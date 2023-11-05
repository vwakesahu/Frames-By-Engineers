import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Trendy from "./Trendy";
import ContactUs from "./ContactUs";
import CreateItem from "./CreateItem";
import Bollywood from "../components/Bollywood";
import Marvel from "../components/Marvel";
import Anime from "../components/Anime";
import Model from "../components/Model";
import Footer from "../components/Footer";

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
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route exact path="/category/bollywood" element={<Bollywood />} />
          <Route exact path="/category/marvel" element={<Marvel />} />
          <Route exact path="/category/anime" element={<Anime />} />
          <Route exact path="/category/model" element={<Model />} />

        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
