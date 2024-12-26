import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className=" px-4 sm:px-16 py-16 text-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section (Contact Information) */}
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-semibold">Get in touch</h2>
          <p className="text-secondary text-xl">
            Share some details here. This is a flexible section where you can
            share anything you want. It could be details or some information.
          </p>
          <address className="text-lg space-y-4">
            <div className="flex flex-col">
              <strong className="text-primary">
                <FaMapMarkerAlt className="inline-block mr-2" /> Address
              </strong>
              <span className="text-secondary">4 sultan pura St, Ghakkhar, Gujranwala Pakistan</span>
            </div>
            <hr className="text-gray" />
            <div className="flex flex-col">
              <strong className="text-primary">
                <FaPhone className="inline-block mr-2" /> Phone
              </strong>{" "}
              <span   className="text-secondary"> (+92) 345 6562 538</span>
            </div>
            <hr className="text-gray" />
            <div className="flex flex-col">
              <strong className="text-primary">
                <FaEnvelope className="inline-block mr-2" /> Email
              </strong>{" "}
           <span  className="text-secondary">   anasbutt7079@gmail.com</span>
            </div>
            <hr className="text-gray" />
          </address>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl ">Follow</h2>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <span>
                <FaFacebook size={24} />
              </span>
              <span>
                <FaInstagram size={24} />
              </span>
              <span>
                <FaTwitter size={24} />
              </span>
              <span>
                <FaYoutube size={24} />
              </span>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="space-y-6">
          <form className="bg-gray p-8 rounded-md shadow-md">
            <h2 className="font-semibold text-2xl mb-4 text-secondary flex">
              Name<span className="text-red-500">*</span>{" "}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2  mt-2"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2  mt-2"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mt-4">
              <label
                htmlFor="email"
                className="font-semibold text-lg mb-2 text-secondary"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 " />
            </div>

            {/* Message Field */}
            <div className="mt-4">
              <label
                htmlFor="message"
                className="font-semibold text-lg mb-2 text-secondary"
              >
                Comment or Message
              </label>
              <textarea id="message" rows="5" className="w-full px-4 py-2" />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="uppercase w-full sm:w-auto border hover:bg-primary hover:text-white p-3  px-6 sm:px-8  transition-all ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
