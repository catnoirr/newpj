import React from 'react';
import Stats from "./Stats"

const CampusAmbassadorProgram = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-center w-full  space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-1/2  lg:text-left lg:pr-8 px-4">
          <h1 className="text-4xl sm:text-4xl lg:text-7xl font-semibold text-black mb-4 pb-4">
            Tell a <span className='text-blue-600'> better brand</span> story
          </h1>
          <p className="text-black mb-6 pb-4 text-base sm:text-lg">
          Be a leader, grow your network, and shape the future of advertising on your campus!Be a leader, grow your network, and shape the future of advertising on your campus!          </p>
          <div className='flex gap-5'>
          <button className="bg-purtle-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:bg-purple-900">
            Join Now
          </button>
          <button className=" text-blue-600 py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:border hover:border-blue-600 ">
            Contact Us
          </button>
          </div>
        </div>
        
        {/* Right content (Image) */}
        <div className="lg:w-1/2 flex items-center justify-center relative">
        <div className='flex absolute md:bottom-3  left-40 md:-left-24  rounded-lg help md:text-sm text-xs p-3 md:w-80 w-44 gap-2 text-white'>
          <img src="Googlelogo.png" alt="" className='md:w-10 md:h-10 w-8 h-8'/>
          <p>Get instant help from our amazing
          team</p>
        </div>
          <img
            src="campusimage-1.png" // replace with the actual path to the illustration image
            alt="Illustration"
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
      <div className='w-full'>
        <Stats/>
      </div>
      
      {/* Bottom content */}
      <div className="w-full mt-8  text-purtle-500 px-4 text-sm sm:text-base  lg:text-left">
        <p>
          Welcome to the Oohpoint Campus Ambassador Program where you can be part of a network of
          changemakers representing the future of innovative advertising! As an ambassador, you’ll
          bring unique ad experiences to your campus, connecting your peers with exclusive deals,
          while helping to shape Oohpoint's impact.
        </p>
      </div>
    </div>
  );
};

export default CampusAmbassadorProgram;
