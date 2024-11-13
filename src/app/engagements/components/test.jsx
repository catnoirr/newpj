"use client"

import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-purtle-400 font-semibold mb-2">Testimonials & Reviews</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">See how we've helped our clients succeed</h2>
        <p className="text-gray-600 mb-8">More than 1500+ agencies using Ooh Point</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Testimonials */}
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-purtle-400 text-2xl mr-2" />
                <div className="flex space-x-1">
                  {Array(5).fill().map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Oohpoint really made a huge difference for our college fest. They not only sponsored the event but also designed such amazing creative assets that made the event more memorable for everyone. The team was professional, and the results truly spoke for themselves."
              </p>
              <div className="flex items-center space-x-4">
                <img src="/rahul.jpg" alt="Rahul" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Rahul, Final Year BMS</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-purtle-400 text-2xl mr-2" />
                <div className="flex space-x-1">
                  {Array(5).fill().map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Oohpoint's sponsorship really gave a major change to our fest. They were not only a great sponsor but also brought unique design assets that matched our vision perfectly. The team was professional, and the crowd was excited to see what was presented."
              </p>
              <div className="flex items-center space-x-4">
                <img src="/sneha.jpg" alt="Sneha" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Sneha, Cultural Secretary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img src="/workspace.jpg" alt="Workspace" className="rounded-lg shadow-md w-full h-auto" />
            <div className="absolute top-4 left-4 bg-purtle-700 text-white text-xs font-semibold px-3 py-1 rounded-lg">
              Trusted Sponsorship Partner Since 2021
            </div>
            <div className="absolute bottom-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
              @OohPointNetwork
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
