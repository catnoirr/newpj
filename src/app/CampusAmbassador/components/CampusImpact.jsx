import React from 'react';

const CampusImpact = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8 ">
      {/* Main container with left and right content */}
      <div className="flex flex-col lg:flex-row items-start w-full p-8 rounded-lg  space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left content */}
        <div className="lg:w-[593px]">
          <div className='w-[593px] h-[284.26px]'>
          <h1 className="text-6xl font-semibold text-purtle-500 mb-4 h-[154]">
            Our Commitment to Campus Impact
          </h1>
          <p className="text-purtle-400 mb-6 h-[92]">
            Be a leader, grow your network, and shape the future of advertising on your campus! Be a leader, grow your network, and shape the future of advertising on your campus!
          </p>
          </div>
          {/* Mission card */}
          <div className="bg-purple-100 p-6 rounded-lg h-[470] w-[666]">
            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 mb-4">
              Our Mission
            </button>
            <p className="text-gray-700 mb-4">
              Build a community of student ambassadors who bring Oohpoint's interactive advertising to life on campuses, creating real opportunities for growth, networking, and innovation.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <span className="text-purple-700 mr-2">•</span> Tailored Sponsorship Packages
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-purple-700 mr-2">•</span> Maximized Footfall Engagement
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-purple-700 mr-2">•</span> Diverse Event Types
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-purple-700 mr-2">•</span> Boost Event Buzz
              </li>
            </ul>
            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800">
              Apply Today
            </button>
          </div>
        </div>
        
        {/* Right content - Image with overlay */}
        <div className="lg:w-1/2 relative">
          <img
            src="campusimpact.png" // replace with the actual path to your image
            alt="Laptop with notebook"
            className="w-[666px] h-[855px] rounded-lg object-cover"
          />
          <div className="absolute top-4 right-4 bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg">
            <span className="text-xl font-semibold">G</span>
            <span className="text-lg">Google Rating</span>
            <span className="text-xl font-semibold">4.8</span>
            <span className="flex text-yellow-400">
              ★★★★★
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusImpact;
