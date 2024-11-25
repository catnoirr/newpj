import React from 'react';
import { FaFileAlt, FaStar, FaBookmark } from 'react-icons/fa';
const StorySection = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 bg-white">




      {/* Title and Description */}
      <div className="text-center w-full ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-8">Our Story</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-left md:text-center text-sm sm:text-base">
          Founded with a vision to reshape the advertising industry, Oohpoint started with the idea that offline spaces are
          filled with untapped opportunities for brand engagement. Recognizing the limitations of traditional billboards and
          print ads, we set out to create a platform that makes advertising more interactive, rewarding, and relevant for
          both brands and consumers. Today, we're working with businesses across industries to make their advertising
          campaigns more engaging and effective.
        </p>
      </div>

      {/* Promotional Offer Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full max-w-6xl mt-4 sm:mt-8 gap-8">
        <div className="flex lg:mb-0 w-full lg:w-1/2 mt-20 md:justify-center">
        <img src="ring.png" alt="" className='w-60' />
          <img src="./Group (2).png" alt="advertising pic" className="w-60 relative right-40 bottom-20" />
        </div>

        {/* Guiding Principles */}
        <div className="w-full ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Innovation */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Constantly evolving to bring the latest technology and solutions to our clients and users.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Transparency</h3>
                <p className="text-gray-600 text-sm">
                  Providing real-time insights and measurable results to ensure brands know the impact of their campaigns.
                </p>
              </div>
            </div>

            {/* User-Centricity */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-400 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaStar className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">User-Centricity</h3>
                <p className="text-gray-600 text-sm">
                  We prioritize the experience of both the brands we serve and the consumers who engage with the ads.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-400 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <FaBookmark className="text-white text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Building strong partnerships with vendors, brands, and users to create a cohesive advertising ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
