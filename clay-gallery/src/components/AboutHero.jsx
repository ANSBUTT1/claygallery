import React from "react";
import image from "../assets/hero2.jpg";

const AboutHero = () => {
  return (
    <div className="bg-primary overflow-visible h-auto lg:h-[80vh] flex flex-col lg:flex-row justify-center items-center text-white px-8 md:px-16 mb-16">
      {/* Left Section */}
      <div className="text-center lg:text-left mt-8 lg:mt-0 lg:w-1/2 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
          About Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full">
          Welcome to the world of CeramicShop, where artistry and innovation
          come together to craft stunning ceramic pieces. Discover our story, the passion that drives us, and our commitment to delivering timeless beauty and quality.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-8 lg:mt-0  px-4">
        {/* Image visible on larger screens, hidden on mobile */}
        <img
          src={image}
          alt="Ceramic Shop"
          className="w-[500px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[84vh]  mt-16 lg:mt-20 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default AboutHero;
