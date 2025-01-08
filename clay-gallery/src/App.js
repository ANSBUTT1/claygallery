import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import ColorChanger from "./components/ColorChanger";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import PrimaryNavbar from "../src/components/PrimaryNavbar";
import Footer from "../src/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const { primaryColor , secondaryColor } = useTheme();
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);
  useEffect(() => {
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
  }, [secondaryColor]);

  return (
    <Router>
      <PrimaryNavbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element prop */}
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      <ColorChanger />
      <ScrollToTopButton />
    </Router>
  );
};
const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
