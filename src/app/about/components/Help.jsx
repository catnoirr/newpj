import React from "react";

function HelpSection() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      {/* Container for the two images and text bubbles */}
      <div className="flex space-x-8 p-8">
        {/* Left Image Section */}
        <div className="relative p-8">
          <img
            src="Image (1).png" // Replace with your image path
            alt="Support Team Member"
            className="rounded-3xl h-96 w-64 object-contain"
          />
          {/* Top text bubble */}
          <div className="absolute top-2 -right-52 bg-black text-white text-sm px-4 py-2 rounded-full flex items-center">
            <span className="h-3 w-3 bg-gray-300 rounded-full mr-2"></span>
            Get instant help from our amazing team
          </div>
          {/* Decorative star */}
          <div className="absolute -top-8 left-2 text-black text-2xl">★</div>
        </div>

        {/* Right Image Section */}
        <div className="relative p-8 right-20 top-24">
          <img
            src="Image (1).png" // Replace with your image path
            alt="Support Team Member"
            className="rounded-full h-80 w-64 object-contain"
          />
          {/* Bottom text bubble */}
          <div className="absolute bottom-20 -left-60 bg-black text-white text-sm px-4 py-2 rounded-full flex items-center">
            <span className="h-3 w-3 bg-gray-300 rounded-full mr-2"></span>
            Get instant help from our amazing team
          </div>
          {/* Decorative star */}
          <div className="absolute top-1 -right-8 text-black text-2xl">★</div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
