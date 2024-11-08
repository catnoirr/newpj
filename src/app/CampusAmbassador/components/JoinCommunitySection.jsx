import React from 'react';

const JoinCommunitySection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      {/* Illustration */}
      <div className="mb-6">
        <img 
          src="/path-to-image/illustration.png" // Replace with the actual path to your image
          alt="Illustration"
          className="w-48 h-48 object-contain"
        />
      </div>
      
      {/* Heading */}
      <h2 className="text-lg font-medium text-purple-500 mb-4">
        Receive Members-Only exclusive and special offers
      </h2>
      
      {/* Join button */}
      <button className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-700 mb-4">
        Join Community
      </button>
      
      {/* Description text */}
      <p className="text-gray-600 max-w-md">
        Be part of a community that supports your growth and helps you succeed.
        Join the Oohpoint Members Community and unlock endless possibilities, connections, 
        and resources for this and every future.
      </p>
    </div>
  );
};

export default JoinCommunitySection;
