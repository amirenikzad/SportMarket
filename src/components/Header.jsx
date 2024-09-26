import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../features/auth/authSlice";
import { store } from "../store";
import axios from "axios";
import { clearWishlist, updateWishlist } from "../features/wishlist/wishlistSlice";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(localStorage.getItem("id"));
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.auth);

  const loginState = useSelector((state) => state.auth.isLoggedIn);


  const fetchWishlist = async () => {
    if(loginState){
      try {
        const getResponse = await axios.get(`http://localhost:8080/user/${localStorage.getItem("id")}`);
        const userObj = getResponse.data;
  
        store.dispatch(updateWishlist({userObj}));
        
       
      } catch (error) {
        console.error(error);
      }
    }else{
      store.dispatch(clearWishlist());
    }

  };


  useEffect(() => {
    setIsLoggedIn(loginState);

      fetchWishlist();
    
  }, [loginState]);

  return (
    <>
      <div className="topbar border-b border-gray-800">
        <ul>
          <li>
            <FaRegEnvelope className="text-2xl max-sm:text-lg font-bold text-blue-600" />{" "}
            <span className="text-2xl max-sm:text-lg font-bold text-blue-600">
            sportmarket@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <div className="navbar bg-gray-200 max-w-7xl mx-auto">
        
        <div className="flex-none">
          <Link
            to="/search"
            className="btn btn-ghost btn-circle  text-red-600 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
          <button
            className="btn btn-ghost btn-circle text-xl text-red-600"
            onClick={() => dispatch(changeMode())}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link
            to="/wishlist"
            className="btn btn-ghost btn-circle text-rose-600"
          >
            <FaHeart className="text-xl" />
          </Link>
          <div className="dropdown dropdown-end text-red-600">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg font-bold text-blue-600">
                 عدد {amount}
                </span>
                <span className="text-info font-bold text-blue-600">
                  قیمت کالا: {total.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn btn-block text-base-content text-white bg-red-600 hover:bg-red-400"
                  >
                    سبد خرید
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {isLoggedIn && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/user-profile"
                    className="justify-between font-bold text-blue-600"
                  >
                    پروفایل
                  </Link>
                </li>
                <li>
                  <Link to="/order-history" className="font-bold text-blue-600">
                    تارخچه خرید
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="font-bold text-blue-600">
                    خروج از حساب
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-black font-bold text-blue-600"
            style={{ position:"absolute",textAlign:"right" , fontSize:"30px", paddingLeft: "820px" }}
          >
            <img src="/logo1.png" alt="sportmarket Logo" className="logo-img" style={{ width: "99%", height: "99%" }}/>
          </Link>
        </div>
      </div>

      <div className="navbar-bottom-menu border-y border-gray-800">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
  
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn drawer-button">
              <HiMiniBars3BottomLeft className="text-4xl" />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
                    
            <ul className="menu p-4 w-80 min-h-full bg-slate-300 text-base-content mt-4">
            <label htmlFor="my-drawer" className="btn drawer-button">
            <FaWindowClose className="text-3xl ml-auto " />
            </label>
              {/* Sidebar content here */}
              <li className="text-xl">
                <NavLink className="font-bold text-blue-600" to="/">
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="font-bold text-blue-600 " to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="font-bold text-blue-600" to="/about-us">
                  About us
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="font-bold text-blue-600" to="/contact">
                  Contact
                </NavLink>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="text-xl">
                    <NavLink className="font-bold text-blue-600" to="/login">
                      ورود
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink className="font-bold text-blue-600" to="/register">
                      ثبت‌نام
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="container text-2xl navlinks-container">
          <NavLink className="font-bold text-blue-600" to="/">
            صفحه‌اصلی
          </NavLink>
          <NavLink className="font-bold text-blue-600" to="/shop">
            فروشگاه
          </NavLink>
          <NavLink className="font-bold text-blue-600" to="/about-us">
            درباره‌ما
          </NavLink>
          <NavLink className="font-bold text-blue-600" to="/contact">
            ارتباط با‌ ما
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink className="font-bold text-blue-600" to="/login">
                ورود
              </NavLink>
              <NavLink className="font-bold text-blue-600" to="/register">
                ثبت‌نام
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
