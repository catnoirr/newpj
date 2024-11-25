import React from 'react';
import Image from 'next/image';
// import { FaAward } from "react-icons/fa";
import Typewriter from "./typewriter";
export default function Home() {
  return (
    <div className="md:px-8 ">
      
      

      <main className="flex flex-col  md:flex-row justify-between items-center gap-16 sm:gap-20 p-6 mt-6 ">
        <div className="md:flex-1">
          <div className="flex items-center mb-4  bg-gray-200 border rounded-xl shadow p-2 w-64 sm:w-72 ">
            {/* <i> <FaAward className="text-4xl text-red-800" /></i> */}
            <p className="ml-2 text-sm sm:text-base">🤩 Award winning digital service</p>
          </div>
          <h1 className="text-5xl sm:text-5xl font-semibold  py-4">
            Creative studio focused on 
          </h1>
           <Typewriter />
          <p className="text-gray-600 mb-8 text-lg  py-8">
          From concept to execution, we deliver web designs that make an impact. Let your brand shine with our innovative and visually stunning websites.
          </p>

          <div className="flex  gap-4 bg-white p-2 rounded-md justify-center border" >
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-lg px-4 py-2 flex-1 text-sm sm:text-base"
            />
            <button className="bg-black text-white px-4 py-2  rounded-lg text-sm  ">
              Start trial!
            </button>
          </div>
          <div className='flex py-8 md:gap-6 items-center  justify-between '>
            <div className='flex md:gap-4 gap-2 items-center'>
              <div><figure className=" mb-0">
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 11.9994C2.25 11.2426 2.33278 10.5061 2.48954 9.79839C3.52877 11.4668 4.9817 12.8444 6.70303 13.7805C6.89642 15.2744 7.31649 16.8492 7.91754 18.3021C8.4287 19.5376 9.08647 20.7226 9.87759 21.7036C5.52106 20.7171 2.25 16.7562 2.25 11.9994Z"
                            fill="green"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M6.58273 11.9511C5.09625 10.9367 3.89759 9.51584 3.14064 7.84162C4.39913 5.05845 6.8817 2.97347 9.87759 2.2951C9.08647 3.2761 8.4287 4.46106 7.91754 5.69662C7.07721 7.72786 6.59064 9.99757 6.58273 11.9511Z"
                            fill="green"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M16.0799 18.3021C15.5688 19.5376 14.911 20.7226 14.1199 21.7036C18.4764 20.7171 21.7475 16.7562 21.7475 11.9994C21.7475 11.2426 21.6647 10.5061 21.508 9.79841C20.4687 11.4668 19.0158 12.8445 17.2944 13.7805C17.1011 15.2744 16.681 16.8492 16.0799 18.3021Z"
                            fill="green"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M17.4148 11.9511C18.9012 10.9367 20.0999 9.51585 20.8569 7.84164C19.5984 5.05847 17.1158 2.97347 14.1199 2.29511C14.911 3.2761 15.5688 4.46106 16.0799 5.69662C16.9203 7.72786 17.4069 9.99758 17.4148 11.9511Z"
                            fill="green"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M9.3035 6.27003C10.0004 4.58556 10.9365 3.14358 11.9986 2.25C13.0608 3.14358 13.9969 4.58556 14.6938 6.27003C15.4761 8.16121 15.9147 10.2571 15.9147 11.9993C15.9147 12.26 15.9049 12.5287 15.8856 12.8033C14.694 13.3321 13.3792 13.625 11.9986 13.625C10.618 13.625 9.30329 13.3321 8.11167 12.8033C8.09234 12.5287 8.08252 12.26 8.08252 11.9993C8.08252 10.2571 8.52111 8.16121 9.3035 6.27003Z"
                            fill="green"
                          />
                          <path
                            d="M11.9986 15.125C13.2807 15.125 14.5119 14.907 15.6587 14.5059C15.4523 15.5799 15.1253 16.6854 14.6938 17.7287C13.9969 19.4131 13.0608 20.8551 11.9986 21.7487C10.9365 20.8551 10.0004 19.4131 9.3035 17.7287C8.87192 16.6854 8.54495 15.5799 8.3385 14.5059C9.48539 14.907 10.7166 15.125 11.9986 15.125Z"
                            fill="green"
                          />
                        </svg>
                      </figure></div>
              <div className=''>
                <h3 className='md:text-xl font-semibold'>24/7 support</h3>
                <p>We are always here to help</p>
              </div>
            </div>
            <div className='flex md:gap-4  gap-2 items-center'>
            <div>
            <figure className=" mb-0">
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 24 24"
                          fill="green"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.55681 21.7488H15.443C17.9932 21.7488 19.2684 21.7488 19.8663 21.0613C20.054 20.8455 20.1933 20.5919 20.2746 20.3176C20.5338 19.4441 19.8493 18.3682 18.4804 16.2165L18.3427 16C15 19.5 9 19.5 5.65709 16L5.51933 16.2166C4.15054 18.3683 3.46614 19.4441 3.72526 20.3176C3.80662 20.5919 3.94586 20.8455 4.1336 21.0614C4.73154 21.7488 6.00663 21.7488 8.55681 21.7488Z"
                            fill="green"
                            fillOpacity="0.25"
                          />
                          <path
                            d="M19.5 9.75C19.5 12.0563 18.459 14.1195 16.8212 15.4953C15.5176 16.5904 13.8358 17.25 12 17.25C10.164 17.25 8.48209 16.5903 7.17838 15.495C5.54084 14.1192 4.5 12.0561 4.5 9.75C4.5 5.60786 7.85786 2.25 12 2.25C16.1421 2.25 19.5 5.60786 19.5 9.75Z"
                            fill="green"
                          />
                        </svg>
                      </figure>
            </div>
              <div>
                <h3 className='md:text-xl font-semibold'>Award Winning agency</h3>
                <p>You are in safe hand</p>
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex justify-center items-center md:flex-1  md:w-auto">
          <div className="relative max-w-md w-full">
            {/* Dots decoration behind the main image */}
            

            {/* Main Image */}
            <Image
              src="/hero-img.jpg" // Replace with actual path
              width={600}
              height={400}
              alt="Laptop and plant on table"
              className="rounded-lg w-full relative z-10"
            />

            {/* Top Card - Meeting With */}
            <div className="absolute -top-5 -right-4 sm:-right-8  bg-white text-black p-6 rounded-lg shadow-lg flex  space-x-2 z-20 flex-col gap-2 border">
              
              <div>
                ⭐ trustpilot
              </div>
              <div className="flex items-center">
                  <img
                    src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='200px'%20height='37.5px'%20viewBox='0%200%20200%2037.5'%20style='enable-background:new%200%200%20200%2037.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2300B67A;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M0,0h37.5v37.5H0V0z%20M40.6,0h37.5v37.5H40.6V0z%20M81.3,0h37.5v37.5H81.3V0z%20M121.9,0h37.5v37.5h-37.5V0z%20M162.5,0H200v37.5h-37.5V0z'/%3e%3c/g%3e%3cpath%20class='st1'%20d='M18.8,25.3l5.7-1.4l2.4,7.3L18.8,25.3z%20M31.9,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L31.9,15.8z%20M59.4,25.3l5.7-1.4l2.4,7.3L59.4,25.3z%20M72.5,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6%20L72.5,15.8z%20M100,25.3l5.7-1.4l2.4,7.3L100,25.3z%20M113.1,15.8h-10L100,6.3l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L113.1,15.8%20z%20M140.6,25.3l5.7-1.4l2.4,7.3L140.6,25.3z%20M153.8,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L153.8,15.8z%20M181.3,25.3l5.7-1.4l2.4,7.3L181.3,25.3z%20M194.4,15.8h-10l-3.1-9.5l-3.1,9.5h-10l8.1,5.9l-3.1,9.5l8.1-5.9l5-3.6L194.4,15.8z'/%3e%3c/g%3e%3c/svg%3e"
                    className="h-30px"
                    alt="rating-img"
                  />
                  <h6 className="font-semibold ml-2">4.8/5.0</h6>
                </div>
                  <div>
                    Reviewed by 365+ users
                  </div>
            </div>

            {/* Bottom Card - Customer Satisfaction */}
            <div className="absolute bottom-5 -left-3 sm:-left-28 bg-slate-900 text-white  rounded-lg shadow-lg w-60 sm:w-64 z-20 p-6">
              <p className="text-xs sm:text-lg font-semibold">Our Lovely Customers</p>
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
  

  {/* Logos */}
 
</div>



    </div>
  );
}
