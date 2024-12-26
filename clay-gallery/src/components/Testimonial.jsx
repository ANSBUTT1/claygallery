import React from "react";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
const testimonials = [
  {
    id: 1,
    name: "Wade Warren",
    role: "Business Man",
    rating: 5,
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: profile1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Entrepreneur",
    rating: 4,
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: profile2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray text-primary py-24 px-6 sm:px-16">
      <div className=" mb-8">
        <h2 className="uppercase text-xl ">Testimonial</h2>
        <h3 className="text-4xl mt-6 font-semibold">What Our Customers Say</h3>
      </div>

      {/* Grid for testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8  px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-4 sm:p-12 rounded-lg shadow-lg  text-start"
          >
            {/* Star Rating */}
            <div className="flex justify-start mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < testimonial.rating ? "currentColor" : "none"}
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

            {/* Testimonial Text */}
            <p className="text-secondary text-xs sm:text-lg mb-4">{testimonial.text}</p>

            {/* Customer Info */}
            <div className="flex items-center justify-start">
              <img
                className="rounded-full w-16 h-16 mr-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <span className="text-secondary">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
