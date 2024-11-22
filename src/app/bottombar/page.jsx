"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { useRouter, usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaQrcode,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import jsQR from "jsqr";

const MagicMenuIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(authStatus);

    const pathToIndexMap = {
      "/": 0,
      "/about": 1,
      "/scanner": 2,
      "/CampusAmbassador": 3,
      "/signin": 4,
    };
    if (pathToIndexMap[pathname] !== undefined) {
      setActiveIndex(pathToIndexMap[pathname]);
    }
  }, [pathname]);

  const handleSetActive = (index, path) => {
    if (pathname !== path) {
      setActiveIndex(index);
      router.push(path);
    }
  };

  const handleToggleSignIn = () => {
    if (isAuthenticated) {
      localStorage.setItem("authenticated", "false");
      setIsAuthenticated(false);
      setActiveIndex(0);
      router.push("/");
    } else {
      localStorage.setItem("authenticated", "true");
      setIsAuthenticated(true);
      handleSetActive(4, "/signin");
    }
  };

  const startScanner = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Camera access is not supported in this browser.");
      return;
    }
  
    setScannerActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      videoElement.setAttribute("playsinline", "true"); // Required for iOS
      videoElement.play();
  
      const canvasElement = document.createElement("canvas");
      const canvasContext = canvasElement.getContext("2d");
  
      document.body.appendChild(videoElement);
      document.body.appendChild(canvasElement);
  
      const scanCode = () => {
        if (!videoElement || !scannerActive) return;
  
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
  
        const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
  
        if (code) {
          alert(`QR Code Detected: ${code.data}`);
          setScannerActive(false);
          stopScanner(videoElement, stream);
        } else {
          requestAnimationFrame(scanCode);
        }
      };
  
      scanCode();
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access the camera. Please check your permissions.");
    }
  };
  
  const stopScanner = (videoElement, stream) => {
    videoElement.pause();
    videoElement.srcObject = null;
    stream.getTracks().forEach((track) => track.stop());
    document.body.removeChild(videoElement);
  };
  

  const handleScannerClick = () => {
    setActiveIndex(2);
    startScanner();
  };

  return (
    <div className="container">
      <div className="navigation mt-16">
        <ul>
          <li
            className={`list ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleSetActive(0, "/")}
          >
            <a>
              <span className="icon">
                <FaHome />
              </span>
              <span className="text mt-4 ml-1">Home</span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleSetActive(1, "/about")}
          >
            <a>
              <span className="icon">
                <FaFileAlt />
              </span>
              <span className="text mt-4 ml-1">Advertise</span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 2 ? "active" : ""}`}
            onClick={handleScannerClick}
          >
            <a>
              <span className="icon">
                <FaQrcode />
              </span>
              <span className="text mt-4 ml-1">Scanner</span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleSetActive(3, "/CampusAmbassador")}
          >
            <a>
              <span className="icon">
                <FaUser />
              </span>
              <span className="text mt-4 ml-1">About</span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 4 ? "active" : ""}`}
            onClick={handleToggleSignIn}
          >
            <a>
              <span className="icon">
                {isAuthenticated ? <FaSignOutAlt /> : <FaSignInAlt />}
              </span>
              <span className="text mt-4 ml-1">
                {isAuthenticated ? "Sign Out" : "Sign In"}
              </span>
            </a>
          </li>
          <div
            className="indicator"
            style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default MagicMenuIndicator;
