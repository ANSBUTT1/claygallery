import React from "react";
import image from "../assets/art2.jpg";

const StartJourney = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* Image Section - hidden on mobile */}
      <div className="hidden lg:block">
        <img src={image} alt="ClayGallery Art" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="bg-primary text-white p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-8">
          Uncover the World of ClayGallery Artistry Start Your Journey Here!
        </h2>
        <div className="mt-8">
          <button className="uppercase border hover:bg-white hover:text-primary p-3 sm:p-4 px-6 sm:px-8 transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
