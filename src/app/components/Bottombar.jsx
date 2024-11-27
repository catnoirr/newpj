"use client";

import { FaBullhorn, FaGift, FaUser, FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import React, { useState, useEffect, useRef } from "react";
import { useRouter ,usePathname } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { IoMdQrScanner } from "react-icons/io";

export default function BottomNavBar() {
    const [isScanning, setIsScanning] = useState(false);
    const [qrScanner, setQrScanner] = useState(null);
    const [showPermissionModal, setShowPermissionModal] = useState(false);
    const redirectFlag = useRef(false);
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const pathname = usePathname();
    useEffect(() => {
        const pathToIndexMap = {
          "/": 0,
          "/about": 1,
          "/scanner": 2,
          "/CampusAmbassador": 3,
          "/signin": 4,
        };
      
        // Update the active index based on pathname
        if (pathToIndexMap[pathname] !== undefined) {
          setActiveIndex(pathToIndexMap[pathname]);
        }
      
        // Handle QR Scanner initialization and cleanup
        if (isScanning && !qrScanner) {
          const scannerInstance = new Html5Qrcode("qr-reader");
      
          scannerInstance
            .start(
              { facingMode: "environment" },
              {
                fps: 10,
                qrbox: { width: 250, height: 250 },
              },
              (decodedText) => {
                if (!redirectFlag.current) {
                  console.log(decodedText);
                  stopScanning(decodedText);
                }
              },
              (error) => {
                console.warn("QR Code scan error:", error);
              }
            )
            .then(() => {
              setQrScanner(scannerInstance);
            })
            .catch((err) => {
              console.error("Unable to start scanning", err);
              setShowPermissionModal(true); // Show modal if scanner fails to start
            });
        }
      
        // Cleanup for QR Scanner
        return () => {
          if (qrScanner) {
            qrScanner.stop().then(() => {
              qrScanner.clear();
            });
          }
        };
      }, [isScanning, qrScanner, pathname]);
    //   const handleSetActive = (index, path) => {
    //     if (pathname !== path) {
    //       setActiveIndex(index);
    //       router.push(path);
    //     }
    //   };
      const startScanning = () => {
        setIsScanning(true);
      };
    
      const stopScanning = (decodedText) => {
        if (qrScanner) {
          qrScanner.stop().then(() => {
            qrScanner.clear();
            setQrScanner(null);
          });
        }
        setIsScanning(false);
    
        if (!redirectFlag.current && typeof decodedText === "string") {
          redirectFlag.current = true;
          window.location.href = `${decodedText}-ooh`;
        }
      };
    
      const handleNavigation = (index, path) => {
        if (isScanning) {
          stopScanning();
        }
        if (pathname !== path) {
          setActiveIndex(index);
          router.push(path);
        }
      };
    

      return (
        <div className="container">
          <div className="navigation mt-16">
            <ul>
              <li
                className={`list ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => handleNavigation(0, "/")}
              >
                <a>
                  <span className="icon">
                    <GoHome />
                  </span>
                  <span className="text mt-4 ml-1">Home</span>
                </a>
              </li>
              <li
                className={`list ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handleNavigation(1, "/campaigns")}
              >
                <a>
                  <span className="icon">
                    <FaBullhorn />
                  </span>
                  <span className="text mt-4 ml-1">Advertise</span>
                </a>
              </li>
              <li
                className={`list ${activeIndex === 2 ? "active" : ""}`}
                onClick={isScanning ? stopScanning : startScanning}
              >
                <a>
                  <span className="icon">
                    <IoMdQrScanner />
                  </span>
                  <span className="text mt-4 ml-1">Scanner</span>
                </a>
              </li>
              <li
                className={`list ${activeIndex === 3 ? "active" : ""}`}
                onClick={() => handleNavigation(3, "/coupons")}
              >
                <a>
                  <span className="icon">
                    <FaGift />
                  </span>
                  <span className="text mt-4 ml-1">About</span>
                </a>
              </li>
              <li
                className={`list ${activeIndex === 4 ? "active" : ""}`}
                onClick={() => handleNavigation("/profile")}
                >
                <a>
                  <span className="icon">
                     <FaRegUser />
                  </span>
                  <span className="text mt-4 ml-1">
                    Profile
                  </span>
                </a>
              </li>
              <div
                className="indicator"
                style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}
              ></div>
            </ul>
          </div>
            {/* Modal for Camera Permission */}
      {showPermissionModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[20rem] text-center">
            <h2 className="text-lg font-semibold mb-4">
              Camera Permission Needed
            </h2>
            <p className="mb-4">
              Please enable camera permissions in your device settings to use
              the QR scanner.
            </p>
            <button
              onClick={() => {
                setShowPermissionModal(false);
                router.push("/");
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
      );





    }
      