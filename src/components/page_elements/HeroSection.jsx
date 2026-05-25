"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMiniPlay } from "react-icons/hi2";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Link from "next/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // CRITICAL FIX: Start as TRUE (muted) so browsers allow autoplay.
  const [isMuted, setIsMuted] = useState(true);

  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const playVideos = async () => {
      try {
        // We keep them muted initially to guarantee autoplay success
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = true;
          await desktopVideoRef.current.play();
        }

        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = true;
          await mobileVideoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay failed:", error);
      }
    };

    playVideos();

    // Disable GSAP animation on mobile
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
      },
    });



    

  }, []);

  useEffect(()=>{
    // PreTFT
    const preTFT = gsap.timeline()
    preTFT.to('.PRETXT',{
      delay:0.2,
      opacity:1,
      duration:1,
      stagger:0.2,
      ease: "none",
    })
    preTFT.to('.PRETXT',{
       delay:0.7,
      opacity:0,
      duration:1,
      ease: "none",
    },'a')
    preTFT.to('.VVVVV',{
       delay:0.7,
      translateY:"0%",
      duration:1,
      ease: "power2.inOut",
    },'a')
    preTFT.to('.VDO',{
       delay:0.7,
      scale:1,
      duration:1,
      ease: "none",
    },'a')
  },[])

  // Toggle Sound Handler
  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);

    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = newMuteState;
    }

    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = newMuteState;
    }
  };

  // Flower Rotate Animations
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
    <>
      <div className="HeroSectionCont w-full h-[100svh] relative overflow-hidden z-50  bg-[#F5F3EA]">
        <div className="w-full h-full absolute top-0 left-0 CFF text-[2rem] text-[#9C6B25] sm:text-[2.5rem] flex gap-2 justify-center items-center z-49">
          <p className="PRETXT opacity-0">Ananta</p>
          <p className="PRETXT opacity-0">By</p>
          <p className="PRETXT opacity-0">Elite.</p>
        </div>

        <div className=" w-full h-full relative VVVVV overflow-hidden translate-y-[-150%] z-50">
          {/* Desktop Video */}
          <video
            ref={desktopVideoRef}
            muted={isMuted}
            autoPlay
            playsInline
            loop
            preload="auto"
            className="heroVideo brightness-100 VDO scale-[2] w-full h-full object-cover max-sm:hidden"
            src="/video/FullVideo.mp4"
          />

          {/* Mobile Video */}
          <video
            ref={mobileVideoRef}
            muted={isMuted}
            autoPlay
            playsInline
            loop
            preload="auto"
            className="heroVideo brightness-100 VDO scale-[5] w-full h-full object-cover sm:hidden"
            src="/video/SMVIDEO.mp4"
          />

          {/* Sound Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-[2rem] left-[2rem] z-[100] w-[3rem] h-[3rem] rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex justify-center items-center hover:bg-[#B18446] transition-all duration-300 max-md:w-[2.7rem] max-md:h-[2.7rem]"
          >
            {isMuted ? (
              <HiSpeakerXMark className="text-[1.4rem]" />
            ) : (
              <HiSpeakerWave className="text-[1.4rem]" />
            )}
          </button>

          {/* Contact Button Mobile */}
          <div className="w-full h-fit flex justify-center items-center absolute top-[70%] left-0 sm:hidden">
            <div className="w-[20%] flex justify-end max-[1030]:w-full lg:w-full max-sm:w-fit">
              <a href="#form">
                <div
                  onMouseEnter={RotateFLowerActive}
                  onMouseLeave={RotateFLowerDeActive}
                  className="bg-[#ffffff] text-[#B3976E] w-fit h-fit px-[10px] py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center max-sm:px-[20px] max-sm:py-[15px]"
                >
                  <img
                    className="h-[18px] fl"
                    src="/data/Flower2.svg"
                    alt="Flower"
                  />

                  <p className="text-[0.875rem] max-[1030]:text-[0.8rem]">
                    Contact Us
                  </p>

                  <img
                    className="h-[18px] fl"
                    src="/data/Flower2.svg"
                    alt="Flower"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Right Video Button */}
          <Link
            href="/video"
            className="absolute bottom-8 right-8 max-md:bottom-4 max-md:right-4 z-[100] group"
          >
            <div className="relative overflow-hidden border border-white/20 cursor-pointer">
              {/* Thumbnail */}
              <img
                src="/Img/VideoPlayBackIMG.png"
                alt="Watch Full Video"
                className="w-[220px] h-[130px] max-md:w-[140px] max-md:h-[80px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center max-md:scale-75">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#B18446] transition-all duration-300">
                  <HiMiniPlay className="text-white text-2xl ml-1" />
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-1 left-4 text-white max-md:hidden">
                <p className="text-sm tracking-tight FSB opacity-90">
                  Watch Full Video
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
