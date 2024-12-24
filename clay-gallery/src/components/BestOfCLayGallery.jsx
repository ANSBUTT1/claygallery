import React from "react";
// import image1 from "../assets/homeabout.jpg"; // Import the first image
import image2 from "../assets/homeabout.jpg"; // Import the second image
import image1 from "../assets/art2.jpg";
import image3 from "../assets/art3.jpg";

const BestOfClayGallery = () => {
  return (
    <div className="bg-gray relative text-secondary mt-16 py-8 flex flex-col lg:flex-row justify-between items-center gap-8 px-8 md:px-16">
      {/* Left Section: Text */}
      <div className="flex flex-col text-center lg:text-left gap-6 w-full">
        <h1 className="uppercase text-primary text-lg font-bold">
          The Best in ClayGallery
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Products Category
        </h2>
        <p className="text-lg md:text-xl">
          Explore our exquisite collection of ceramic treasures that elevate
          your spaces and celebrate the artistry of craftsmanship. From
          dinnerware to decor, each piece in our product range is a testament to
          quality, style, and the timeless beauty of ClayGallery.
        </p>
        <div
          className="bg-contain bg-center h-[300px] md:h-[400px] flex flex-col justify-end p-8 lg:p-16 w-full bg-no-repeat"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="bg-white p-4">
            <h1 className="text-lg md:text-xl font-semibold">
              Stylish ClayGallery Kitchenware
            </h1>
            <span className="text-base md:text-lg">
              Starting from just $99.00
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Images */}
      <div className="flex flex-col gap-8 w-full text-center lg:text-left">
        {/* Image 1 - Displaying Image 1 fully */}
        <div
          className="bg-contain bg-center h-[300px] md:h-[400px] flex flex-col justify-end p-8 lg:p-16 w-full bg-no-repeat"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="bg-white p-4">
            <h1 className="text-lg md:text-xl font-semibold">
              Stylish ClayGallery Kitchenware
            </h1>
            <span className="text-base md:text-lg">
              Starting from just $99.00
            </span>
          </div>
        </div>

        {/* Image 2 - Displaying Image 2 fully as background */}
        <div
          style={{ backgroundImage: `url(${image3})` }}
          className="bg-contain bg-center h-[300px] md:h-[400px] flex flex-col justify-end p-8 lg:p-16 w-full bg-no-repeat"
        >
          <div className="bg-white p-4">
            <h1 className="text-lg md:text-xl font-semibold">
              Stylish ClayGallery Kitchenware
            </h1>
            <span className="text-base md:text-lg">
              Starting from just $99.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOfClayGallery;
