import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = ["Slide 1 Content", "Slide 2 Content", "Slide 3 Content"];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col h-100 items-center justify-center h-screen">
      <div className="w-80 h-full flex flex-col items-center bg-gray-200 pt-10 px-10 rounded-xl">
        <div className="relative w-64 h-auto overflow-hidden border rounded-lg bg-gray-300">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-64 h-64 flex items-center justify-center flex-shrink-0 overflow-hidden"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3304/3304773.png"
                  className="w-5"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-4 mt-5 w-full bg-gray-300 rounded" />
        <div className="my-5">
          <div className="h-4 w-40 bg-gray-300 rounded" />
        </div>

        <div className="flex my-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                activeIndex === index ? "bg-blue-400" : "bg-gray-600"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <button className="mt-4 p-2 bg-gray-300 text-black rounded w-full" onClick={()=>setActiveIndex(0)}>
          Static Button
        </button>
        <div className="h-2 w-40 bg-gray-300 mt-5 absolute bottom-0 rounded" />
      </div>
    </div>
  );
};

export default Carousel;
