import React from "react";

export default function JoinCommunity() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Image */}
      <div className="md:w-7/12">
      <div className="mb-4">
        <img src="/tweet-something.png" alt="Community illustration" className="w-40 h-40 mx-auto" />
      </div>

      {/* Title */}
      <p className=" text-gray-500 font-medium  mb-2">Receive News, Stay updated and special Offers.</p>

      {/* Button */}
      <button className=" relative  left-16 bg-purtle-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purtle-400 transition-colors mb-4">
        Join Community
      </button>

      {/* Description */}
      <p className="text-sm text-gray-500 text-left ">
        Be part of a community that supports your growth and helps you succeed. Join the Odeopoint WhatsApp
        Community and unlock endless possibilities, connections, and resources that will drive you forward.
      </p>
      </div>
    </div>
  );
}
