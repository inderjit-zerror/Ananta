"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const RevealAnimation = () => {
  // ✅ Custom Div Array length
  const DivArr = Array.from({ length: 20 });
  //------------------------------------------- Functions
  const videoRevealAnimation = () => {
    gsap.to(".revealDiv", {
      height: "0px",
      delay: 0.5,
      duration: 1.5,
      ease: "power3.inOut",
    });
  };

  //------------------------------------------- Call
  useEffect(() => {
    videoRevealAnimation();
  }, []);

  return (
    <>
      {/* ☑️ Video Reviele Div */}
      <div className="w-full h-screen absolute top-0 left-0 pointer-events-none z-110">
        {DivArr.map((item, index) => {
          return (
            <div key={index} className="w-full h-1/20 relative overflow-hidden">
              {/* Div-Animation */}
              <div className="revealDiv w-full h-[110%] bg-black absolute top-0 left-0"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RevealAnimation;
