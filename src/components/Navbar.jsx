import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Time Dashboard Pro</div>
        <div>
          <a href="#" className="mr-4 hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
