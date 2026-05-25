"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMiniPlay } from "react-icons/hi2";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  // -----------------------------
  // VIDEO AUTOPLAY
  // -----------------------------
  useEffect(() => {
    const playVideos = async () => {
      try {
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
  }, []);

  // -----------------------------
  // HERO SCROLL ANIMATION
  // -----------------------------
  useGSAP(() => {
    if (window.innerWidth < 1024) return;

    gsap.to(".heroVideo", {
      y: 350,
      scale: 1.15,
      filter: "brightness(0)",
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: ".HeroSectionCont",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });

  // -----------------------------
  // PRELOADER ANIMATION
  // -----------------------------
  useGSAP(() => {
    // Better GPU acceleration
    gsap.set(".PRETXT", {
      opacity: 0,
      y: 50,
      force3D: true,
    });

    gsap.set(".VVVVV", {
      yPercent: 100,
      force3D: true,
    });

    gsap.set(".VDO", {
      scale: 1.4,
      force3D: true,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Text Reveal
    tl.to(".PRETXT", {
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: {
        each: 0.12,
      },
    });

    // Smooth Pause
    tl.to({}, { duration: 0.3 });

    // Text Hide
    tl.to(
      ".PRETXT",
      {
        opacity: 0,
        y: -50,
        duration: 0.9,
        stagger: {
          each: 0.06,
          from: "end",
        },
        ease: "power2.inOut",
      },
      "start",
    );
    tl.to(
      ".VVVVV",
      {
        opacity: 1,
      },
      "start",
    );

    // Wrapper Reveal
    tl.to(
      ".VVVVV",
      {
        yPercent: 0,
        duration: 1.6,
        ease: "expo.inOut",
        force3D: true,
      },
      "start",
    );

    // Video Zoom Smooth
    tl.to(
      ".VDO",
      {
        scale: 1,
        duration: 1.8,
        ease: "expo.out",
        force3D: true,
      },
      "start",
    );
  });

  useGSAP(() => {
    // if (window.innerWidth < 1024) return;

    gsap.to(".heroVideo", {
      y: 350,
      scale: 1.15,
      filter: "brightness(0)",
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: ".HeroSectionCont",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,

        // 🔥 When bottom touches top
        onLeave: () => {
          // Only mute if sound is ON
          if (!isMuted) {
            setIsMuted(true);

            if (desktopVideoRef.current) {
              desktopVideoRef.current.muted = true;
            }

            if (mobileVideoRef.current) {
              mobileVideoRef.current.muted = true;
            }
          }
        },
      },
    });
  }, [isMuted]);

  // -----------------------------
  // SOUND TOGGLE
  // -----------------------------
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

  // -----------------------------
  // FLOWER ANIMATION
  // -----------------------------
  const RotateFLowerActive = () => {
    gsap.to(".fl", {
      rotate: 360,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  const RotateFLowerDeActive = () => {
    gsap.to(".fl", {
      rotate: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  return (
    <div className="HeroSectionCont relative w-full h-[100svh] overflow-hidden bg-[#F5F3EA] z-50">
      {/* PRELOADER TEXT */}
      <div className="absolute inset-0 z-[60] flex items-center justify-center gap-2 text-[2rem] sm:text-[2.5rem] text-[#9C6B25] CFF pointer-events-none">
        <p className="PRETXT opacity-0 transform-gpu will-change-transform">
          Ananta
        </p>

        <p className="PRETXT opacity-0 transform-gpu will-change-transform">
          By
        </p>

        <p className="PRETXT opacity-0 transform-gpu will-change-transform">
          Elite.
        </p>
      </div>

      {/* VIDEO WRAPPER */}
      <div className="VVVVV relative w-full h-full overflow-hidden  transform-gpu will-change-transform opacity-0">
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="heroVideo VDO w-full h-full object-cover brightness-100 scale-[1.4] max-sm:hidden transform-gpu will-change-transform"
          src="/video/FullVideo.mp4"
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="heroVideo VDO w-full h-full object-cover brightness-100 scale-[1.8] sm:hidden transform-gpu will-change-transform"
          src="/video/SMVIDEO.mp4"
        />

        {/* SOUND BUTTON */}
        <button
          onClick={toggleMute}
          className="absolute bottom-[2rem] left-[2rem] z-[100] flex justify-center items-center w-[3rem] h-[3rem] max-md:w-[2.7rem] max-md:h-[2.7rem] rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white hover:bg-[#B18446] transition-all duration-300"
        >
          {isMuted ? (
            <HiSpeakerXMark className="text-[1.4rem]" />
          ) : (
            <HiSpeakerWave className="text-[1.4rem]" />
          )}
        </button>

        {/* CONTACT BUTTON MOBILE */}
        <div className="absolute top-[70%] left-0 w-full flex justify-center sm:hidden">
          <div className="w-fit">
            <a href="#form">
              <div
                onMouseEnter={RotateFLowerActive}
                onMouseLeave={RotateFLowerDeActive}
                className="flex items-center justify-center gap-[10px] px-[20px] py-[15px] bg-white text-[#B3976E] cursor-pointer select-none"
              >
                <img
                  className="h-[18px] fl"
                  src="/data/Flower2.svg"
                  alt="Flower"
                />

                <p className="text-[0.875rem] FSB">Contact Us</p>

                <img
                  className="h-[18px] fl"
                  src="/data/Flower2.svg"
                  alt="Flower"
                />
              </div>
            </a>
          </div>
        </div>

        {/* WATCH VIDEO BUTTON */}
        <Link
          href="/video"
          className="absolute bottom-8 right-8 max-md:bottom-4 max-md:right-4 z-[100] group"
        >
          <div className="relative overflow-hidden border border-white/20 cursor-pointer">
            {/* Thumbnail */}
            <img
              src="/Img/VideoPlayBackIMG.png"
              alt="Watch Full Video"
              className="w-[220px] h-[130px] max-md:w-[140px] max-md:h-[80px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center max-md:scale-75">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/20 backdrop-blur-md group-hover:bg-[#B18446] transition-all duration-300">
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
  );
};

export default HeroSection;
