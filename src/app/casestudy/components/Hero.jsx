import React from 'react';
import { FaAndroid, FaApple, FaSlack, FaGoogle, FaGitAlt } from "react-icons/fa";


const PlantDiagnosis = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white max-w-7xl mx-auto border">
      {/* Left Section - Text */}
      <div className="lg:w-1/2">
        <h1 className="text-5xl leading-relaxed font-bold text-gray-900 mb-4">
          Get accurate plant diagnoses in an instant with Mizzle.
        </h1>
        <p className="text-gray-600 mb-6">
          Download the app for free and get access to accurate plant diagnoses with no extra charges.
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="#!" className="inline-block">
            <img src="./google play.png" alt="Download on Google Play" className=""/>
          </a>
          <a href="#!" className="inline-block">
            <img src="apple logo.png" alt="Download on App Store" className=""/>
          </a>
         
        </div>
        <div className='flex gap-10 items-center '>
        <p className="  text-2xl font-semibold">Global Partners:</p>
        <div className="flex space-x-3">
        <div className=' rounded-full p-2 shadow-xl border'><FaAndroid /></div>
        <div className=' rounded-full p-2 shadow-xl border'><FaApple /></div>
        <div className=' rounded-full p-2 shadow-xl border'><FaSlack />         </div>
       <div className=' rounded-full p-2 shadow-xl border'><FaGoogle />  </div>       
        <div className=' rounded-full p-2 shadow-xl border'><FaGitAlt /> </div>      
         </div>
         </div>

      </div>

      {/* Right Section - Images */}
      <div className="flex justify-center items-center">
        <img 
          src="boyblog.png" 
          alt="Phone screen 1" 
          className="w-4/5 transform"
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
