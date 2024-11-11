import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CampusImpact = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-start w-full max-w-7xl p-4 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-1/2">
          <div className="w-full ">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Transforming Out-of-Home Advertising
            </h1>
            <p className="text-black mb-6 text-base md:text-lg">
            Oohpoint is integrating digital interactivity with traditional out-of-home advertising, we make brand experiences more engaging, measurable, and impactful
            </p>
          </div>
          
          {/* Mission card */}
          <div className=" p-4 md:p-6 sm:h-[450]">
            <button className="bg-purtle-700 text-white py-2 px-4 md:py-4 md:px-8 rounded-xl hover:bg-purtle-500 mb-4 ml-8">
              Our Mission
            </button>

            <p className="text-black mb-4 text-sm md:text-base">
            Our mission is to revolutionize offline advertising by creating a more meaningful connection between brands and their consumers. We aim to offer businesses cost-effective, measurable advertising solutions while delivering real-time insights and tangible benefits to users
            </p>
            <div className='flex'>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white mr-2 bg-purtle-700 p-1 rounded-full" /> Targated Companies
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white b bg-purtle-700 mr-2 p-1 rounded-full" />Cost Effective
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white  bg-purtle-700 mr-2 p-1 rounded-full" /> Measurable Results
              </li>
              <li className="flex items-center text-purtle-500 font-semibold">
                <FaCheck className="text-white  bg-purtle-700 mr-2 p-1 rounded-full" />Real Engagement
              </li>
            </ul>
            <div className='relative md:top-10 md:left-48'><img src="image45.png " alt="" className='w-32'/></div>

            </div>
            
          </div>
        </div>
        
        {/* Right content - Image with overlay */}
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="newpic.png" // replace with the actual path to your image
            alt="Laptop with notebook"
            className="w-full h-auto md:w-[500px] lg:w-[666px] object-cover "
          />
         
        </div>
      </div>
    </div>
  );
};

export default CampusImpact;
