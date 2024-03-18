import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
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
