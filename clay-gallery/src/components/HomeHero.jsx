import React from "react";
import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero2.jpg";

const HomeHero = () => {
  return (
    <div className="bg-primary pt-8 lg:pt-24 gap-8  mb-24 lg:h-[125vh] px-16 flex flex-col lg:flex-row justify-between text-white relative">
      <div className="flex flex-col text-center lg:text-start  justify-center lg:item-start lg:justify-start gap-8 ">
        <h1 className="uppercase  tracking-wider">welcome to Clay Gallery</h1>
        <h2 className="text-3xl md:text-[4vw] font-semibold gap-2 md:gap-8 flex flex-col">
          <span>Elevate Your Space</span> 
          <span>with ClayGallery</span>
          <span>Elegance.</span>
        </h2>
        <h1 className="text-xl">Starting from just $149.00</h1>
        <div>
          <button className="border uppercase hover:bg-white hover:text-primary p-4 px-8 ">
            shop now
          </button>
        </div>
      </div>
      <div className=" mb-8 lg:relative  bg-contain p-16  lg:w-[500px] lg:h-[40rem] xl:h-[43rem] bg-no-repeat lg:bg-cover flex justify-center items-center " style={{
        backgroundImage: `url(${image2})`, 
        backgroundPosition: 'center',
      }}>
        <div className=" xl:absolute lg:top-16 lg:-left-20   ">
        <img src={image1} alt="" width={300} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
