import React from "react";
import main from "../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "./Search";
const Header = () => {
  //   const user = false;
  const user = true;
  return (
    <header className="bg-slate-200 w-full h-[90px] items-center flex">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="w-3/12 flex">
          <Link to="/" className="w-[60px] h-[50px]">
            <img src={main} alt="" />
          </Link>
        </div>
        <div className="w-9/12 flex justify-between items-center">
          <ul className="flex justify-between gap-8">
            <li className="text-blue-500 hover:text-blue-800 text-[18px]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 text-[18px]">
              <Link>Agency</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 text-[18px]">
              <Link>News</Link>
            </li>
          </ul>
          <Search />
          <div>
            <div className="flex  justify-between items-center gap-6 px-1">
              {user ? (
                <>
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Link to="/profile">
                      <img
                        className="object-center h-full cursor-pointer"
                        src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <Link
                    to="/login"
                    className="relative w-[100px] inline-flex items-center justify-center px-3.5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-lg shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Logout
                    </span>
                    <span className="relative text-base font-semibold invisible">
                      Login
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="relative w-[120px] inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold bg-gray-200 text-gray-900 rounded-lg shadow-2xl shadow-black/60 group hover:text-white"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative text-base font-semibold">
                      Sign Up
                    </span>
                  </Link>
                  <Link
                    to="/login"
                    className="relative w-[100px] inline-flex items-center justify-center px-3.5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-lg shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Login
                    </span>
                    <span className="relative text-base font-semibold invisible">
                      Login
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
