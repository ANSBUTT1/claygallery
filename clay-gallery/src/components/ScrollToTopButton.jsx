// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button after scrolling 300px
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 p-2  text-center  right-8 bg-primary text-white  hover:bg-primary/90  transition-all duration-300 ease-in-out z-50"
      >
        ^
      </button>
    )
  );
};

export default ScrollToTopButton;
