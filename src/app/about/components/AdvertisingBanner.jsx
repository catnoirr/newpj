import React from 'react';
import { FaCheck } from 'react-icons/fa';


const AdvertisingBanner = () => {
  return (
    
    <div className="flex flex-col items-center p-8">

<div className="md:flex justify-end p-4 w-full hidden ">
      <div className="flex justify-around bg-purple-50 border border-purple-800 rounded-lg py-3 px-8 w-full max-w-lg">
        <div className="flex items-center gap-2 text-purple-900 font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          500+ Scans
        </div>
        <div className="flex items-center gap-2 text-purple-900 font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          400+ Users
        </div>
        <div className="flex items-center gap-2 text-purple-900 font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          50+ Vendors
        </div>
        <div className="flex items-center gap-2 text-purple-900 font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          20+ Locations
        </div>
      </div>
    </div>

      <div className="bg-purple-50 md:p-16 p-6 rounded-lg w-full  ">
        <h1 className="md:text-4xl text-3xl font-bold text-purtle-700 mb-4">
          Making Out-of-Home Advertising Engaging, Measurable, and Rewarding
        </h1>
        <p className="md:text-lg text-md text-purtle-400 mb-6">
          Oohpoint is an innovative out-of-home (OOH) advertising start-up. We work with brands to create targeted, impactful ad campaigns that reach audiences in real-world settings, from local vendor shops to high-traffic areas. We provide a seamless way for users to engage with brand advertisements while enjoying rewards and discounts.
        </p>
        <div className="flex  sm:flex-row md:justify-start justify-between gap-4">
          <button className="bg-purtle-700 text-white md:py-4 md:px-6 px-3 py-3 rounded-lg shadow-md hover:bg-purple-900">
            Advertise Now
          </button>
          <button className="border border-purtle-200 text-purtle-400 md:py-2 md:px-6 px-3 py-3 rounded-lg shadow-md hover:bg-purple-50">
            Watch a Demo
          </button>
        </div>
        <div className="flex justify-start gap-2 mt-4 md:text-sm text-xs text-purtle-400">
          <div className='flex items-center gap-2'><FaCheck className='bg-blue-600 text-white p-1 rounded-full'/> Boost Event Buzz</div>
          <div className='flex items-center gap-2'><FaCheck className='bg-blue-600 text-white p-1 rounded-full'/>  Boost Event Buzz</div>
          <div className='flex items-center gap-2'><FaCheck className='bg-blue-600 text-white p-1 rounded-full'/> Boost Event Buzz</div>
        </div>
      </div>
      
      {/* <div className=" top-2 right-2 flex gap-2">
        <button className="bg-purple-100 text-purple-700 py-1 px-3 rounded-md shadow">Site Status</button>
        <button className="bg-purple-100 text-purple-700 py-1 px-3 rounded-md shadow">Site Vendors</button>
        <button className="bg-purple-100 text-purple-700 py-1 px-3 rounded-md shadow">Site Auction</button>
      </div> */}
    </div>
  );
};

export default AdvertisingBanner;
