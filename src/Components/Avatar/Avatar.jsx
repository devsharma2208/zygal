import React from "react";
import "tailwindcss/tailwind.css";

const ScrollableSections = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-80 h-screen flex flex-col items-center bg-gray-200 pt-10 px-10 rounded-xl relative">
        <div className="w-64 overflow-hidden mb-4">
          <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&s"
                  alt={`User ${index + 1}`}
                  className="rounded-full w-10 h-10"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-y-scroll no-scrollbar h-80 w-full mt-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-32 bg-gray-200 mb-4 flex items-center justify-center bg-gray-300 rounded-xl"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3304/3304773.png"
                className="w-5"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="h-2 w-40 bg-gray-300 mt-5 absolute bottom-2 rounded" />
      </div>
    </div>
  );
};

export default ScrollableSections;
