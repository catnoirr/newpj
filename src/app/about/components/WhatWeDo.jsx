import React from 'react';

const CampusImpact = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-4 md:p-8">
      {/* Main container with left and right content */}
      <div className="flex flex-col-reverse lg:flex-row items-start w-full max-w-7xl p-4 md:p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">

          {/* Right content - Image with overlay */}
          <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="image 44.png" // replace with the actual path to your image
            alt="Laptop with notebook"
            className="w-full h-auto md:w-[500px] lg:w-[666px] object-cover "
          />
        
        </div>
        
        {/* Left content */}
        <div className="lg:w-1/2 bg-gray-100">
         
          
          {/* Mission card */}
          <div className="bg-gray-200 p-4 md:p-6 sm:h-[600]">
          
            <h1 className='text-center md:text-5xl text-4xl font-semibold p-10'>What We Do?</h1>

            <p className="text-black mb-4 text-sm md:text-base">
            Oohpoint places interactive advertisements in various vendor locations, allowing brands to connect directly with consumers in an innovative way. Consumers simply interact with the ads, and in return, they receive instant discounts or rewards. This unique model bridges the gap between traditional offline advertising and modern digital engagement, ensuring every interaction is both valuable and measurable.
            </p>
            <div className='flex justify-end'>
           
            <div className='relative md:top-10 top-4'><img src="designer-working.png " alt="" className='w-48'/></div>

            </div>
            
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default CampusImpact;
