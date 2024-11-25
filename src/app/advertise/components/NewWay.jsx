import React from 'react';
import { FaFileAlt, FaStar, FaBookmark } from 'react-icons/fa';


const StorySection = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center p-8 bg-white gap-10">
    

      {/* Promotional Offer Section */}
      <div className="flex flex-col items-start lg:items-center max-w-2xl  mt-8">
        
 <div className="text-left ">
        <h1 className="text-5xl font-medium  mb-8">A New way to Advertise OOH</h1>
        <p className="text-gray-600 mb-8">
        Oohpoint offers a unique approach to offline advertising that addresses the limitations of traditional ads. We give brands
        </p>
      </div>
        {/* Guiding Principles */}
        <div className="w-full ">
          <h2 className="text-3xl font-bold mb-4">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex  space-x-4">
            <div className="bg-blue-600 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-gray-600 text-sm">Constantly evolving to bring the latest technology and solutions to our clients and users.</p>
              </div>
            </div>
            <div className="flex  space-x-4">
            <div className="bg-blue-600 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Transparency</h3>
                <p className="text-gray-600 text-sm">Providing real-time insights and measurable results to ensure brands know the impact of their campaigns.</p>
              </div>
            </div>
            <div className="flex  space-x-4">
            <div className="bg-purple-400 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaStar className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">User-Centricity</h3>
                <p className="text-gray-600 text-sm">We prioritize the experience of both the brands we serve and the consumers who engage with the ads.</p>
              </div>
            </div>
            <div className="flex  space-x-4">
            <div className="bg-purple-400 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaBookmark className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Collaboration</h3>
                <p className="text-gray-600 text-sm">Building strong partnerships with vendors, brands, and users to create a cohesive advertising ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="  flex flex-col justify-between mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/2 p-8 md:mt-20">
          <img src="./tape.png" alt="advertising pic" className='md:mt-8'/>
        </div>
    </div>
  );
};

export default StorySection;
