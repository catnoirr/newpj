import React from 'react';

const Stats = () => {
  return (
    <div className='   py-8 mt-10 w-full'>
    {/* Statistics Section */}
    <div className="w-full flex justify-between gap-4    bg-white ">

    <div className="flex flex-col items-center">
  <p className="md:text-7xl text-4xl font-bold text-black">
    350<span className="text-green-600">+</span>
  </p>
  <p className="text-gray-600 text-center">Worldwide projects</p>
</div>

    <div className=" flex-col items-center hidden md:flex">
  <p className="md:text-7xl text-4xl font-bold text-black">
    99<span className="text-green-600">%</span>
  </p>
  <p className="text-gray-600 text-center">Analyze business reports</p>
</div>

<div className="md:flex flex-col items-center hidden ">
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