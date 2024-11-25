import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CampusImpact = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-start w-full max-w-7xl p-4 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-1/2  ">
          <div className="w-full ">
            <p className='w-60 bg-gray-100 rounded-xl p-2'> 😉 Your Gateway to sucess</p>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 py-5">
            Why Partner with Oohpoint?
                        </h1>
            <p className="text-black mb-6 text-base md:text-lg">
            Gain valuable insights into your digital campaigns with our comprehensive data analytics and reporting feature.            </p>
          </div>
          
          {/* Mission card */}
          <div className=" w-full ">
          

           
            <div className=''>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center  ">
                <FaCheck className="text-white mr-2 bg-green-400 p-1 rounded-full" /> Tailored Sponsorship Packages
              </li>
              <li className="flex items-center  ">
                <FaCheck className="text-white b bg-green-400 mr-2 p-1 rounded-full" /> Maximized Footfall Engagement
              </li>
              <li className="flex items-center  ">
                <FaCheck className="text-white  bg-green-400 mr-2 p-1 rounded-full" /> Diverse Event Types
              </li>
              <li className="flex items-center  ">
                <FaCheck className="text-white  bg-green-400 mr-2 p-1 rounded-full" /> Boost Event Buzz
              </li>
            </ul>
            <div className='relative top-10'><img src="designer-workin.png " alt="" className='w-48'/></div>

            </div>
            <button className=" bg-purtle-700 text-white py-2 px-4 md:py-4 md:px-8 rounded-xl hover:bg-purtle-500 ml-8">
              Apply Today
            </button>
          </div>
        </div>
        
        {/* Right content - Image with overlay */}
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="chart.png" // replace with the actual path to your image
            alt="Laptop with notebook"
            className="w-full h-auto md:w-[500px] lg:w-[666px] object-cover "
          />
         
        </div>
      </div>
    </div>
  );
};

export default CampusImpact;
