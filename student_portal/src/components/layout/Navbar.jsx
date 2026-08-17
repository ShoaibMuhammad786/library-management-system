import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("studentToken");
    Cookies.remove("studentInfo");
    navigate("/login");
  };

  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <header className="w-full py-7 padding-x">
      <nav className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={"/logo.png"}
            width={176}
            height={32}
            className=""
            alt="logo"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-4 md:gap-7 lg:gap-10">
          <li>
            <Link to={"/"} className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/search"} className="text-lg">
              Search
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <span className="font-semibold text-sm">SM</span>
              </div>
              <span>Adrian</span>
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              <TbLogout2 className="text-red-600 text-xl" />
            </button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleToggleSidebar()}
          className="md:hidden"
        >
          <MdMenu size={28} />
        </button>
      </nav>

      {/* sidebar */}
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
                onClick={handleLogout}
                className="text-lg text-red-500"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
