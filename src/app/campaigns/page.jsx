import React from "react";
import {FaArrowLeft,FaShareAlt} from 'react-icons/fa'

const CampaignPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
        <div>
            <div className="flex items-center gap-4 ">
               <button><FaArrowLeft className="text-xl"/></button>
               <h1 className="text-3xl font-semibold">Campaign</h1>
            </div>
            <div className="bg-white p-2 my-3 max-w-96">
             Home / India / Mumbai / Pawai / Meat&Fish Shops
            </div>
        </div>
      <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex gap-10">
        <div>
        <div className="p-6 border-b border-gray-200">
          {/* Campaign Header */}
          <div className="flex items-start">
            <div className="w-full">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <div className=" rounded-3xl">
                        <img src="./cafelogo.png" alt=""  className="w-20 h-20 bg-beige-400 rounded-2xl"/>
                        </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">Chai Buzz</h2>
              <p className="text-sm text-gray-600">Cafes & Restaurants </p>
               <p className="text-sm text-gray-600"> Malviya Nagar, Jaipur, Rajasthan</p>
              </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="bg-blue-600 text-white w-16 p-1 rounded-lg text-center">
                ★ 4.5
                </div>
                <div className="text-sm">1200+ Scans</div>
                <div className="relative -right-5 text-2xl  mt-2">
                    <button><FaShareAlt/></button>
                </div>
              </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Founded with a vision to reshape the advertising industry, Oohpoint stated with the idea that offline
                spaces are filled with untapped opportunities for brand engagement. Recognizing the limitations of
                traditional billboards and print ads, we set out to create a platform that makes advertising more
                interactive, rewarding, and relevant for both brands and consumers. Today, we're working with businesses
                across industries to make their advertising campaigns more engaging and effective.
              </p>
              {/* <button className="mt-4 text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-4 py-2">
                Visit Now
              </button> */}
            </div>
            {/* <div className="ml-6">
              <div className="relative w-40 h-40 bg-gray-300 rounded-lg overflow-hidden">
                
                <img src="/path/to/image.jpg" alt="Campaign" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center text-white">
                  +
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="p-6 bg-blue-600  space-x-4 text-white flex justify-between">
            <div className="">
          <button className="px-4 py-2 font-medium">Overview</button>
          <button className="px-4 py-2 font-medium">Offers</button>
          <button className="px-4 py-2 font-medium">Reviews</button>
          <button className="px-4 py-2 font-medium">Images</button>
          </div>
          <button className="px-4 py-2 font-medium border p-3 border-gray-500 rounded">Visit Site</button>
        </div>

        {/* Products Available */}
        <div className="p-6 py-16 bg-gray-50  ">
          <h3 className="text-lg font-bold text-gray-800">Products Available</h3>
          <div className="flex justify-between p-4">
            <div >
                <img src="./coffe.png" alt="coffeelogo" className="p-6 rounded-full products" />
            </div>
            <div>
                <img src="./pastries.png" alt="pastries logo" className="p-6 rounded-full products" />
            </div>
            <di>
                <img src="./sandwitches.png" alt="sandwitches logo" className="p-3 px-4 rounded-full products" />
            </di>
            <div>
                <img src="./coffe.png" alt="coffeelogo" className="p-6 rounded-full products" />
            </div>
            <div>
                <img src="./pastries.png" alt="pastries logo" className="p-6 rounded-full products" />
            </div>
            <div>
                <img src="./sandwitches.png" alt="sandwitches logo"  className="p-3 px-4 rounded-full products"/>
            </div>
           
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex justify-between">
        <div className="p-6  ">
          <h3 className="text-lg font-bold text-gray-800">Opening Hours</h3>
          <div className="grid grid-cols-1 gap-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
              <div key={index} className="flex justify-between items-center text-gray-600 gap-16">
                <span>{day}</span>
                <span>8:00 AM – 10:00 PM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Products */}
        <div className="p-6 flex  flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800">Types Of Products</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Earphones", "Headphones", "Mobile Cover", "Mobile Charger", "Data Cable"].map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-2 rounded-md  text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        </div>
        </div>

        {/* Additional Information */}
        <div className="flex flex-col w-10/12 gap-20 items-center ">
        <div className="p-6 bg-green-100 text-green-700 rounded-lg mt-4">
          <p>Join Oohpoint Official WhatsApp Channel for Regular Updates and Discounts</p>
          <button className="mt-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg px-4 py-2">
            Join Now
          </button>
        </div>

        {/* Verified Vendor */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800">Verified Vendor</h3>
          <p className="text-gray-600">
            4979, Ram Dwara Road, Nehru Bazar, Pahar Ganj, Multani Dhanda, Chuna Mandi, New Delhi
          </p>
          <button className="mt-4 text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-4 py-2">
            Visit Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
