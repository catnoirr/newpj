"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCalendarAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaChevronRight,
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <>
      {/* Hamburger Menu for smaller screens */}
      {!isMobileMenuOpen && (
        <div className="lg:hidden fixed top-4 right-4 z-20">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-purple-800 bg-white p-2 rounded-md shadow-md"
          >
            <FaBars />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${isMobileMenuOpen ? "right-0" : "-right-full"} lg:left-0 h-screen bg-purple-800 text-white transition-all duration-300 ${
          isExpanded ? "w-48" : "w-20"
        } z-40`}
      >
        {/* Logo and Expand/Collapse Button */}
        <div className="relative flex items-center justify-center p-4">
          <img src="/image.png" alt="Logo" className="p-1" />
          {/* Expand/Collapse Button on both mobile and desktop */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute ${isMobileMenuOpen ? "left-[-14px]" : "right-[-14px]"} top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md bg-white shadow-md flex items-center justify-center text-purple-800`}
          >
            {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Sidebar Items */}
        <div
          className={`flex flex-col mt-4 space-y-4 ${
            isExpanded ? "items-start" : "items-center"
          }`}
        >
          <SidebarItem icon={<FaHome />} label="Dashboard" route="/" isExpanded={isExpanded} />
          <SidebarItem icon={<FaUser />} label="Audience" route="/audience" isExpanded={isExpanded} />
          <SidebarItem icon={<FaFileAlt />} label="Posts" route="/posts" isExpanded={isExpanded} />
          <SidebarItem icon={<FaCalendarAlt />} label="Schedules" route="/schedules" isExpanded={isExpanded} />

          <div className="border-t border-gray-300 my-2"></div>

          <SidebarItem icon={<FaQuestionCircle />} label="Help" route="/help" isExpanded={isExpanded} />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" route="/logout" isExpanded={isExpanded} textColor="text-red-500" />
        </div>
      </div>

      {/* Overlay for closing sidebar on mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, route, isExpanded, textColor = "text-white" }) {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <div className="relative group flex justify-center">
      <Link href={route}>
        <button
          className={`flex items-center ${isExpanded ? "justify-start w-full" : "justify-center"} p-3 rounded-lg cursor-pointer 
          ${isActive
            ? "text-yellow-300 bg-white"
            : `${textColor} hover:bg-white hover:text-black`}
          `}
        >
          <span className="text-lg">{icon}</span>
          {isExpanded && <span className="ml-3">{label}</span>}
        </button>
      </Link>

      {!isExpanded && (
        <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 text-sm bg-purple-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
          <span className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-3 h-1 border-t-4 border-b-4 border-r-4 border-transparent border-r-purple-900"></span>
        </span>
      )}
    </div>
  );
}
