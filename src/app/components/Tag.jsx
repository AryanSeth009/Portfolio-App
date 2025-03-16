"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Tag() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.to(text, {
      xPercent: -50, // Move the text by 50% to create a loop
      ease: "linear",
      duration: 10, // Adjust this to control the speed of the text
      repeat: -1, // Infinite loop
      repeatDelay: 0,
    });
  }, []);

  return (
    <div className="p-2 md:p-4 bg-black flex items-center justify-center overflow-hidden">
      <h2
        ref={textRef}
        className="font-bold uppercase text-[#D1D1C7] text-xl md:text-4xl whitespace-nowrap"
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        <span className="inline-block pr-3 md:pr-5">
          Bring your vision to life
        </span>
        <span className="inline-block px-2 md:px-5">✦</span>
        <span className="inline-block px-2 md:px-5">
          Bring your vision to life
        </span>
        <span className="inline-block px-2 md:px-5">✦</span>
        <span className="inline-block px-2 md:px-5">
          Bring your vision to life
        </span>
        {/* Duplicate the content for seamless looping */}
        <span className="inline-block px-2 md:px-5">
          Bring your vision to life
        </span>
        <span className="inline-block px-2 md:px-5">✦</span>
        <span className="inline-block px-2 md:px-5">
          Bring your vision to life
        </span>
      </h2>
    </div>
  );
}
