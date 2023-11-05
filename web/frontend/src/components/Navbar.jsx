import React, { useState } from "react";
import Logo from "../img/logo.svg";
import MenuIcon from "../img/menu-icon.svg";
import { Link } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { CiLogout } from "react-icons/ci";

import { IoIosAdd } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    console.log(providerData);

    dispatch({ type: actionType.SET_USER, user: providerData[0] });

    localStorage.setItem("user", JSON.stringify(providerData[0]));
    setIsMenu(false);
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="pt-4">
      {/* For Desktops */}
      <div className="hidden md:flex md:flex-col bg-white z-50 border border-b-lightGrey border-b-1 border-t-0 border-x-0 px-8 pb-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <div className="flex items-end">
              <img src={Logo} className="w-5 mb-3 " alt="logo" />
              <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
                ames
              </p>
            </div>
          </Link>

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
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <div>
            <div className=" flex items-center gap-7">
              <div className="flex flex-col items-center justify-center">
                {cartItems && cartItems.length > 0 && (
                  <div className=" bg-red-500 rounded-full relative left-4 px-2 text-sm text-white">
                    {cartItems.length}
                  </div>
                )}
                <CiShoppingCart
                  className=" text-3xl cursor-pointer"
                  onClick={showCart}
                />
              </div>
              {user ? (
                <img
                  src={user.photoURL}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                  onClick={handleMenu}
                />
              ) : (
                <button
                  className="text-lg rounded-lg p-3 px-6 border hover:bg-black hover:text-white font-light border-1"
                  onClick={handleLogin}
                >
                  Register Now / Login
                </button>
              )}
            </div>

            {isMenu && (
              <div className=" absolute right-8 top-20 bg-white border rounded-lg">
                {user && user.email === "viveksahu1762@gmail.com" && (
                  <Link to="/create-item">
                    <div
                      className="p-4 rounded-t-lg flex justify-start items-center gap-3 hover:bg-gray-100 font-bold cursor-pointer"
                      onClick={handleMenu}
                    >
                      <IoIosAdd /> <p>Add Item</p>
                    </div>
                  </Link>
                )}

                <div
                  className="p-4 rounded-b-lg flex justify-start items-center gap-3 hover:bg-red-500 font-bold hover:text-white cursor-pointer"
                  onClick={logout}
                >
                  <CiLogout /> <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* For Phones */}
      <div className="md:hidden flex justify-between px-8">
        <Link to="/">
          <div className="flex items-end">
            <img src={Logo} className="w-5 mb-3 " alt="logo" />
            <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
              ames
            </p>
          </div>
        </Link>
        <div className=" flex gap-7">
          <CiShoppingCart className=" text-3xl" onClick={showCart} />
          {cartItems && cartItems.length > 0 && (
            <div className="flex flex-col items-center justify-center">
              <div className=" bg-red-500 rounded-full relative left-4 px-1 text-[0.7rem] text-white">
                {cartItems.length}
              </div>
            </div>
          )}
          {user ? (
            <img
              src={user.photoURL}
              onClick={handleMenu}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            />
          ) : (
            <img
              src={MenuIcon}
              className="w-5 relative z-50"
              alt=""
              onClick={handleMenu}
            />
          )}

          {isMenu && (
            <div className="w-50 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-8 px-4 py-3">
              <ul className="flex flex-col gap-2  ">
                {user && user.email === "viveksahu1762@gmail.com" && (
                  <li>
                    <Link to="/create-item" onClick={handleMenu}>
                      Create Item
                    </Link>
                  </li>
                )}
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
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
                {user ? (
                  <li
                    className=" text-sm bg-black w-28 text-white p-3 rounded-lg  flex items-center justify-center"
                    onClick={logout}
                  >
                    <p>Logout</p>
                  </li>
                ) : (
                  <li
                    className=" text-sm bg-black w-28 text-white p-3 rounded-lg  flex items-center justify-center"
                    onClick={handleLogin}
                  >
                    <p>Login</p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
