"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { HiHome } from "react-icons/hi";

const page = () => {

    const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // ▶ Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // 🔊 Sound On / Off
  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-full h-svh overflow-hidden ">
       {/* ☑ Video Div */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        className="heroVideo brightness-100 w-full h-full object-cover"
        // src={"/video/BgVideo1.mp4"}
        src={"/video/FullVideo.mp4"}
      />

      {/* VIDEO CONTROLS */}
      <div className="absolute bottom-8  right-8 z-50 flex items-center gap-3">
        {/* PLAY / PAUSE */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>

        {/* SOUND ON / OFF */}
        <button
          onClick={toggleMute}
          className="w-14 h-14 rounded-full cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
        >
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>

      {/* BOTTOM RIGHT BUTTON */}
      <Link href="/">
        <button className="absolute bottom-8 left-8 z-100 group">
          <div className="flex items-center gap-4 group bg-white/10 backdrop-blur-md border cursor-pointer border-white/20 pr-5 px-3 py-3 rounded-full hover:bg-white text-white hover:text-black transition-all duration-300">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-white  group-hover:border-[#B18446] group-hover:bg-[#B18446] flex justify-center items-center"> <HiHome className="text-white" /> </div>

            <div className="text-left">
              <p className="text-sm opacity-70 FSB tracking-tighter">
                Back To Home
              </p>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default page;
