"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTN from "../common/BTN";

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
    <div className="HeroSectionCont w-full h-screen z-90 relative overflow-hidden relative">
      {/* ☑ Video Div */}
      <video
        muted
        autoPlay
        loop
        className="heroVideo brightness-100 w-full h-full object-cover"
        src={"/video/BgVideo1.mp4"}
      ></video>

      <div className="w-full h-fit flex justify-center items-center absolute top-[80%] left-0 sm:hidden">
        <div className="w-[20%] flex justify-end  max-[1030]:w-full lg:w-full max-sm:w-fit ">
          <a href="#form">
            <BTN text={"Contact Us"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;