import React from "react";
import { categories } from "../utils/data";
import MarvelImg from "../img/marvel.jpg";
import Anime from "../img/anime.jpg";
import Models from "../img/roll models.webp";
import Bollywood from "../img/bollywood.jpg";

import "../App.css";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div>
      {/* <div>
        {categories && categories.map((item)=>(
          <div key={item.id}>{item.name}</div>
        )) }
      </div> */}
      <p className=" text-[2rem] mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet font-semibold">
        Categories
      </p>

      <div className=" flex md:gap-4 flex-wrap md:flex-row flex-col relative items-center justify-center w-full">
        <Link to="/category/bollywood">
          <div className="image-container mt-10">
            <img
              src={Bollywood}
              className="grayscale cursor-pointer onfi "
              alt=""
            />{" "}
            <p className=" text-center mt-4 text-xl font-semibold">Bollywood</p>
          </div>
        </Link>

        <Link to="/category/marvel">
          <div className="image-container mt-10">
            <img
              src={MarvelImg}
              className="md:w-[350px] w-full  grayscale cursor-pointer "
              alt=""
            />
            <p className=" text-center mt-4 text-xl font-semibold">Marvel</p>
          </div>
        </Link>

        <Link to="/category/anime">
          <div className="image-container mt-10">
            <img src={Anime} className="grayscale cursor-pointer " alt="" />
            <p className=" text-center mt-4 text-xl font-semibold">Anime</p>
          </div>
        </Link>

        <Link to="/category/model">
          <div className="image-container mt-10">
            <img
              src={Models}
              className="grayscale w-[350px] cursor-pointer onfi "
              alt=""
            />{" "}
            <p className=" text-center mt-4 text-xl font-semibold">
              Role Models
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
