import React from 'react';
import { FaUserGraduate, FaChessRook, FaBullseye, FaUsers, FaTheaterMasks } from 'react-icons/fa';

const SponsorshipSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">We are Sponsoring</h2>
        <p className="text-gray-600 mb-12">
          We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Sponsorship Image */}
          <div className="flex justify-center items-center">
            <img src="spomsor.png" alt="Sponsorship" className="rounded-lg shadow-md" />
          </div>

          {/* Right Side - Sponsorship Details */}
          <div className="space-y-6 text-left">
            {/* College Fest */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-800 p-3 rounded-xl">
                <FaUserGraduate className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">College Fest</h3>
                <p className="text-gray-600">Treat others with kindness, empathy, and understanding.</p>
              </div>
            </div>

            {/* Product Launch Events */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-800 p-3 rounded-xl">
                <FaChessRook className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Product Launch Events</h3>
                <p className="text-gray-600">Welcome and embrace diversity in all its forms.</p>
              </div>
            </div>

            {/* B2B Conferences */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-800 p-3 rounded-xl">
                <FaBullseye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">B2B Conferences</h3>
                <p className="text-gray-600">Share knowledge, experiences, and feedback freely.</p>
              </div>
            </div>

            {/* Corporate Gatherings */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-800 p-3 rounded-xl">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Corporate Gatherings</h3>
                <p className="text-gray-600">Work together to support each other's growth.</p>
              </div>
            </div>

            {/* Cultural Events */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-800 p-3 rounded-xl">
                <FaTheaterMasks className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Cultural Events And More</h3>
                <p className="text-gray-600">Conduct yourself with integrity and honesty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
