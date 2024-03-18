import React from "react";
import { Link } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md dark:bg-blue-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold flex justify-between items-center w-full">
          Time Dashboard Pro
          <button onClick={toggleDarkMode} className="text-xl p-2">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div>
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
