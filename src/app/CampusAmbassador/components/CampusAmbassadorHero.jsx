import React from 'react';

const CampusAmbassadorProgram = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-1/2  lg:text-left lg:pr-8 px-4">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-purtle-700 mb-4 pb-4">
            Oohpoint Campus Ambassador Program
          </h1>
          <p className="text-purtle-500 mb-6 pb-4 text-base sm:text-lg">
            Be a leader, grow your network, and shape the future of advertising on your campus!
          </p>
          <button className="bg-purtle-700 text-white py-2 px-4 sm:py-4 sm:px-8 rounded-xl hover:bg-purple-900">
            Join Now
          </button>
        </div>
        
        {/* Right content (Image) */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src="Illustration.png" // replace with the actual path to the illustration image
            alt="Illustration"
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
      
      {/* Bottom content */}
      <div className="w-full mt-8 lg:mt-20 text-purtle-500 px-4 text-sm sm:text-base  lg:text-left">
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
