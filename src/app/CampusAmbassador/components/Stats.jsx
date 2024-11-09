import React from 'react';

const Stats = () => {
  return (
    <div className=' bg-gray-100 px-9 py-8 mb-16'>
    {/* Statistics Section */}
    <div className="w-full max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-4  p-8  bg-white ">
<div className="flex flex-col items-center">
  <p className="md:text-7xl text-4xl font-bold text-black">
    <span className="text-green-600">{'>'}</span>30K
  </p>
  <p className="text-gray-600 text-center">Worldwide client</p>
</div>

<div className="flex flex-col items-center">
  <p className="md:text-7xl text-4xl font-bold text-black">
    99<span className="text-green-600">%</span>
  </p>
  <p className="text-gray-600 text-center">Analyze business reports</p>
</div>

<div className="flex flex-col items-center">
  <p className="md:text-7xl text-4xl font-bold text-black">
    350<span className="text-green-600">+</span>
  </p>
  <p className="text-gray-600 text-center">Worldwide projects</p>
</div>
</div>

  </div>

     
  );
};

export default Stats;