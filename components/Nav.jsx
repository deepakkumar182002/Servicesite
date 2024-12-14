'use client'
import { useState } from "react";

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* Desktop view */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
        <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
        <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none hover:bg-gray-700 px-3 py-2 rounded-md"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-2`}>
        <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
        <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
        <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
