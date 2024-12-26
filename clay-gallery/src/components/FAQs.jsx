import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const [openSection, setOpenSection] = useState(null); // Track the open section

  const toggleSection = (section) => {
    // If the clicked section is already open, close it. Otherwise, open it and close others.
    if (openSection === section) {
      setOpenSection(null); // Close it if it's already open
    } else {
      setOpenSection(section); // Open the new section and close the others
    }
  };

  return (
    <div className="bg-gray text-primary grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-16 py-24 gap-8">
      <div className="p-8">
        <h2 className="text-5xl mb-6">FAQs</h2>
        <p className="text-secondary text-xl">
          Find answers to common questions about our ceramic products, ordering,
          shipping, care, and more. If you need further information, feel free
          to contact our support team.
        </p>
      </div>
      <div className="bg-white border border-secondary/30">
        {/* Ordering and Shipping */}
        <div className="border border-secondary/30 px-4 py-4">
          <button
            onClick={() => toggleSection("orderShipping")}
            className="text-lg font-semibold text-primary w-full text-left flex justify-between items-center"
          >
            Ordering and Shipping
            {openSection === "orderShipping" ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden mt-2 ${
              openSection === "orderShipping" ? "max-h-96" : "max-h-0"
            }`}
          >
            {openSection === "orderShipping" && (
              <p className="mt-2 border-t border-secondary/30 pt-4">
                Find answers to questions about the ordering process, shipping
                options, delivery times, and tracking your ceramic product
                shipments.
              </p>
            )}
          </div>
        </div>

        {/* Product Care and Maintenance */}
        <div className="border border-secondary/30 px-4 py-4">
          <button
            onClick={() => toggleSection("productCare")}
            className="text-lg font-semibold text-primary w-full text-left flex justify-between items-center"
          >
            Product Care and Maintenance
            {openSection === "productCare" ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden mt-2 ${
              openSection === "productCare" ? "max-h-96" : "max-h-0"
            }`}
          >
            {openSection === "productCare" && (
              <p className="mt-2 border-t border-secondary/30 pt-4">
                Learn how to care for and maintain your ceramic products to
                ensure their longevity and beauty. Get tips on cleaning,
                handling, and preserving your pieces.
              </p>
            )}
          </div>
        </div>

        {/* Returns and Refunds */}
        <div className="border border-secondary/30 px-4 py-4">
          <button
            onClick={() => toggleSection("returns")}
            className="text-lg font-semibold text-primary w-full text-left flex justify-between items-center"
          >
            Returns and Refunds
            {openSection === "returns" ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden mt-2 ${
              openSection === "returns" ? "max-h-96" : "max-h-0"
            }`}
          >
            {openSection === "returns" && (
              <p className="mt-2 border-t border-secondary/30 pt-4">
                Discover our policies on returns and refunds. This section
                explains how to initiate a return, the eligibility criteria, and
                the refund process for your ceramic purchases.
              </p>
            )}
          </div>
        </div>

        {/* Custom Orders and Personalization */}
        <div className="border border-secondary/30 px-4 py-4">
          <button
            onClick={() => toggleSection("customOrders")}
            className="text-lg font-semibold text-primary w-full text-left flex justify-between items-center"
          >
            Custom Orders and Personalization
            {openSection === "customOrders" ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden mt-2 ${
              openSection === "customOrders" ? "max-h-96" : "max-h-0"
            }`}
          >
            {openSection === "customOrders" && (
              <p className="mt-2 border-t border-secondary/30 pt-4">
                Interested in custom or personalized ceramic products? Here,
                you’ll find information on how to place custom orders and
                personalize your items to make them uniquely yours.
              </p>
            )}
          </div>
        </div>

        {/* Contact and Customer Support */}
        <div className="border border-secondary/30 px-4 py-4">
          <button
            onClick={() => toggleSection("contact")}
            className="text-lg font-semibold text-primary w-full text-left flex justify-between items-center"
          >
            Contact and Customer Support
            {openSection === "contact" ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden mt-2 ${
              openSection === "contact" ? "max-h-96" : "max-h-0"
            }`}
          >
            {openSection === "contact" && (
              <p className="mt-2 border-t border-secondary/30 pt-4">
                Have questions or need assistance? Find details on how to get in
                touch with our customer support team, including contact
                information and response times. We’re here to help with any
                inquiries you may have.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
