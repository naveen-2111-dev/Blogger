import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBlog, FaFileAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-10 lg:mb-0 lg:gap-6">
      <div className="lg:flex-1 flex flex-col max-w-full py-2 lg:py-4 pl-4 pr-2 bg-black text-white sm:flex-1 sm:py-4">
        <nav className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-bold">
            <span className="text-blue-500">B</span>log
          </h1>
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <FaBlog className="mr-1" /> Blogs
            </Link>
            <Link to="/paper" className="flex items-center">
              <FaFileAlt className="mr-1" /> Papers
            </Link>
            <button
              className="flex items-center text-sm font-medium text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={() => {
                navigate("/admin");
              }}
            >
              <RiAdminFill className="mr-1" /> Admin
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
