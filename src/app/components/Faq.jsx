'use client'
import React, { useState } from 'react';

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-gray-100   flex items-center justify-center sm:ml-20">
      <div className="bg-white p-8  shadow-lg  flex flex-col sm:gap-14 sm:flex-row ">
        <div className="flex-1">
            <h1 className="text-2xl font-bold text-purple-900 mb-4">Digital Marketing FAQs</h1>
        <p className="text-gray-600 mb-6">
          As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
        </p>
        
        <div className="flex sm:gap-28 gap-5  mb-8 ">
          <button className="text-purple-700 font-semibold hover:border hover:rounded-full hover:p-3 hover:border-purple-900">More Questions</button>
          <button className="text-purple-700 font-semibold hover:border hover:rounded-full hover:p-3 hover:border-purple-900">Contact Us</button>
        </div>
        </div>

        <div className="space-y-4 flex-1" >
          <div>
            <button
              onClick={() => toggle(0)}
              className="flex justify-between items-center w-full text-left font-semibold text-purple-900 py-2 border-b border-gray-200 "
            >
              What is Oohpoint?
              <span>{open === 0 ? '-' : '+'}</span>
            </button>
            {open === 0 && (
              <p className="text-gray-600 mt-2">
                Oohpoint allows you to discover new brands through engaging campaigns and earn rewards like discounts or free products for participating.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle(1)}
              className="flex justify-between items-center w-full text-left font-semibold text-purple-900 py-2 border-b border-gray-200"
            >
              How does Oohpoint benefit me?
              <span>{open === 1 ? '-' : '+'}</span>
            </button>
            {open === 1 && (
              <p className="text-gray-600 mt-2">
                Through Oohpoint, you can gain access to exclusive rewards and promotions, helping you save money while exploring new brands.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle(2)}
              className="flex justify-between items-center w-full text-left font-semibold text-purple-900 py-2 border-b border-gray-200"
            >
              Is it free to sign up and use Oohpoint?
              <span>{open === 2 ? '-' : '+'}</span>
            </button>
            {open === 2 && (
              <p className="text-gray-600 mt-2">
                Yes, signing up for Oohpoint and participating in campaigns is completely free.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle(3)}
              className="flex justify-between items-center w-full text-left font-semibold text-purple-900 py-2 border-b border-gray-200"
            >
              Where can I find Oohpoint campaigns?
              <span>{open === 3 ? '-' : '+'}</span>
            </button>
            {open === 3 && (
              <p className="text-gray-600 mt-2">
                Oohpoint campaigns can be found on their official website or app, where you can browse current offers and participate.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
