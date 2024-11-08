import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex justify-center mt-28 px-4 md:px-0">
      <div className="bg-purple-900 text-white p-8 md:p-12  flex flex-col md:flex-row items-center justify-between w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8 relative top-8">
        
        {/* Left section - Heading and input box */}
        <div className="flex-1 max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to work with us?</h2>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl overflow-hidden shadow-md p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 text-gray-700 focus:outline-none rounded-md md:rounded-none"
            />
            <button className="bg-black text-white px-6 py-3 font-semibold w-full md:w-auto mt-2 md:mt-0 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right section - Contact info */}
        <div className="text-gray-300 space-y-4 text-center md:text-left">
          <div className="flex items-center  md:justify-start">
            <FaPhoneAlt className="mr-2" />
            <span>(406) 555-0120</span>
          </div>
          <div className="flex items-center  md:justify-start">
            <FaEnvelope className="mr-2" />
            <span>mangcoding123@gmail.com</span>
          </div>
          <div className="flex items-center  md:justify-start">
            <FaMapMarkerAlt className="mr-2" />
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
