import React from 'react';
import { FaCheck } from 'react-icons/fa';


const AdvertisingBanner = () => {
  return (
    
    <div className="flex flex-col  p-4  bg-purtle-700  ">

<div className="md:flex justify-end p-4 w-full hidden  ">
      <div className="flex justify-around  rounded-lg py-3 px-8 w-full max-w-lg bg-green-100  ">
        <div className="flex items-center gap-2 text-white font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          500+ Scans
        </div>
        <div className="flex items-center gap-2 text-white font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          400+ Users
        </div>
        <div className="flex items-center gap-2 text-white font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          50+ Vendors
        </div>
        <div className="flex items-center gap-2 text-white font-semibold  text-xs">
          <span className="bg-green-500 rounded-full w-3 h-3"></span>
          20+ Locations
        </div>
      </div>
    </div>
       <div className='flex justify-between md:flex-row flex-col ' >
      <div className=" md:p-16 p-4 rounded-lg md:w-8/12 custome ">
        <h1 className="md:text-5xl text-4xl font-bold text-white mb-4">
        Deliver the perfect <span className='text-green-600'>solution </span>
        for your cilent        </h1>
        <p className="md:text-lg text-md text-white mb-6">
        Be a leader, grow your network, and shape the future of advertising on your campus!Be a leader, grow your network, and shape the future of advertising on your campus!
        </p>
        <div className="flex  sm:flex-row md:justify-start  gap-4">
          <button className="bg-green-100  text-green-400 md:py-4 md:px-6 px-3 py-3 rounded-lg shadow-md ">
            Join Now
          </button>
          <button className="border text-white md:py-2 md:px-6 px-3 py-3 rounded-lg ">
            Watch a Demo
          </button>
        </div>
        <div className="flex justify-start gap-2 mt-4 md:text-sm text-xs text-white">
          <div className='flex items-center gap-2'><FaCheck className='bg-green-800 text-white p-1 rounded-full'/> Boost Event Buzz</div>
          <div className='flex items-center gap-2'><FaCheck className='bg-green-800 text-white p-1 rounded-full'/>  Boost Event Buzz</div>
          <div className='flex items-center gap-2'><FaCheck className='bg-green-800 text-white p-1 rounded-full'/> Boost Event Buzz</div>
        </div>
      </div>
      <div className=' flex justify-center items-center  p-5  '>
        <h1 className='text-center text-white text-8xl'>creatives</h1>
      </div>
      </div>
      
     
    </div>
  );
};

export default AdvertisingBanner;
