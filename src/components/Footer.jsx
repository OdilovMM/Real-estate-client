import React from "react";
import main from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full shadow dark:bg-gray-700">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className="flex items-center w-[70px] h-[70px] mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={main} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Uy BOR
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <Link className="hover:underline mr-2"> Uy BOR</Link> All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
