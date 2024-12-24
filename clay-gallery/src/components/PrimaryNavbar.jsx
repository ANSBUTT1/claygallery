import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa"; // Import cart icon and hamburger menu
import { Link } from "react-router-dom";

const PrimaryNavbar = () => {
  // State to hold the number of items in the cart
  const [cartItems, setCartItems] = useState(0); // Start with 0 items in cart
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu visibility for small screens

  // Function to simulate adding an item to the cart
  const addToCart = () => {
    setCartItems(cartItems + 1); // Increment cart items count
  };

  // Toggle the sidebar visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="bg-primary text-xl text-white font-serif flex justify-between items-center p-8 sm:px-16">
        {/* Logo */}
        <div>
          <h2>ClayGallery</h2>
        </div>

        {/* Navigation Links for Desktop */}
        <nav>
          <ul className="md:flex hidden gap-8 items-start">
            <Link to="/">
              <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
                About
              </li>
            </Link>
            <Link to="/shop">
              <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
                Shop
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <span className="border p-1">
            <FaBars size={24} />
          </span>
        </div>

        {/* Cart Icon with Badge (Visible only in Navbar on large screens) */}
        <div className="relative hidden md:block">
          <FaShoppingCart size={24} onClick={addToCart} />
          {cartItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems}
            </span>
          )}
        </div>
      </div>

      {/* Sidebar Navigation (Appears on Mobile) */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 bg-primary sm:w-1/3 h-full z-50 lg:hidden p-8 transition-transform duration-300`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex justify-between gap-4  items-center mb-8">
          {/* Close Button */}
          <div
            onClick={toggleMenu}
            className="cursor-pointer text-white text-2xl"
          >
            &times; {/* Close icon */}
          </div>
          <h2 className="text-white text-xl">ClayGallery</h2>
        </div>
        <hr />
        {/* Sidebar Content (Navigation Links + Cart Icon) */}
        <nav>
          <ul className="p-8  flex flex-col text-white text-xl font-serif gap-8 items-start">
            <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
              Home
            </li>
            <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
              About
            </li>
            <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
              Shop
            </li>
            <li className="hover:cursor-pointer hover:scale-125 duration-300 transform transition-all">
              Contact
            </li>
            <li className="relative">
              <FaShoppingCart size={24} onClick={addToCart} />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
