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
      <div className="hidden md:flex md:flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <img src={Logo} className="w-7 mb-3 " alt="logo" />
            <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
              ames
            </p>
          </div>

          <ul className="flex gap-3 text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">Trendy</li>
            <li className="cursor-pointer">About Us</li>
          </ul>

          <button className="border border-black p-3 bg-clip-text bg- rounded-lg text-sm">
            Register Now
          </button>
        </div>
      </div>

      {/* For Phones */}
      <div className="md:hidden flex justify-between">
        <div className="flex items-end">
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
