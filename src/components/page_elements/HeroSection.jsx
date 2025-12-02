"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerElement from "../ui/FlowerElement";
import BTN from "../common/BTN";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Disable animation on mobile
    if (window.innerWidth < 1024) return;
    
    gsap.to(".heroVideo", {
      y: 400,
      scale: 1.2,
      filter: "brightness(0)",
      ease: "linear",
      scrollTrigger: {
        trigger: ".HeroSectionCont",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  const RotateFLowerActive = () => {
    gsap.to(".fl", {
      rotateZ: "360deg",
      duration: 0.7,
      ease: "linear",
    });
  };

  const RotateFLowerDeActive = () => {
    gsap.to(".fl", {
      rotateZ: "0deg",
      duration: 0.7,
      ease: "linear",
    });
  };

  return (
    <div className="HeroSectionCont w-full h-[100svh] z-90 relative overflow-hidden relative">
      {/* ☑ Video Div */}
      <video
        muted
        autoPlay
        playsInline
        loop
        className="heroVideo brightness-100 w-full h-full object-cover"
        src={"/video/BgVideo1.mp4"}
      ></video>

      <div className="w-full h-fit flex justify-center items-center absolute top-[80%] left-0 sm:hidden">
        <div className="w-[20%] flex justify-end  max-[1030]:w-full lg:w-full max-sm:w-fit ">
          <a href="#form">
            <div
              onMouseEnter={() => RotateFLowerActive()}
              onMouseLeave={() => RotateFLowerDeActive()}
              className="bg-[#ffffff] text-[#B3976E]   w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center max-sm:px-[20px] max-sm:py-[15px]"
            >
              <img className='h-[18px] fl ' src={'/data/Flower2.svg'} alt="Flower" />
              <p className="text-[0.875rem]  max-[1030]:text-[0.8rem] ">
                Contact Us
              </p>
              <img className='h-[18px] fl ' src={'/data/Flower2.svg'} alt="Flower" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
