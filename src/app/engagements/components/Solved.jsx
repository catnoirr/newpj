"use client";
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-8">
      <div className=" mx-auto flex flex-col md:flex-row gap-20 ">
        
        {/* Left Content - Testimonials Carousel */}
        <div className="md:w-1/2">
          <p className="text-sm text-purtle-400 font-semibold mb-2">Testimonials & Reviews</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See how we've helped our clients succeed</h2>
          <p className="text-gray-600 mb-8">More than 1500+ agencies using Ooh Point</p>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
            className="w-full"
          >
            {[1, 2, 3].map((slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {/* Grid with 2 Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Testimonial Card 1 */}
                  <div className=" p-6 rounded-lg  flex flex-col">
                    <div className="flex items-center mb-4">
                      <FaQuoteLeft className="text-purtle-400 text-2xl mr-2" />
                      <div className="flex space-x-1">
                        {Array(5).fill().map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Oohpoint really made a huge difference for our college fest. They not only sponsored the event but also designed amazing creative assets that made the event more memorable."
                    </p>
                    <div className="flex items-center space-x-4">
                      <img src="/user1.jpeg" alt="Rahul" className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Rahul, Final Year BMS</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className=" p-6 rounded-lg  flex flex-col">
                    <div className="flex items-center mb-4">
                      <FaQuoteLeft className="text-purtle-400 text-2xl mr-2" />
                      <div className="flex space-x-1">
                        {Array(5).fill().map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Oohpoint's sponsorship really gave a major change to our fest. The team was professional, and the crowd was excited to see what was presented."
                    </p>
                    <div className="flex items-center space-x-4">
                      <img src="/user1.jpeg" alt="Sneha" className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Sneha, Cultural Secretary</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Content - Image Section */}
        <div className="md:w-1/2 flex justify-end   relative ">
          <div className="relative max-w-md">
            {/* Dots decoration behind the main image */}
          
            {/* Main Image */}
            <Image
              src="/Rectangle 4396.png" // Replace with actual path
              width={600}
              height={400}
              alt="Laptop and plant on table"
              className="rounded-lg w-full relative z-0"
            />

            {/* Top Card - Meeting With */}
            <div className="absolute -top-5 -left-20 sm:right-40 right-24 bg-purtle-700 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2 z-20">
            <div className="flex -space-x-2">
                <img
                  src="/user1.jpeg" // Replace with actual path
                  alt="Avatar 1"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purtle-400"
                />
               
              </div>
              <span className="text-xs sm:text-sm font-semibold">The best Bootstrap theme we've ever used </span>
              
            </div>

            {/* Bottom Card - Customer Satisfaction */}
            <div className="absolute bottom-3 -left-20 bg-purtle-700 text-white p-3 rounded-lg shadow-lg   flex items-center space-x-2 z-20">
            
              <span className="text-xs sm:text-sm font-semibold">Excelent Work</span>
              <div className="flex -space-x-2">
                <img
                  src="/user1.jpeg" // Replace with actual path
                  alt="Avatar 1"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purtle-400"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
