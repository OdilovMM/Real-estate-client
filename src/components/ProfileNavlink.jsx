import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { IoChatbubblesOutline, IoHeartOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiShopee } from "react-icons/si";
import { NavLink } from "react-router-dom";

const ProfileNavlink = () => {
  return (
    <nav className="w-3/12 ">
      <div className="py-3 w-full  bg-[#fff] rounded-md">
        <ul className="flex flex-col items-start justify-start">
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/dashboard"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/add-post"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>Add New Post</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/view-posts"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>View My posts</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/saved-posts"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>View Saved Posts</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/my-information"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>My Information</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/update-password"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>Update Password</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/update-user"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <RxDashboard size={20} />
              </span>
              <span>Update User Info</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfileNavlink;
