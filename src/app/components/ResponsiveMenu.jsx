"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Your sidebar component
import MagicMenuIndicator from "../bottombar/page"; // Your magic indicator component

const ResponsiveMenu = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Consider large screens as >= 1024px
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? <Sidebar /> : <MagicMenuIndicator />}
    </>
  );
};

export default ResponsiveMenu;
