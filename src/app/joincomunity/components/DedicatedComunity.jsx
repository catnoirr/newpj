import React from 'react';
import { FaCheck } from 'react-icons/fa';


const RoleAndResponsibilities = () => {
  return (
    <section className="md:px-8 px-6 py- bg-white  ">
      {/* <div className=" mb-4">
        <h2 className="text-5xl font-semibold text-purtle-700">Role & Responsibilities</h2>
      </div> */}
      <div className="flex flex-col-reverse md:flex-row items-center bg-white ">
        <div className="flex-1">
          <button className='relative bg-blue-600 p-4 px-6 rounded-3xl text-white md:left-52 md:top-72 left-28 top-48'>
          Join Community
          </button>
          <img
            src="circle1.png"
            alt="Meeting illustration"
            className="w-full max-w-sm mx-auto md:max-w-none md:mx-0"
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-8">
          <h3 className="text-4xl font-bold mb-2 p-6">Our Dedicated Communities</h3>
          <p className="text-gray-600 mb-4 pl-6">
            Our commitment to excellence, expertise in cutting-edge technologies, and dedication to client.
          </p>
          {/* <div className='p-6'>
          <button className="bg-black text-white px-4 py-2 rounded  mb-4 ">
            Explore our projects
          </button>
          </div> */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 p-6">
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/>Tailored Solutions</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/> Client-Centric Approach</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/> Proven Track Record</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/>Scalability</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/> Quality Assurance</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/> Cost-Effectiveness</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/>Long-Term Partnership</li>
            <li className='flex items-center gap-3'><FaCheck className='text-green-600 border border-green-600 rounded-full p-1 '/>24/7 tech & business support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RoleAndResponsibilities;
