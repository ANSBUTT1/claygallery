import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social media icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" text-primary bg-gray duration-300 transform transition-all flex flex-col md:flex-row  md:justify-between items-center md:items-baseline  text-xl py-14 sm:px-16 border-b border-secondary/30">
        {/* Footer Content */}
        <div className="mb-8">
          <h1 className="font-semibold">ClayGallery</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col md:flex-row gap-8 mb-8">
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

        {/* Social Icons */}
        <div className="flex gap-6 justify-center items-baseline text-secondary">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-gray  sm:flex-row gap-4 items-center sm:items-baseline sm:justify-between px-16 text-secondary py-8">
        <h2>Copyright © 2024</h2>
        <h2>All rights reserved</h2>
      </div>
    </>
  );
};

export default Footer;
