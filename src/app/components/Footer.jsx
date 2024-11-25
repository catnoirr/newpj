"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleNavigation = (path) => {
    router.push(path); // Programmatically navigate using useRouter
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 md:ml-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {/* Logo and Description */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Oohpoint Logo" className="w-16 h-12" /> {/* Replace with the actual logo source */}
          </div>
          <p className="text-gray-400 mt-4">
            We help brands achieve impactful and data-driven advertising campaigns.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <button onClick={() => handleNavigation('/')} className="hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/about')} className="hover:text-white">
                About
              </button>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Brand Login</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <button onClick={() => handleNavigation('/blogs')} className="hover:text-white">
                Blog
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/casestudy')} className="hover:text-white">
                Case Study
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/CampusAmbassador')} className="hover:text-white">
                Campus Ambassador
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/engagements')} className="hover:text-white">
                Sponsorship
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/joincomunity')} className="hover:text-white">
                Join Community
              </button>
            </li>
           
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="relative flex items-center justify-center bg-black">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url('/pattern.png')` }}
          ></div>

          {/* Social Media Content Overlay */}
          <div className="relative z-10 text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
        <span>All rights reserved.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button onClick={() => handleNavigation('/terms')} className="hover:text-white">Terms</button>
          <button onClick={() => handleNavigation('/privacy')} className="hover:text-white">Privacy</button>
          <button onClick={() => handleNavigation('/contact')} className="hover:text-white">Contact</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
