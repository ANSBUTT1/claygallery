import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa"; // Import cart icon and hamburger menu
import { Link } from "react-router-dom";
import image1 from "../assets/hero3.jpg"

const PrimaryNavbar = () => {
  // Static data for the cart items (including images)
  const staticCartItems = [
    { id: 1, name: "Ceramic Vase", price: 25.99, quantity: 2, image: image1 },
    { id: 2, name: "Clay Bowl", price: 19.99, quantity: 1, image: image1 },
    { id: 3, name: "Handmade Plate", price: 15.49, quantity: 3, image: image1},
    // Add more items to test scrolling
    // { id: 4, name: "Handmade Mug", price: 12.99, quantity: 2, image: "/images/handmade_mug.jpg" },
    // { id: 5, name: "Decorative Jar", price: 18.49, quantity: 1, image: "/images/decorative_jar.jpg" },
    // { id: 6, name: "Pottery Sculpture", price: 34.99, quantity: 1, image: "/images/pottery_sculpture.jpg" },
  ];

  const [cartItems, setCartItems] = useState(staticCartItems); // Use static data in cart state
  const [menuOpen, setMenuOpen] = useState(false); // State for the menu visibility (for mobile)
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // State for the cart dropdown visibility

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Increase quantity of a specific item
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity of a specific item
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Toggle the sidebar visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the cart dropdown visibility
  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="bg-primary text-xl text-white font-serif flex justify-between items-center p-8 sm:px-16">
        {/* Logo */}
        <div>
          <h2>ClayGallery</h2>
        </div>

        {/* Navigation Links for Desktop */}
        <nav>
          <ul className="md:flex hidden gap-8 items-start">
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

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <span className="border p-1">
            <FaBars size={24} />
          </span>
        </div>

        {/* Cart Icon with Badge (Visible only in Navbar on large screens) */}
        <div className="relative hidden md:block">
          <FaShoppingCart
            size={24}
            onClick={toggleCartDropdown}
            className="hover:cursor-pointer"
          />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}

          {/* Cart Dropdown */}
          {cartDropdownOpen && (
            <div className="cart-dropdown absolute top-10 right-0  bg-white text-primary p-4 shadow-lg rounded-lg z-50 max-w-md w-[500px]  max-h-[450px] overflow-hidden">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-primary">Shopping Cart</h3>
                <button onClick={toggleCartDropdown} className="text-xl">×</button>
              </div>
              
              {/* Scrollable List of Items */}
              <div className="cart-items overflow-y-auto max-h-[250px] mt-4">
                {cartItems.length === 0 ? (
                  <p className="text-secondary">Your cart is empty.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      {/* Product Image */}
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                      
                      {/* Product Info */}
                      <div className="flex-grow">
                        <div>{item.name}</div>
                        <div className="text-sm text-secondary/40">${item.price.toFixed(2)} x {item.quantity}</div>
                        <hr className="text-gray mt-2" />
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-200 p-1 rounded text-sm"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-200 p-1 rounded text-sm"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 ml-2"
                      >
                        &times;
                      </button>
                    </div>
                  ))
                )}
              </div>
              <hr className="text-gray mt-2" />
              {/* Subtotal and Checkout */}
              <div className="mt-4 flex justify-between">
                <span >Subtotal:</span>
                <span >${calculateSubtotal().toFixed(2)}</span>
              </div>
              <hr className="text-gray mt-2" />
              <div className="mt-4 flex justify-between gap-4">
                <button className="uppercase border hover:bg-primary hover:text-white p-3 sm:p-4 px-4 sm:px-6  transition-all w-1/2">
                  View Cart
                </button>
                <button className="uppercase border hover:bg-primary hover:text-white p-3 sm:p-4 px-4 sm:px-6   transition-all w-1/2">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Navigation (Appears on Mobile) */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 bg-primary sm:w-1/3 h-full z-50 lg:hidden p-8 transition-transform duration-300`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex justify-between gap-4 items-center mb-8">
          {/* Close Button */}
          <div
            onClick={toggleMenu}
            className="cursor-pointer text-white text-2xl"
          >
            &times; {/* Close icon */}
          </div>
          <h2 className="text-white text-xl">ClayGallery</h2>
        </div>
        <hr className="text-white" />
        {/* Sidebar Content (Navigation Links + Cart Icon) */}
        <nav>
          <ul className="p-8 flex flex-col text-white text-xl font-serif gap-8 items-start">
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
            <li className="relative">
              <FaShoppingCart
                size={24}
                // onClick={toggleCartDropdown}
                className="hover:cursor-pointer"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}

              {/* Cart Dropdown for Mobile */}
              {cartDropdownOpen && (
                <div className="cart-dropdown absolute top-0 right-0 bg-white text-black p-4 shadow-lg rounded-lg z-50 max-w-xs w-auto max-h-[400px] overflow-hidden">
                  {/* Cart Items */}
                  <div className="cart-items overflow-y-auto max-h-[250px] mt-4">
                    {cartItems.length === 0 ? (
                      <p className="text-secondary">Your cart is empty.</p>
                    ) : (
                      cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center mb-4">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                          <div className="flex-grow">
                            <div>{item.name}</div>
                            <div className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</div>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="bg-gray-200 p-1 rounded text-sm"
                            >
                              -
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="bg-gray-200 p-1 rounded text-sm"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 ml-2"
                          >
                            &times;
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Subtotal and Checkout */}
                  <div className="mt-4 flex justify-between">
                    <span className="font-bold">Subtotal:</span>
                    <span className="font-bold">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex justify-between gap-4">
                    <button className="bg-primary text-white p-2 rounded-lg w-1/2">
                      View Cart
                    </button>
                    <button className="bg-green-500 text-white p-2 rounded-lg w-1/2">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
