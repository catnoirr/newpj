import React from 'react';
import Sidebar from "./Sidebar";
import Image from 'next/image';
import { FaAward } from "react-icons/fa";
export default function Home() {
  return (
    <div className="">
      <header className="bg-purple-900 w-full py-6 flex justify-end pr-4">
        {/* Header can contain elements like profile icon, notifications etc. */}
      </header>

      <div>
        <Sidebar />
      </div>

      <div className="relative p-5">
        <button className="absolute right-4 sm:right-12 text-black border px-4 py-2 rounded border-black text-sm sm:text-base">
          Apply for Sponsorship
        </button>
      </div>

      <main className="flex flex-col  md:flex-row justify-between items-center gap-16 sm:gap-20 p-6 mt-20 sm:mt-40 ">
        <div className="md:flex-1">
          <div className="flex items-center mb-4  bg-gray-200 border rounded-xl shadow p-2 w-64 sm:w-72">
            <i> <FaAward className="text-4xl text-red-800" /></i>
            <p className="ml-2 text-sm sm:text-base">Award winning digital service</p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Maximize Engagement at Your Next Big Event!
          </h1>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            At Oohpoint, we are passionate about partnering with events of all types—college fests, corporate gatherings, competitions, and more. Whether it's a small or large event, we can provide the perfect sponsorship to ensure your attendees get the most out of your occasion.
          </p>

          <div className="flex  gap-4 bg-white p-2 rounded-md justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg px-4 py-2 flex-1 text-sm sm:text-base"
            />
            <button className="bg-black text-white px-4 py-2  rounded-lg text-sm sm:text-base ">
              Book a free consultation
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-100 md:flex-1  md:w-auto">
          <div className="relative max-w-md w-full">
            {/* Dots decoration behind the main image */}
            <img
              src="dots.png"
              alt="Decorative dots"
              className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 w-40 sm:w-60 z-0"
            />

            {/* Main Image */}
            <Image
              src="/Rectangle 4396.png" // Replace with actual path
              width={600}
              height={400}
              alt="Laptop and plant on table"
              className="rounded-lg w-full relative z-10"
            />

            {/* Top Card - Meeting With */}
            <div className="absolute -top-5 -right-4 sm:-right-8 bg-purple-900 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2 z-20">
              <span className="text-xs sm:text-sm font-semibold">Meeting with</span>
              <div className="flex -space-x-2">
                <img
                  src="/user1.jpeg" // Replace with actual path
                  alt="Avatar 1"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-800"
                />
                <img
                  src="/user1.jpeg" // Replace with actual path
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-800"
                  alt="Avatar 2"
                />
              </div>
            </div>

            {/* Bottom Card - Customer Satisfaction */}
            <div className="absolute bottom-5 -left-10 sm:-left-28 bg-purple-900 text-white p-4 rounded-lg shadow-lg w-40 sm:w-48 z-20">
              <p className="text-xs sm:text-sm font-semibold">Our Lovely Customers</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex -space-x-2">
                  <img
                    src="/user1.jpeg" // Replace with actual path
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800"
                    alt="Avatar 3"
                  />
                  <img
                    src="/user1.jpeg" // Replace with actual path
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800"
                    alt="Avatar 4"
                  />
                  <img
                    src="/user1.jpeg" // Replace with actual path
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800"
                    alt="Avatar 5"
                  />
                </div>
                <span className="text-xs sm:text-sm">5K+</span>
              </div>
              <p className="text-xs mt-2">Satisfaction Rate 80%</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-wrap justify-between items-center py-4 px-4  gap-4">
  {/* Heading */}
  <div className="w-full md:w-52">
    <h1 className="text-lg md:text-xl font-semibold text-center md:text-left">
      100+ Top Companies Trust Us
    </h1>
  </div>

  {/* Logos */}
  <div className="flex flex-wrap justify-around items-center gap-4 md:gap-6 w-full md:w-auto flex-1">
    <img src="/Malboro.png" alt="Malboro Logo" className="h-8 w-auto" />
    <img src="/intel.png" alt="Intel Logo" className="h-8 w-auto" />
    <img src="/Amazon.png" alt="Amazon Logo" className="h-8 w-auto" />
    <img src="/Uber.png" alt="Uber Logo" className="h-8 w-auto" />
  </div>
</div>



    </div>
  );
}
