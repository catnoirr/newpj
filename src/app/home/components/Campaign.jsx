import React from 'react';
// Import icon library if available
import { FaShare,FaPaperPlane } from 'react-icons/fa';

const Campaigns = () => {
  const campaigns = [
    {
      title: "Chai Buzz",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "./screenshot1.png", // Replace with actual image path
      status: "Ongoing",
      rating: 4.5,
    },
    {
      title: "Chai Buzz",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "./screenshot1.png", // Replace with actual image path
      status: "Ongoing",
      rating: 4.5,
    },
    {
      title: "Chai Buzz",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "./screenshot1.png", // Replace with actual image path
      status: "Ongoing",
      rating: 4.5,
    },
    {
      title: "Launch Google Ads",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "/./screenshot1.png", // Replace with actual image path
      status: "Upcoming",
      rating: 4.7,
    },
    {
      title: "Launch Google Ads",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "/./screenshot1.png", // Replace with actual image path
      status: "Upcoming",
      rating: 4.7,
    },
    {
      title: "Launch Google Ads",
      location: "Malviya Nagar Jaipur Rajasthan",
      discount: "Get up to 100 off on any product",
      expiry: "Offer Till – 23rd Dec",
      img: "/./screenshot1.png", // Replace with actual image path
      status: "Upcoming",
      rating: 4.7,
    },
  ];

  return (
    <div className="p-8">
      {/* Ongoing Campaigns */}
      <div className="mb-8 relative">
        <h2 className="text-xl font-bold mb-4">Ongoing Campaigns</h2>
        <button className="absolute -top-5 right-0 text-black border border-black p-3 font-medium rounded-lg hover:bg-blue-600 hover:text-white">
          View All
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-16">
          {campaigns
            .filter((campaign) => campaign.status === "Ongoing")
            .map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} />
            ))}
        </div>
      </div>

      {/* Upcoming Campaigns */}
      <div className="relative">
        <h2 className="text-xl font-bold mb-4">Upcoming Campaigns</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {campaigns
            .filter((campaign) => campaign.status === "Upcoming")
            .map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} />
            ))}
        </div>
      </div>
    </div>
  );
};

const CampaignCard = ({ campaign }) => (
  <div className="border rounded-lg shadow-lg overflow-hidden relative">
    <img src={campaign.img} alt={campaign.title} className="w-full h-60 object-cover" />

    {/* Top-right icons */}
    

    <div className="p-4">
        <div className='flex justify-between'>
            <div>
      <h3 className="text-2xl font-semibold text-purtle-200">{campaign.title}</h3>
      <p className="text-gray-500 text-sm">{campaign.location}</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
      <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
        {campaign.rating}★
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        {/* Share Icon */}
       
        <FaShare/>
      </button>
      
      </div>
      </div>

      {/* Discount Text */}
      <p className="text-gray-700 mt-2 font-medium">{campaign.discount}</p>
      <p className="text-gray-400 text-xs">{campaign.expiry}</p>

      {/* View Offers Button with Share (Plane) Icon */}
      <div className="flex items-center justify-between mt-4 gap-5">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl  transition">
          View Offers
        </button>
        <button className="ml-2 text-white bg-blue-600 rounded-full  p-3">
          {/* Plane Icon (Share) */}
          
          <FaPaperPlane/>
        </button>
      </div>
    </div>
  </div>
);

export default Campaigns;
