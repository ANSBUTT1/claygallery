import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

const ColorChanger = () => {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // State to track if component has mounted

  // Predefined color options
  const colorOptions = [
    "#FF6347", "#4CAF50", "#FFD700", "#00BFFF", "#8A2BE2", "#FF1493", "#FF4500", "#2E8B57"
  ];

  const handleColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  // Calculate the angle for each color in the circle
  const angleStep = (2 * Math.PI) / colorOptions.length;

  useEffect(() => {
    // Mark that the component has mounted after a delay
    setHasMounted(true);
  }, []);

  return (
    <div
      className="fixed top-20 right-0 flex flex-col items-center justify-center p-4 z-50"
      onMouseEnter={() => setIsHovered(true)}  // Show on hover
      onMouseLeave={() => setIsHovered(false)} // Hide on mouse leave
    >
      {/* Show text by default when not hovering, with slide-in and pulse animations */}
      {!isHovered && hasMounted && (
        <div className="text-center text-[8px] bg-white rounded-full p-2  text-gray-700 font-semibold transform transition-all duration-700 ease-out slide-in-from-left pulse-animation">
          Customize <br /> your <br /> color
        </div>
      )}

      {/* Display color options in a circle when hovered */}
      {isHovered && (
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Display color options in a circle (pie chart) */}
          <div className="absolute w-full h-full">
            {colorOptions.map((color, index) => {
              const angle = angleStep * index;
              const xPos = 50 + 30 * Math.cos(angle); // Reduced radius to 30
              const yPos = 50 + 30 * Math.sin(angle); // Reduced radius to 30

              return (
                <div
                  key={index}
                  onClick={() => setPrimaryColor(color)}
                  style={{
                    backgroundColor: color,
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute w-6 h-6 rounded-full cursor-pointer transition-all transform hover:scale-110 hover:ring-2 hover:ring-opacity-50"
                  title="Customize your color"
                />
              );
            })}
          </div>

          {/* Color Picker in the center of the circle */}
          <input
            id="color-picker"
            type="color"
            value={primaryColor}
            onChange={handleColorChange}
            className="absolute w-12 h-12 rounded-full shadow-lg cursor-pointer border-none hover:ring-2 hover:ring-opacity-50 transition-all"
            title="Pick your custom color"
          />
        </div>
      )}
    </div>
  );
};

export default ColorChanger;
