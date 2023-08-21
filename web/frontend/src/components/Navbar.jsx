import React, { useState } from "react";
import Logo from "../img/logo.svg";
import MenuIcon from "../img/menu-icon.svg";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="pt-4">
      {/* For Desktops */}
      <div className="hidden md:flex md:flex-col bg-white z-50 border border-b-lightGrey border-b-1 border-t-0 border-x-0 px-8 pb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <img src={Logo} className="w-5 mb-3 " alt="logo" />
            <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
              ames
            </p>
          </div>

          <ul className="flex gap-10 text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">Trendy</li>
            <li className="cursor-pointer">About Us</li>
          </ul>

          <button className="text-darkBlu p-3 px-4 bg- rounded-lg text-sm font-bold hover:text-darkGreen">
            Register Now
          </button>
        </div>
      </div>

      {/* For Phones */}
      <div className="md:hidden flex justify-between px-8">
        <div className="flex items-end" >
          <img src={Logo} className="w-5 mb-3 " alt="logo" />
          <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
            ames
          </p>
        </div>
        <img
          src={MenuIcon}
          className="w-5 relative z-50"
          alt=""
          onClick={handleMenu}
        />
        {isMenu && (
          <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-3">
            <ul className="flex flex-col gap-2  ">
              <li>Home</li>
              <li>Categories</li>
              <li>Trendy</li>
              <li>About Us</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
