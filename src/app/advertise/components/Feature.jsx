import React from 'react';
import { FaCheck } from "react-icons/fa";



const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row  items-center justify-between   p-6 md:p-8 md:py-16 ">
      {/* Left Side - Images and Statistics */}
      <div className="flex gap-4">
        {/* Image 1 */}
        
        <img src="/image1.jpg" alt="Workplace" className="rounded-lg shadow-md sm:w-80 w-36 hidden md:block" />
        
        {/* Statistics Boxes */}
        <div className='flex flex-col gap-4 '>

        <div className="flex space-x-4 items-center justify-center">
          <div className="bg-black text-white text-center py-4 px-6 rounded-md">
            <p className="text-xl font-bold">10+</p>
            <p className="text-lg">Years of experience</p>
          </div>
          <div className="bg-green-800 text-white text-center py-4 px-6 rounded-md">
            <p className="text-xl font-bold">1.2K</p>
            <p className="text-lg">Happy Customers</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className='h-full'>
        <img src="/image2.jpg" alt="Workplace" className="rounded-lg shadow-md h-full object-cover" />
        </div>
      </div>
      </div>

      {/* Right Side - Content */}
      <div className="mt-8 md:mt-0 md:ml-16">
      <div className="flex items-center mb-4  bg-gray-200 border rounded-xl shadow p-2 w-64 sm:w-72">
            {/* <i> <FaAward className="text-4xl text-red-800" /></i> */}
            <p className="ml-2 text-sm sm:text-base"> 💛 Your gateway to digital success</p>
          </div>
          
                  <h2 className="text-3xl font-semibold text-gray-900 mt-2">Defining the future of online experiences!</h2>
        <p className="text-gray-700 text-lg mt-4">
          Gain valuable insights into your digital campaigns with our comprehensive data analytics and reporting feature.
        </p>
        <ul className="mt-4 space-y-2 ">
          <li className="flex items-center border p-2">
            {/* <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> */}
            <FaCheck className="text-white mr-2 bg-green-400 rounded-full p-1" />
            Emphasis on ROI-driven solutions
          </li>
          <li className="flex items-center  border p-2">
          <FaCheck className="text-white mr-2 bg-green-400 rounded-full p-1" />
          Maximized Footfall Engagement
          </li>
          <li className="flex items-center  border p-2">
          <FaCheck className="text-white mr-2 bg-green-400 rounded-full p-1" />
          Diverse Event Types
          </li>
          <li className="flex items-center  border p-2">
          <FaCheck className="text-white mr-2 bg-green-400 rounded-full p-1" />
          Boost Event Buzz
          </li>
        </ul>
        <button className="mt-6 bg-slate-800 text-white py-2 px-6 rounded-md ">
          Discover more
        </button>
      </div>
    </section>
  );
};

export default Hero;
