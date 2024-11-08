"use client";
import React from 'react';
import Sidebar from "./Sidebar";
import Image from 'next/image';
import { FaAward, FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Home() {
  return (
   
    
     
      <main className="flex flex-col md:flex-row justify-between items-center gap-16 sm:gap-20 p-6 mt-20 sm:mt-40 ">
        <div className="md:flex-1">
          <div className="flex items-center mb-4 bg-gray-200 border rounded-xl shadow p-2 w-64 sm:w-72">
            <i><FaAward className="text-4xl text-red-800" /></i>
            <p className="ml-2 text-sm sm:text-base">Award winning digital service</p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Maximize Engagement at Your Next Big Event!
          </h1>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            At Oohpoint, we are passionate about partnering with events of all types—college fests, corporate gatherings, competitions, and more. Whether it's a small or large event, we can provide the perfect sponsorship to ensure your attendees get the most out of your occasion.
          </p>

          {/* Testimonials Carousel with Pagination */}
          <div className="">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="space-y-6"
          >
            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-purple-600 text-2xl mr-2" />
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-purple-600 text-2xl mr-2" />
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
            </SwiperSlide>
          </Swiper>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center bg-gray-100 md:flex-1 md:w-auto">
          <div className="relative max-w-md w-full">
            <img
              src="dots.png"
              alt="Decorative dots"
              className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 w-40 sm:w-60 z-0"
            />
            <Image
              src="/Rectangle 4396.png"
              width={600}
              height={400}
              alt="Laptop and plant on table"
              className="rounded-lg w-full relative z-10"
            />
            <div className="absolute -top-5 -right-4 sm:-right-8 bg-purple-900 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2 z-20">
              <span className="text-xs sm:text-sm font-semibold">Meeting with</span>
              <div className="flex -space-x-2">
                <img src="/user1.jpeg" alt="Avatar 1" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-800" />
                <img src="/user1.jpeg" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-800" alt="Avatar 2" />
              </div>
            </div>
            <div className="absolute bottom-5 -left-10 sm:-left-28 bg-purple-900 text-white p-4 rounded-lg shadow-lg w-40 sm:w-48 z-20">
              <p className="text-xs sm:text-sm font-semibold">Our Lovely Customers</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex -space-x-2">
                  <img src="/user1.jpeg" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800" alt="Avatar 3" />
                  <img src="/user1.jpeg" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800" alt="Avatar 4" />
                  <img src="/user1.jpeg" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-purple-800" alt="Avatar 5" />
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

                )
}
