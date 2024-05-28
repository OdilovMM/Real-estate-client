import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { IoChatbubblesOutline, IoHeartOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiShopee } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { CiHome, CiShoppingTag } from "react-icons/ci";
import { MdAddToHomeScreen } from "react-icons/md";
import { HiMiniUser } from "react-icons/hi2";
import { MdUpdate } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const ProfileNavlink = () => {
  return (
    <nav className="w-3/12 ">
      <div className="py-3 w-full  bg-[#fff] rounded-md">
        <ul className="flex flex-col items-start justify-start">
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile"
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
              to="/profile/add-post"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <CiHome size={20} />
              </span>
              <span>Add New Post</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile/view-posts"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <MdAddToHomeScreen size={20} />
              </span>
              <span>View My posts</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile/saved-posts"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <CiShoppingTag size={20} />
              </span>
              <span>View Saved Posts</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile/my-information"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <HiMiniUser size={20} />
              </span>
              <span>My Information</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile/update-password"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <MdUpdate size={20} />
              </span>
              <span>Update Password</span>
            </NavLink>
          </li>
          <li className="hover:bg-slate-300 w-full px-4 sm:px-2 transition-all duration-200 ">
            <NavLink
              to="/profile/update-user"
              className="flex items-center justify-start gap-3 py-1 "
            >
              <span>
                <GrDocumentUpdate size={20} />
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
