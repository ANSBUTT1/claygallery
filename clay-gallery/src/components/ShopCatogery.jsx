import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import image1 from "../assets/hero2.jpg";
import image2 from "../assets/hero2.jpg";
import image3 from "../assets/hero2.jpg";
import image4 from "../assets/hero2.jpg";
import image5 from "../assets/hero2.jpg";
import image6 from "../assets/hero2.jpg";

const ShopCatogery = () => {
  const products = [
    {
      id: 1,
      name: "Ceramic Cup",
      oldPrice: "$237.00",
      newPrice: "$189.00",
      image: image1,
      rating: 4,
      category: "Cup",
    },
    {
      id: 2,
      name: "Flower Vase",
      oldPrice: "$180.00",
      newPrice: "$150.00",
      image: image2,
      rating: 5,
      category: "Vase",
    },
    {
      id: 3,
      name: "Succulent Plant",
      oldPrice: "$120.00",
      newPrice: "$100.00",
      image: image3,
      rating: 3,
      category: "Plant",
    },
    {
      id: 4,
      name: "Glass Pot",
      oldPrice: "$210.00",
      newPrice: "$170.00",
      image: image4,
      rating: 4,
      category: "Pot",
    },
    {
      id: 5,
      name: "Handmade Basket",
      oldPrice: "$160.00",
      newPrice: "$130.00",
      image: image5,
      rating: 5,
      category: "Basket",
    },
    {
      id: 6,
      name: "Wooden Tray",
      oldPrice: "$140.00",
      newPrice: "$110.00",
      image: image6,
      rating: 4,
      category: "Tray",
    },
    // Additional categories
    {
      id: 7,
      name: "Ceramic Plate",
      oldPrice: "$80.00",
      newPrice: "$70.00",
      image: image1,
      rating: 4,
      category: "Plate",
    },
    {
      id: 8,
      name: "Decorative Bowl",
      oldPrice: "$150.00",
      newPrice: "$120.00",
      image: image2,
      rating: 5,
      category: "Bowl",
    },
    {
      id: 9,
      name: "Mug Set",
      oldPrice: "$200.00",
      newPrice: "$180.00",
      image: image3,
      rating: 4,
      category: "Mug",
    },
    {
      id: 10,
      name: "Storage Jar",
      oldPrice: "$110.00",
      newPrice: "$90.00",
      image: image4,
      rating: 3,
      category: "Jar",
    },
  ];

  // State for sorting and filtering
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sorting Function
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Filter Products by Category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Sort and filter products based on the selected options
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return parseFloat(a.newPrice.substring(1)) - parseFloat(b.newPrice.substring(1));
      } else if (sortOrder === "highToLow") {
        return parseFloat(b.newPrice.substring(1)) - parseFloat(a.newPrice.substring(1));
      } else if (sortOrder === "rating") {
        return b.rating - a.rating;
      }
      return 0; // Default sorting (no change)
    });

  return (
    <>
      <main className="px-16 py-16">
        <div className="text-primary mb-12">
          <h1 className="text-3xl font-semibold mb-8">Shop</h1>
          <hr className="text-gray" />
        </div>

        <div className="text-secondary/90 flex flex-col sm:flex-row gap-4 justify-between mb-8">
          <div>
            <label htmlFor="category" className="mr-4">Category: </label>
            <select
              id="category"
              className="border p-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="All">All</option>
              <option value="Cup">Cup</option>
              <option value="Vase">Vase</option>
              <option value="Plant">Plant</option>
              <option value="Pot">Pot</option>
              <option value="Basket">Basket</option>
              <option value="Tray">Tray</option>
              <option value="Plate">Plate</option>
              <option value="Bowl">Bowl</option>
              <option value="Mug">Mug</option>
              <option value="Jar">Jar</option>
            </select>
          </div>

          <div>
            <label htmlFor="sorting" className="mr-4">Sort By: </label>
            <select
              id="sorting"
              className="border p-2"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="default">Default Sorting</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="text-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="rounded-lg shadow-lg overflow-hidden group">
              {/* Card Image with Sale Tag */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {/* Sale Tag */}
                <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full">
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
                <h3 className="text-xl">{product.name}</h3>

                {/* Rating Section */}
                <div className="flex items-center mt-2">
                  <div className="flex space-x-1">
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

                {/* Price Section */}
                <div className="flex items-center space-x-2">
                  <p className="text-secondary/80 line-through">{product.oldPrice}</p>
                  <p className="text-xl font-bold text-secondary">{product.newPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ShopCatogery;
