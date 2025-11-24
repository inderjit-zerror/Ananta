"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  
  useEffect(() => {
    gsap.to(".heroVideo", {
      y: "-100px",

      scrollTrigger: {
        trigger: ".HeroSectionCont",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="HeroSectionCont w-full h-screen z-90 relative overflow-hidden">
      {/* ☑️ Video Div */}
      <video
        muted
        autoPlay
        loop
        className="heroVideo scale-[1.2] w-full h-full object-cover"
        src={"/video/BgVideo1.mp4"}
      ></video>
    </div>
  );
};

export default HeroSection;
