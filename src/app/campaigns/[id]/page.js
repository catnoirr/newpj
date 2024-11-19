"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { db } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { FaUtensils,  FaBreadSlice,FaConciergeBell,FaPizzaSlice,FaMugHot } from "react-icons/fa";

// Vendor Detail Component
//ready to push

const CampaignPage = () => {
  
  // Function to handle active tabs
  const [activeTab, setActiveTab] = useState("");
 
  // const handleActiveTab = (tab) => {
  //   setActiveTab(tab);
  // };
  const { id } = useParams();
  const router = useRouter();

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vendorDetails, setVendorDetails] = useState([]); // Store vendor address, openingHours, and closingHours

  // Fetch campaign details
  useEffect(() => {
    if (!id) return;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchCampaign = async () => {
      try {
        setLoading(true);
        const campaignRef = doc(db, "campaigns", id);
        const campaignSnapshot = await getDoc(campaignRef);

        if (campaignSnapshot.exists()) {
          setCampaign({ id: campaignSnapshot.id, ...campaignSnapshot.data() });
        } else {
          setError("Campaign not found.");
        }
      } catch (err) {
        console.error("Error fetching campaign:", err);
        setError("An error occurred while fetching the campaign.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  // Fetch vendor details (address, openingHours, closingHours) when campaign data is available
  useEffect(() => {
    const fetchVendorDetails = async () => {
      if (!campaign || !campaign.vendors || campaign.vendors.length === 0) return;

      const vendorIds = campaign.vendors.map((vendor) => vendor.vendorId);
      const vendorDetailsList = [];

      for (const vendorId of vendorIds) {
        const vendorRef = doc(db, "vendors", vendorId);
        const vendorSnapshot = await getDoc(vendorRef);

        if (vendorSnapshot.exists()) {
          vendorDetailsList.push({
            vendorId: vendorId,
            businessName: vendorSnapshot.data().businessName || "Business Name not available",
            businessCategory: vendorSnapshot.data().businessCategory || "Business Category not available",
            address: vendorSnapshot.data().address || "Address not available",
            openingHours: vendorSnapshot.data().openingHours || "Opening hours not available",
            closingHours: vendorSnapshot.data().closingHours || "Closing hours not available",
            googleMapLink: vendorSnapshot.data().googleMapLink || "Google Map Link not available",
            operatingDays: vendorSnapshot.data().operatingDays || "Operating days not available",
            whatsapp: vendorSnapshot.data().whatsapp || "WhatsApp not available",
            shopImage: vendorSnapshot.data().shopImage || "Shop Image not available",
            keyProducts: vendorSnapshot.data().keyProducts || "Key products not available",
          });
        } else {
          vendorDetailsList.push({
            vendorId: vendorId,
            businessName: "Business Name not found",
            businessCategory: "Business Category not found",
            address: "No address found for this vendor",
            openingHours: "Opening hours not found",
            closingHours: "Closing hours not found",
            googleMapLink: "Google Map Link not found",
            operatingDays: "Operating days not found",
            whatsapp: "WhatsApp not found",
            shopImage: "Shop Image not found",
            keyProducts: "Key products not found",
          });
        }
      }

      setVendorDetails(vendorDetailsList);
    };

    fetchVendorDetails();
  }, [campaign]);

  if (loading) {
    return (
      <div className="relative inset-0 flex justify-center items-center bg-gray-200 h-screen">
        <div className=" h-full bg-gradient-to-r from-transparent  animate-gradient-x rounded-md overflow-hidden p-4 flex justify-center items-center">
          {/* <FaMugHot className="text-4xl text-gray-500 blink" /> */}
          <img src="/logo.png" alt="Loading..." className="w-16 h-16 blink"/>
        </div>
      </div>
    );
  }
  if (error) return <div>{error}</div>;

  // const vendors = campaign.vendors || [];
  const firstVendor = vendorDetails.length > 0 ? vendorDetails[0] : {};

  // Handle Back Button Click
  const handleBackClick = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2">
        <div>
            <div className="flex items-center gap-4 ">
               <button><FaArrowLeft className="text-xl md:hidden" onClick={handleBackClick}/></button>
               <h1 className="text-3xl font-semibold">{campaign.campaignName}</h1>
            </div>
            <div className="bg-white p-2 my-3 max-w-80">
             Home / Campaigns / {campaign.campaignName}
            </div>
        </div>
      <div className=" mx-auto shadow-lg rounded-lg  flex gap-10  flex-col md:flex-row  ">
        <div>
          <div className="flex items-start bg-white">
        <div className="p-6 border-2 shadow-lg  ">
          {/* Campaign Header */}
            <div className="w-full">
            <div className="flex justify-between">
                <div className="flex gap-3 ">
                    <div className=" rounded-3xl ">
                        <img src={campaign.adCreative} alt=""  className="w-20 h-20 bg-beige-400 object-cover rounded-2xl "/>
                        </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {firstVendor.businessName ? firstVendor.businessName : <span className="blink">Loading..</span>}
                </h2>
              <p className="text-sm text-gray-600">
                {firstVendor.businessCategory ? firstVendor.businessCategory : <span className="blink"></span>}
              </p>
              <p className="text-sm text-gray-600">
                {firstVendor.address ? firstVendor.address : <span className="blink"></span>}
              </p>
              <p className="text-sm text-gray-600">
                Vendor ID: {firstVendor.vendorId ? firstVendor.vendorId : <span className="blink"></span>}
              </p>
              </div>
              </div>

            
              <div className="flex flex-col justify-center items-center">
                <div className="bg-blue-600 text-white w-16 p-1 rounded-lg text-center">
                ★ 4.5
                </div>
                <div className="text-sm">
                  {Array.isArray(campaign.ipAddress) ? `${campaign.ipAddress.length}+ Scans` : "0 Scans"}
                </div>
                <div className="relative -right-5 text-2xl mt-2">
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
        <div className="p-6 bg-blue-600  space-x-4 text-white flex justify-between flex-col md:flex-row">
          <div className="flex gap-4 ">
            <button className="px-4 py-2 font-medium border-2 rounded-full hover:border-gray-500" onClick={() => setActiveTab('overview')}>Overview</button>
            <button className="px-4 py-2 font-medium border-2 rounded-full hover:border-gray-500 " onClick={() => setActiveTab('offers')}>Offers</button>
            <button className="px-4 py-2 font-medium border-2 rounded-full hover:border-gray-500 " onClick={() => setActiveTab('images')}>Images</button>
          </div>
          {/* <button className="px-4 py-2 font-medium border p-3 border-gray-500 rounded" onClick={() => window.location.href = firstVendor.website}>Visit Site</button> */}
        </div>

        {/* Content based on active tab */}
        {(!activeTab || activeTab === 'overview') && (
          <div className="border-2 shadow-lg ">
            {/* Products Available */}
            <div className="p-6 py-16 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">Products Available</h3>
              <div className="flex justify-between py-4 md:flex-row items-center gap-2 flex-wrap">
                {firstVendor.keyProducts ? (
                  firstVendor.keyProducts.split(",").map((item, index) => (
                    <div className="flex flex-col items-center gap-2" key={index}>
                      <div className="border-4 md:p-6 p-4 rounded-full shadow-lg text-center flex flex-col items-center">
                        {index === 0 && <FaUtensils className="md:text-4xl text-xl " />}
                        {index === 1 && <FaConciergeBell className="md:text-4xl text-xl" />}
                        {index === 2 && <FaBreadSlice className="md:text-4xl text-xl" />}
                        {index === 3 && <FaPizzaSlice className="md:text-4xl text-xl" />}
                        {index === 4 && <FaMugHot className="md:text-4xl text-xl" />}
                      </div>
                      <div className="text-sm ">{item}</div>
                    </div>
                  ))
                ) : (
                  <div className="border-4 md:p-6 p-4 rounded-full shadow-lg text-center">
                    <FaUtensils className="md:text-4xl text-xl blink" />
                  </div>
                )}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-20 flex-col md:flex-row bg-white">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Opening Hours <span className="text-gray-600 text-sm ">({firstVendor.operatingDays})</span></h3>
                {firstVendor.operatingDays === "All Days" || firstVendor.operatingDays === "Everyday" || firstVendor.operatingDays === "All Day" ? (
                  <div className="grid grid-cols-1 gap-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                      <div key={index} className="flex justify-between items-center text-gray-600 gap-16">
                        <span>{day}</span>
                        <span>
                          {firstVendor.openingHours && firstVendor.closingHours && `${new Date(`1970-01-01T${firstVendor.openingHours}Z`).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })} : ${new Date(`1970-01-01T${firstVendor.closingHours}Z`).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}`}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p>Operating Days: {firstVendor.operatingDays}</p>
                    <div className="grid grid-cols-1 gap-4">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                        <div key={index} className="flex justify-between items-center text-gray-600 gap-16">
                          <span>{day}</span>
                          <span>08:00 AM - 5:00 PM</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Types of Products */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-gray-800">Types Of Products</h3>
                {firstVendor.keyProducts && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {firstVendor.keyProducts.split(',').map((item) => (
                      <span key={item} className="bg-blue-100 text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'offers' && (
          <div className="flex flex-col gap-4 w-full p-4 border-2 shadow-lg bg-white">
            <div className="flex justify-between items-center text-2xl">
              <h1>Get <span className="font-bold">{campaign.vendors?.[0]?.firstPrize}</span> off on any items of ChaiBuzz</h1>
              <img src="/shopoffer.png" alt=" " />
            </div>
            <div className="flex justify-end">T&C Applied</div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className="flex flex-col gap-4 w-full p-4 border-2 shadow-lg bg-white">
            {/* Implement image gallery here */}
            <div className="flex  items-center flex-wrap gap-10 flex-col md:flex-row ">
            <div className="border-2 rounded "><img src={firstVendor.shopImage}  alt="shop image" className="object-contain w-60 h-60" /></div>
            <div className="border-2 rounded "><img src={campaign.adCreative} alt=""  className="object-contain w-60 h-60 "/></div>
          </div>       
             </div>
        )}
        </div>

        {/* Additional Information */}
        <div className="flex flex-col md:w-10/12 gap items-center p-4 py-0 ">
        {firstVendor.shopImage && (
          <div className="w-full">
            <img src={firstVendor.shopImage}  alt="shop image" className="w-full h-64   object-cover " />
          </div>
        )}

        <div className="p-6 bg-green-500 text-white rounded-lg mt-4">
          <p>Join the Oohpoint Official WhatsApp Channel to keep yourself updated and offer you exclusive discounts!</p>
          <button
            onClick={() => router.push(firstVendor.whatsapp)}
            className="mt-2 text-white border hover:bg-green-700 font-medium rounded-lg px-4 py-2"
          >
            Join Now
          </button>
        </div>

        {/* Verified Vendor */}
        <div className="p-6 bg-white">
          <h3 className="text-lg font-bold text-gray-800">Verified Vendor</h3>
          <p className="text-gray-600">
            {firstVendor.address }
          </p>
          <p>Location : {firstVendor.googleMapLink}
          </p>
          <button className="mt-4 text-white bg-blue-600 hover:bg-purple-700 font-medium rounded-lg px-4 py-2">
            Visit Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
