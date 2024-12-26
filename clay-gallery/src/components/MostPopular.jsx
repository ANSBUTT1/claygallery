import React from "react";
import { FaCartPlus } from "react-icons/fa";
import image1 from "../assets/hero2.jpg";
import image2 from "../assets/hero2.jpg"; // Add more images or update paths
import image3 from "../assets/hero2.jpg";
import image4 from "../assets/hero2.jpg";
import image5 from "../assets/hero2.jpg";
import image6 from "../assets/hero2.jpg";

const MostPopular = () => {
  // Array of products with different data
  const products = [
    {
      id: 1,
      name: "Ceramic Cup",
      oldPrice: "$237.00",
      newPrice: "$189.00",
      image: image1,
      rating: 4,
    },
    {
      id: 2,
      name: "Flower Vase",
      oldPrice: "$180.00",
      newPrice: "$150.00",
      image: image2,
      rating: 5,
    },
    {
      id: 3,
      name: "Succulent Plant",
      oldPrice: "$120.00",
      newPrice: "$100.00",
      image: image3,
      rating: 3,
    },
    {
      id: 4,
      name: "Glass Pot",
      oldPrice: "$210.00",
      newPrice: "$170.00",
      image: image4,
      rating: 4,
    },
    {
      id: 5,
      name: "Handmade Basket",
      oldPrice: "$160.00",
      newPrice: "$130.00",
      image: image5,
      rating: 5,
    },
    {
      id: 6,
      name: "Wooden Tray",
      oldPrice: "$140.00",
      newPrice: "$110.00",
      image: image6,
      rating: 4,
    },
  ];

  return (
    <>
    <main className="px-16 py-8">
      <div className="text-primary mb-12 ">
        <h1 className="uppercase text-xl mb-4">Most Popular</h1>
        <p className=" text-2xl md:text-3xl  lg:text-6xl text-center sm:text-start ">
          Discover the Latest Additions at Your Top Choice Flower Shop
        </p>
      </div>

      {/* Cards Grid */}
      <div className="text-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="  rounded-lg shadow-lg overflow-hidden group"
          >
            {/* Card Image with Sale Tag */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {/* Sale Tag */}
              <span className="absolute top-2 left-2 bg-white  text-xs px-2 py-1 rounded-full">
                Sale!
              </span>
              {/* Add to Cart Icon on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-600 text-white p-2 rounded-full">
                  <FaCartPlus />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-3">
              <h1 className="text-sm">ClayGallery</h1>
              {/* Reduced padding */}
              <h3 className="text-xl ">{product.name}</h3>
              {/* Rating Section */}
              <div className="flex items-center mt-2">
                <div className="flex space-x-1">
                  {/* Star Rating */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < product.rating ? "currentColor" : "none"}
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-yellow-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.634 3.131 1.078-6.305-4.583-4.485 6.358-.924L10 1l2.781 6.417 6.358.924-4.583 4.485 1.078 6.305L10 15z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating}.0)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-secondary/80 line-through">{product.oldPrice}</p>
                <p className="text-xl font-bold text-secondary">
                  {product.newPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </main>
    </>
  );
};

export default MostPopular;
