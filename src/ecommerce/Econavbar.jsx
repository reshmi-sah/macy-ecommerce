import React, { useContext, useState } from 'react';
import logo from '../ecommerce/ecommerce_images/macylogo.png';
import cart from '../ecommerce/ecommerce_images/macycart.jpg';
import { Link } from 'react-router-dom';
import {ShopContext} from '../ecommerce/ShopContext'

const Econavbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext);

  return (
    <div className="w-full bg-white shadow-md z-50 fixed top-0 left-0">
      <div className="px-4 sm:px-10 py-2">

        {/* Desktop: One row | Mobile: Two rows */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          {/* Logo */}
          <div className="flex justify-between items-center">
            <a href="/">
              <img src={logo} alt="logo" className="w-16 sm:w-24" />
            </a>

            {/* Login + Cart (mobile shown next to logo, desktop at right) */}
            <div className="flex items-center gap-9 sm:hidden">
              <Link to="/login">
                <button className="text-[17px] sm:text-lg w-20 sm:w-20 h-8 sm:h-10 text-white  rounded-full  text-center
                        bg-gradient-to-r from-sky-400 to-pink-600 hover:from-sky-500 hover:to-pink-500
                ">
                  Login
                </button>
              </Link>
              <div className="flex relative">
                <Link to="/cart">
                  <img src={cart} alt="" className="w-6 h-6" />
                </Link>
                <span className="w-3 h-3 p-[6px] rounded-full text-white text-xs flex items-center justify-center absolute -top-1 -right-2
                             bg-gradient-to-r from-sky-400 to-pink-600
                ">
                  {getTotalCartItem()}
                </span>
              </div>
            </div>
          </div>

          {/* Menu (inline on desktop, below on mobile) */}
          <ul className="flex flex-row  justify-center text-center gap-10 sm:gap-10 text-xl sm:text-[22px] cursor-pointer">
            <li onClick={() => setMenu("shop")}>
              <Link to="/">Shop</Link>
              {menu === "shop" && <hr className="border-0  w-full h-[6px] rounded-full  bg-gradient-to-r from-indigo-400 to-pink-600" />}
            </li>
            <li onClick={() => setMenu("mens")}>
              <Link to="/mens">Men</Link>
              {menu === "mens" && <hr className="border-0 w-full h-[6px] rounded-full  bg-gradient-to-r from-indigo-400 to-pink-600" />}
            </li>
            <li onClick={() => setMenu("womens")}>
              <Link to="/womens">Women</Link>
              {menu === "womens" && <hr className="border-0 w-full h-[6px] rounded-full  bg-gradient-to-r from-indigo-400 to-pink-600" />}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link to="/kids">Kids</Link>
              {menu === "kids" && <hr className="border-0 w-full h-[6px] rounded-full  bg-gradient-to-r from-indigo-400 to-pink-600" />}
            </li>
          </ul>

          {/* Login + Cart (desktop) */}
          <div className="hidden sm:flex items-center gap-6">
            <Link to="/login">
              <button className="text-[16px] sm:text-xl w-20 sm:w-[90px] h-10 sm:h-10 text-white rounded-full  cursor-pointer
                     bg-gradient-to-r from-sky-400 to-pink-600 hover:from-sky-500 hover:to-pink-500
              ">
                Login
              </button>
            </Link>
            <div className="flex relative">
              <Link to="/cart">
                <img src={cart} alt="" className="w-8 h-9" />
              </Link>
              <span className="w-5 h-5 rounded-full text-white text-[15px] flex items-center justify-center absolute -top-2 -right-2
                   bg-gradient-to-r from-sky-400 to-pink-600
              ">
                {getTotalCartItem()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Econavbar;
