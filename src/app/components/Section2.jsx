import React from 'react';
import { FaAward } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row  items-center justify-between bg-gray-10  p-5 md:p-16 ">
      {/* Left Side - Images and Statistics */}
      <div className="flex gap-4">
        {/* Image 1 */}
        
        <img src="/image1.png" alt="Workplace" className="rounded-lg shadow-md sm:w-64 w-36 h-auto hidden md:block" />
        
        {/* Statistics Boxes */}
        <div className='flex flex-col gap-4 '>

        <div className="flex space-x-4 items-center justify-center">
          <div className="bg-black text-white text-center py-4 px-6 rounded-md">
            <p className="text-xl font-bold">10+</p>
            <p className="text-sm">Years of experience</p>
          </div>
          <div className="bg-purple-800 text-white text-center py-4 px-6 rounded-md">
            <p className="text-xl font-bold">1.2K</p>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className='h-full'>
        <img src="/image2.png" alt="Workplace" className="rounded-lg shadow-md h-full object-cover" />
        </div>
      </div>
      </div>

      {/* Right Side - Content */}
      <div className="mt-8 md:mt-0 md:ml-16">
      <div className="flex items-center mb-4  bg-gray-200 border rounded-xl shadow p-2 w-64 sm:w-72">
            <i> <FaAward className="text-4xl text-red-800" /></i>
            <p className="ml-2 text-sm sm:text-base">Award winning digital service</p>
          </div>
          
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">Why Partner with Oohpoint?</h2>
        <p className="text-gray-700 mt-4">
          Gain valuable insights into your digital campaigns with our comprehensive data analytics and reporting feature.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Tailored Sponsorship Packages
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Maximized Footfall Engagement
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Diverse Event Types
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Boost Event Buzz
          </li>
        </ul>
        <button className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700">
          Discover more
        </button>
      </div>
    </section>
  );
};

export default Hero;
