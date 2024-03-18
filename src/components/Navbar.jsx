import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Time Dashboard Pro
        </Link>
        <div>
          <Link to="/" className="inline-block text-sm px-4 py-2 leading-none rounded hover:text-blue-200 mt-4 lg:mt-0">
            Home
          </Link>
          {/* Add additional navigation links here as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;