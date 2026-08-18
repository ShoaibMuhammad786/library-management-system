import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, handleToggleSidebar, handleLogout }) => {
  return (
    <aside
      className={`w-full h-screen z-50 fixed inset-0 bg-transparent ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
    >
      <div className="w-[70%] h-full bg-[#232839] float-end px-4 py-7 shadow-xl">
        <button type="button" onClick={() => handleToggleSidebar()}>
          <IoClose size={28} color="#fff" />
        </button>

        <ul className="flex flex-col items-start gap-3 mt-8">
          <li>
            <Link
              to={"/"}
              onClick={() => handleToggleSidebar()}
              className="text-lg text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/search"}
              onClick={() => handleToggleSidebar()}
              className="text-lg text-white"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to={"/profile"}
              onClick={() => handleToggleSidebar()}
              className="text-lg text-white"
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleLogout()}
              className="text-lg text-red-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
