import React from 'react';

const PlantDiagnosis = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white max-w-7xl mx-auto border">
      {/* Left Section - Text */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get accurate plant diagnoses in an instant with Mizzle.
        </h1>
        <p className="text-gray-600 mb-6">
          Download the app for free and get access to accurate plant diagnoses with no extra charges.
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="#!" className="inline-block">
            <img src="path-to-google-play-image" alt="Download on Google Play" className="h-12"/>
          </a>
          <a href="#!" className="inline-block">
            <img src="path-to-app-store-image" alt="Download on App Store" className="h-12"/>
          </a>
        </div>
        <p className="text-gray-500 text-sm mb-4">Global Partners:</p>
        <div className="flex space-x-3">
          <i className="fab fa-facebook fa-lg text-gray-500"></i>
          <i className="fab fa-twitter fa-lg text-gray-500"></i>
          <i className="fab fa-instagram fa-lg text-gray-500"></i>
          <i className="fab fa-google fa-lg text-gray-500"></i>
          <i className="fab fa-apple fa-lg text-gray-500"></i>
        </div>
      </div>

      {/* Right Section - Images */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
        <img 
          src="mobilephone.png" 
          alt="Phone screen 1" 
          className="w-40 md:w-56 lg:w-64 transform rotate-[-10deg]"
          style={{ position: 'absolute', left: '30%', top: '-20%' }}
        />
        {/* <img 
          src="path-to-image2" 
          alt="Phone screen 2" 
          className="w-40 md:w-56 lg:w-64 transform rotate-[10deg] shadow-lg"
          style={{ position: 'absolute', right: '30%', top: '10%' }}
        /> */}
      </div>
    </div>
  );
};

export default PlantDiagnosis;
