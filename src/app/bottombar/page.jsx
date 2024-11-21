"use client"
import React, { useState } from "react";
import "./styles.css"; // Assuming you have a similar CSS file for styling
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const MagicMenuIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container ">
    <div className="navigation mt-16">
      <ul>
        <li
          className={`list ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => { handleSetActive(0); router.push('/'); }}
        >
          <a>
            <span className="icon"><FaHome/></span>

            <span className=" text  mt-4 ml-1 ">Home</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => { handleSetActive(1); router.push('/about'); }}
        >
          <a>
            <span className="icon"><FaFileAlt /></span>
            <span className="text mt-4 ml-1">Advertise</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => { handleSetActive(2); router.push('/CampusAmbassador'); }}
        >
          <a>
            <span className="icon"><FaUser /></span>
            <span className="text mt-4 ml-1">About</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => { handleSetActive(3); router.push('/blogs'); }}
        >
          <a>
            <span className="icon"><FaSignInAlt /></span>
            <span className="text mt-4 ml-1">Sign In</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => { handleSetActive(4); router.push('/engagements'); }}
        >
          <a>
            <span className="icon"><FaSignOutAlt /></span>
            <span className="text mt-4 ml-1">Sign Out</span>
          </a>
        </li>
        <div className="indicator " style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}></div>
      </ul>
    </div>
    </div>
  );
};

export default MagicMenuIndicator;
