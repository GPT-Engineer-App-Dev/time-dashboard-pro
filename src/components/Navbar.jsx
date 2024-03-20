import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ onToggleDark }) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleToggleDark = () => {
    setIsDark(!isDark);
    onToggleDark(!isDark);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Time Dashboard Pro</div>
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
