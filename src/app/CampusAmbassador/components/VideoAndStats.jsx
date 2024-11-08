import React from 'react';

const VideoAndStats = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Video Section */}
      <div className="w-full max-w-6xl mx-auto bg-gray-200 h-96 flex items-center justify-center mb-8">
        <p className="text-2xl text-purple-600">video</p>
      </div>

      {/* Statistics Section */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-green-600">{'>30K'}</p>
          <p className="text-gray-600">Worldwide client</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-green-600">99%</p>
          <p className="text-gray-600">Analyze business reports</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-green-600">350+</p>
          <p className="text-gray-600">Worldwide projects</p>
        </div>
      </div>
    </section>
  );
};

export default VideoAndStats;
