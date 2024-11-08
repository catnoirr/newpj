import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center md:mb-32 mb-12">How It Works?</h2>
        
        <div className="relative flex flex-col md:flex-row items-center  justify-center bg-purple-900">
          {/* Left Steps */}
          <div className="flex flex-col items-center md:items-end space-y-8 md:space-y-12 md:mr-16">
            {/* Step 1 */}
            <div className="bg-purple-900 text-white p-6 rounded-md  max-w-xs mx-auto">
      {/* Step Number Box */}
      <div className="  h-8 flex items-center justify-end w-full rounded-md mb-4 mx-auto">
        <p className="text-sm font-bold bg-purple-800 p-3 py-2 rounded-md ">1</p>
      </div>

      {/* Main Text */}
      <h3 className="text-lg font-semibold mb-2">Submit Your Event Details</h3>
      <p className="text-xs text-gray-300">
        Provide your event information in our easy-to-use form.
      </p>
    </div>
            
            {/* Step 2 */}
            
              <div className="bg-purple-900 text-white p-6 rounded-md  max-w-xs mx-auto">
      {/* Step Number Box */}
      <div className="  h-8 flex items-center justify-end w-full rounded-md mb-4 mx-auto">
        <p className="text-sm font-bold bg-purple-800 p-3 py-2 rounded-md ">2</p>
      </div>

      {/* Main Text */}
      <h3 className="text-lg font-semibold mb-2">Discuss Sponsorship Options</h3>
      <p className="text-xs text-gray-300">
      We’ll reach out to understand your event’s needs.
      </p>
    </div>
          </div>

          {/* Mobile Device Image */}
          <div className="relative mx-auto my-8 md:my-0 md:bottom-32">
            <img src="/mobile.png" alt="Dashboard" className="w-64 md:w-80  rounded-lg" />
            {/* Rating */}
            <div className="text-center mt-4">
              <p className="text-yellow-500 text-lg font-bold">★★★★☆</p>
              <p className="text-sm text-white">4.5 / 5.0 Rating on Google</p>
              <p className="text-xs text-gray-500">365 Ratings & Reviews</p>
            </div>
          </div>

          {/* Right Steps */}
          <div className="flex flex-col items-center md:items-start space-y-8 md:space-y-12 md:ml-16">
            {/* Step 3 */}
            {/* <div className="bg-purple-800 text-white rounded-md p-4  max-w-xs">
              <h3 className="text-lg font-bold mb-2">3</h3>
              <p className="text-sm font-semibold">Get Sponsored</p>
              <p className="text-xs mt-1">Partner with OohPoint for exclusive sponsorship benefits.</p>
            </div> */}
             <div className="bg-purple-900 text-white p-6 rounded-md  max-w-xs mx-auto">
      {/* Step Number Box */}
      <div className="  h-8 flex items-center justify-start w-full rounded-md mb-4 mx-auto">
        <p className="text-sm font-bold bg-purple-800 p-3 py-2 rounded-md ">3</p>
      </div>

      {/* Main Text */}
      <h3 className="text-lg font-semibold mb-2">Get Sponsored</h3>
      <p className="text-xs text-gray-300">
      Partner with OohPoint for exclusive sponsorship benefits.      </p>
    </div>

            {/* Step 4 */}
            {/* <div className="bg-purple-800 text-white rounded-md p-4  max-w-xs">
              <h3 className="text-lg font-bold mb-2">4</h3>
              <p className="text-sm font-semibold">Boost Event Impact</p>
              <p className="text-xs mt-1">Receive promotional materials, QR campaigns, and more.</p>
            </div> */}
             <div className="bg-purple-900 text-white p-6 rounded-md  max-w-xs mx-auto">
      {/* Step Number Box */}
      <div className="  h-8 flex items-center justify-start w-full rounded-md mb-4 mx-auto">
        <p className="text-sm font-bold bg-purple-800 p-3 py-2 rounded-md ">3</p>
      </div>

      {/* Main Text */}
      <h3 className="text-lg font-semibold mb-2">Boost Event Impact</h3>
      <p className="text-xs text-gray-300">
      Receive promotional materials, QR campaigns, and more.      </p>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
