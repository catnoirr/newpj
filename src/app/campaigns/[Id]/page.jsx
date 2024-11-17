"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { db } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// Vendor Detail Component
const VendorDetail = ({ vendor }) => (
  <div className="flex gap-4">
    <span className="font-semibold">{vendor.vendorId}</span>
    <div>
      <p><strong>Business Name:</strong> {vendor.businessName}</p>
      <p><strong>Business Category:</strong> {vendor.businessCategory}</p>
      <p><strong>Address:</strong> {vendor.address}</p>
      <p><strong>Opening Hours:</strong> {vendor.openingHours}</p>
      <p><strong>Closing Hours:</strong> {vendor.closingHours}</p>
      <p><strong>Google Map Link:</strong> {vendor.googleMapLink}</p>
    </div>
  </div>
);

const CampaignPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vendorDetails, setVendorDetails] = useState([]); // Store vendor address, openingHours, and closingHours

  // Fetch campaign details
  useEffect(() => {
    if (!id) return;

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
          });
        }
      }

      setVendorDetails(vendorDetailsList);
    };

    fetchVendorDetails();
  }, [campaign]);

  if (loading) return <div>Loading campaign details...</div>;
  if (error) return <div>{error}</div>;

  const vendors = campaign.vendors || [];
  const firstVendor = vendorDetails.length > 0 ? vendorDetails[0] : {};

  // Handle Back Button Click
  const handleBackClick = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <div>
        <div className="flex items-center gap-4">
          <button onClick={handleBackClick}>
            <FaArrowLeft className="text-xl" />
          </button>
          <h1 className="text-3xl font-semibold">{campaign.campaignName || "Campaign"}</h1>
        </div>
        <div className="bg-white p-2 my-3 max-w-96">
          Home / India / {campaign.city || "Unknown City"} / {campaign.region || "Unknown Region"}
        </div>
      </div>

      <div className="mx-auto bg-white shadow-lg rounded-lg flex gap-10 flex-col md:flex-row">
        <div>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start">
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <div className="rounded-3xl">
                      <img
                        src={campaign.adCreative || "./cafelogo.png"}
                        alt={campaign.campaignName || "Campaign Logo"}
                        className="w-20 h-20 bg-beige-400 rounded-2xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {firstVendor.businessName || "Business Name"}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {firstVendor.businessCategory || "Business Category"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {firstVendor.address || "Address not available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-600 text-white w-16 p-1 rounded-lg text-center">
                      ★ {campaign.rating || "N/A"}
                    </div>
                    <div className="text-sm">{campaign.scans || "0"}+ Scans</div>
                    <div className="relative -right-5 text-2xl mt-2">
                      <button>
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{campaign.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800">Vendor Details</h3>
          <div className="space-y-4">
            {vendorDetails.length === 0 ? (
              <p>No vendor details available</p>
            ) : (
              vendorDetails.map((vendor, index) => (
                <VendorDetail key={index} vendor={vendor} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
