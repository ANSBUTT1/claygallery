import React from 'react';
import background from "../assets/hero3.jpg";

const ExploreSection = () => {
  return (
    <div
      className="bg-fixed w-full flex justify-center items-center h-screen bg-cover bg-center my-8"
      style={{ backgroundImage: `url(${background})` }}
    >
     

      {/* Content */}
      <div className=" flex justify-center items-center text-center bg-white text-primary p-6 md:p-14 mx-4 sm:mx-0 rounded-lg">
        <div className="max-w-lg sm:max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Begin Your ClayGallery Journey Explore Our Stunning Collections</h2>
          <p className="text-base sm:text-lg mb-6">
            Starting from just $149.00
          </p>
          <div>
            <button className="uppercase border hover:bg-primary hover:text-white p-3 sm:p-4 px-6 sm:px-8  transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
