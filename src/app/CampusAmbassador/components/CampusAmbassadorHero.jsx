import React from 'react';

const CampusAmbassadorProgram = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100  p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-center   p-8 ">
        
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 w-96 md:h-96  ">
          <h1 className="text-6xl font-semibold text-purtle-500 mb-4 pb-8 ">
            Oohpoint Campus Ambassador Program
          </h1>
          <p className="text-purtle-400 mb-6 pb-7">
            Be a leader, grow your network, and shape the future of advertising on your campus!
          </p>
          <button className="bg-purtle-500 text-white py-4 px-8 rounded-xl hover:bg-purple-900 mb-8">
            Join Now
          </button>
        </div>
        
        {/* Right content (Image) */}
        <div className="lg:w-1/2 flex items-center justify-center h-full">
          <img
            src="Illustration.png" // replace with the actual path to the illustration image
            alt="Illustration"
            className="w-96 h-96 object-contain"
          />
        </div>
      </div>
      
      {/* Bottom content */}
      <div className=" w-full mt-20 text-purtle-400">
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
