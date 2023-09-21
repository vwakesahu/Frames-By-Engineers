import React, { useState } from "react";
import Logo from "../img/logo.svg";
import MenuIcon from "../img/menu-icon.svg";
import { Link } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    console.log(providerData);
  };

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/trendy">Trendy</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>

          {/* {providerData ? (
            <img />
          ) : (
            <button
              className="text-lg border-black rounded-lg p-3 px-6 hover:bg-black hover:text-white font-medium border-2"
              onClick={handleLogin}
            >
              Register Now / Login
            </button>
          )} */}
        </div>
      </div>

      {/* For Phones */}
      <div className="md:hidden flex justify-between px-8">
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
          <div className="w-50 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-3">
            <ul className="flex flex-col gap-2  ">
              <li onClick={handleMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/category">Categories</Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/trendy">Trendy</Link>
              </li>
              <li onClick={handleMenu}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                className=" text-sm bg-black text-white p-3 rounded-lg"
                onClick={handleMenu}
              >
                <p>Register Now / Login</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
