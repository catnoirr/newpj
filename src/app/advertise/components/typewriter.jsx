"use client";

import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const texts = ['Web Design', 'Web Dev', 'UI/UX']; // Words to type
  const typingSpeed = 120; // Typing speed in milliseconds
  const deletingSpeed = 80; // Deleting speed in milliseconds
  const pauseDuration = 1500; // Pause duration in milliseconds before deleting

  const [displayText, setDisplayText] = useState(""); // Text being displayed
  const [index, setIndex] = useState(0); // Current text index
  const [isDeleting, setIsDeleting] = useState(false); // Whether currently deleting

  useEffect(() => {
    const currentText = texts[index]; // Current text to display
    let timeout;

    if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1)); // Remove one character
        if (displayText === "") {
          setIsDeleting(false); // Switch to typing
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        }
      }, deletingSpeed);
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1)); // Add one character
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseDuration); // Pause before deleting
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [displayText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h1 className="mt-3 leading-relaxed">
    <span className="block text-primary text-4xl font-bold mb-0 xl:inline-block">
      <span id="type1" className="text-green-500">{displayText}</span>
      <span className="ityped-cursor text-green-500">|</span>
    </span>
  </h1>
  
  );
};

export default Typewriter;
