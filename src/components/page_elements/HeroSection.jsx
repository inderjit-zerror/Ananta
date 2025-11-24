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
      y: 400,
      scale:1.2,
      filter:"brightness(0)",
      ease:"linear",
      scrollTrigger: {
        trigger: ".HeroSectionCont",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="HeroSectionCont w-full h-screen z-90 relative overflow-hidden">
      {/* ☑ Video Div */}
      <video
        muted
        autoPlay
        loop
        className="heroVideo brightness-100 w-full h-full object-cover"
        src={"/video/BgVideo1.mp4"}
      ></video>
    </div>
  );
};

export default HeroSection;