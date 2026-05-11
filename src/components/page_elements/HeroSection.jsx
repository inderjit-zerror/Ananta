"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerElement from "../ui/FlowerElement";
import BTN from "../common/BTN";
import { HiMiniPlay } from "react-icons/hi2";
import Link from "next/link";

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
    <div className="HeroSectionCont w-full h-[100svh] z-90 relative overflow-hidden e">
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

        {/* BOTTOM RIGHT BUTTON */}
          <Link href="/video"><button
            
            className="absolute bottom-8 right-8 z-100 group"
          >
            <div className="flex items-center gap-4 group bg-white/10 backdrop-blur-md border cursor-pointer border-white/20 pr-5 px-3 py-3 rounded-full hover:bg-white text-white hover:text-black transition-all duration-300">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white  group-hover:border-[#B18446] group-hover:bg-[#B18446] flex justify-center items-center">
                <HiMiniPlay className="text-[white]" />
              </div>

              <div className="text-left">
                <p className="text-sm opacity-70 FSB tracking-tighter">Watch Full Video</p>
              </div>
            </div>
          </button>
          </Link >
    </div>
  );
};

export default HeroSection;
