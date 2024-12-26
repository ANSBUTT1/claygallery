import React from "react";
import image from "../assets/hero3.jpg";
import image2 from "../assets/hero1.jpg";

const OurStory = () => {
  return (
    <div className="text-primary px-8 sm:px-16 py-8 sm:py-16 relative mt-[550px]">
      {/* Background Div */}
      <div className="absolute inset-0 h-[220vh]  bg-gray z-10 hidden md:block "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20 -mt-[500px]">
        {/* Left Section (Text) */}
        <div>
          <h1 className="uppercase mb-4 sm:mb-8">Our Story</h1>
          <p className="text-3xl sm:text-4xl md:text-6xl leading-relaxed z-20">
            Explore ClayGallery and Our Clay Artistry
          </p>
        </div>

        {/* Right Section (Description) */}
        <div className="mt-4 sm:mt-0 z-20">
          <p className="text-base sm:text-lg lg:text-xl text-secondary leading-relaxed">
            Step into the world of CeramicShop, where we’re dedicated to
            crafting elegant, functional ceramics that elevate your everyday
            life. Our journey is a testament to the artistry and craftsmanship
            that infuse each unique piece. Discover our story, meet the talented
            artisans who bring these creations to life, and experience the
            exceptional beauty that our ceramics add to your surroundings.
            Explore the heart and soul of our store, where every piece is a work
            of art, designed to make your moments more beautiful and special.​
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 sm:mt-12 relative z-10">
        {/* Image */}
        <img src={image} alt="Ceramic Artwork" className="w-full h-auto " />
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mt-8 sm:mt-24 relative z-50">
        <div>
          <img className="w-full h-[64vh] md:h-[100vh]  xl:h-[110vh]" src={image2} alt="" />
        </div>
        <div>
          <h2 className="uppercase mb-4"> Our Journey </h2>
          <h2 className="text-3xl mb-8">Our ClayGallery Odyssey Crafting Beauty and Quality.</h2>
          <p className="text-secondary mb-8">
            Our company story is a testament to the enduring love for
            craftsmanship, where we combine our passion for ceramics with an
            unwavering commitment to quality and timeless beauty. Explore the
            journey that has led us to become a trusted source for exquisite
            ceramic products.We're proud to share our story, which mirrors the
            growth of a dream into a thriving destination for exceptional
            creations, reflecting artistry and innovation.
          </p>
          <p className="text-secondary">
            Our dedication to crafting elegant, functional ceramic pieces that
            enhance everyday living is at the heart of our narrative, and it’s a
            story we’re excited to share with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
