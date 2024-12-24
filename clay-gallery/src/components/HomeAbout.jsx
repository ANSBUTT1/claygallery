import React from "react";
import image1 from "../assets/hero1.jpg"; // Import your image
import image2 from "../assets/homeabout.jpg";

const HomeAbout = () => {
  return (
    <div className="text-primary px-8 sm:px-16 ">
      {/* Text section */}
      <div className="flex flex-col gap-6 justify-center text-start">
        <h1 className="text-xl">About Clay Gallery</h1>
        <h2 className="text-2xl text-center md:text-start lg:text-5xl lg:pr-32">
          The versatility of ceramics is what makes them truly remarkable, with
          their presence in various forms such as stoneware and porcelain.
        </h2>
      </div>

      {/* Image section */}
      <div className="flex flex-row gap-8 md:gap-16 mt-8">
        {/* Left Image Section */}
        <div
          className="w-full hidden md:flex  bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image fully covers the container
          }}
        ></div>

        {/* Right Section with Image */}
        <div className="w-full md:pt-12 flex flex-col gap-4 ">
          {/* Display second image */}
          <img
            className="w-full object-cover"
            src={image2}
            alt="Second Image"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">
              Welcome to Ceramic Shop, where passion meets craftsmanship to
              bring you a world of timeless beauty and creativity.
            </h1>
            <p className="text-secondary">
              Our journey is steeped in the art of ceramics, where each piece
              tells a unique story. Get to know the heart and soul behind our
              store.
            </p>

            <div>
                <button className="uppercase border hover:bg-primary hover:text-white p-4 px-8">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
