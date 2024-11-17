import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CampusImpact = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-start w-full max-w-7xl p-4 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-1/2">
          <div className="w-full ">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
              Our Commitment to Campus Impact
            </h1>
            <p className="text-black mb-6 text-base md:text-lg">
              Be a leader, grow your network, and shape the future of advertising on your campus! Be a leader, grow your network, and shape the future of advertising on your campus!
            </p>
          </div>
          
          {/* Mission card */}
          <div className="bg-gray-200 p-4 md:p-6 sm:h-[490]">
            <button className="bg-purtle-700 text-white py-2 px-4 md:py-4 md:px-8 rounded-xl hover:bg-purtle-500 mb-4 ml-8">
              Our Mission
            </button>
            <button className=" text-blue-600 py-2 px-4 md:py-4 md:px-8 rounded-xl  mb-4 ml-8 hover:border hover:border-blue-600">
              Our Vision
            </button>

            <p className="text-purtle-500 mb-4 text-sm md:text-base">
              Build a community of student ambassadors who bring Oohpoint's interactive advertising to life on campuses, creating real opportunities for growth, networking, and innovation.
            </p>
            <div className='flex'>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white mr-2 bg-purtle-700 p-1 rounded-full" /> Tailored Sponsorship Packages
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white b bg-purtle-700 mr-2 p-1 rounded-full" /> Maximized Footfall Engagement
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white  bg-purtle-700 mr-2 p-1 rounded-full" /> Diverse Event Types
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white  bg-purtle-700 mr-2 p-1 rounded-full" /> Boost Event Buzz
              </li>
            </ul>
            <div className='relative top-10'><img src="designer-working.png " alt="" className='w-48'/></div>

            </div>
            <button className=" bg-purtle-700 text-white py-2 px-4 md:py-4 md:px-8 rounded-xl hover:bg-purtle-500 ml-8">
              Apply Today
            </button>
          </div>
        </div>
        
        {/* Right content - Image with overlay */}
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="biy.png" // replace with the actual path to your image
            alt="Laptop with notebook"
            className="w-full h-auto md:w-[500px] lg:w-[666px] object-cover "
          />
          <div className="absolute top-4 -right-4 md:-right-8 lg:-right-12 bg-purtle-700 text-white py-2 px-4  rounded-lg flex items-center space-x-2 shadow-lg">
            <div className="flex gap-1">
              <div><img src="Googlelogo.png" alt="Google Logo" className=" h-12" /></div>
              <div className="flex flex-col">
                <span className="text-sm md:text-sm font-semibold text-grey-800">Google Rating</span>
                <div className="flex items-center text-yellow-400">
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="flex ml-1 text-yellow-400 text-lg">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusImpact;
