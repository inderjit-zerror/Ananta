"use client";
import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import Component3DModel from "../ui/Component3DModel";
import SomeInfoText from "../ui/SomeInfoText";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTN from "@/components/common/BTN";
import DownBTN from "../common/DownBTN";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ResidenceSection = () => {
  useEffect(() => {
    // bg ----------------
    gsap.fromTo(
      ".RIMG",
      {
        y: -500,
      },
      {
        y: 500,
        ease: "linear",
        scrollTrigger: {
          trigger: ".RIMGCONT",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      },
    );
  }, []);

  return (
    <div
      id="FloorPlan"
      className="w-full min-h-screen flex relative BG_R z-90 pt-[50px]  TextBlack RIMGCONT overflow-hidden max-sm:hidden "
    >
      {/* Bg-div */}

      <Image
        src={"/Img/Residence/ResidenceBG.webp"}
        className="w-full h-full absolute top-0 left-0 z-[-1] object-cover object-center RIMG "
        width={1000}
        height={1000}
        alt="bg"
      />

      {/* BG-Black */}
      <div className="w-full h-full absolute top-0 left-0 z-[-1] bg-[#13131385]"></div>

      {/* ContantWraper */}
      <div className="w-full min-h-screen flex flex-col pb-[100px] pt-[50px] ">
        {/* Title-Cont */}
        <div className="w-full h-fit flex flex-col justify-center items-center text-white">
          {/* <SectionTitle /> */}
          <img src={`/data/TitleDesignWhite.svg`} alt="" />
          <div className="w-full max-w-[650px] m-auto h-fit flex justify-center items-center mt-[50px] max-sm:px-[30px]  ">
            <p className=" capitalize text-center text-[4rem] leading-[4rem] CFF  max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
              One Floor. One Residence. Infinite Privacy.
            </p>
          </div>
        </div>

        {/* Desc-Cont */}
        <div className="w-full h-fit flex justify-center select-none items-center STF text-white gap-[40px] text-[20px] leading-[22px] mt-[50px]">
          {/* Left-Desc */}
          <div className="w-full max-w-[400px] max-lg:max-w-[300px] flex text-justify STF">
            <p>
              A living room designed around proportion and openness. Textural
              finishes that elevate simplicity into quiet luxury. Seamless
              transitions between spaces, crafted for intuitive living.
            </p>
          </div>

          {/* Right-Desc */}
          <div className="w-full max-w-[400px] max-lg:max-w-[300px] flex text-justify STF">
            <p>
              Bedrooms shaped for rest and retreat. Restrooms designed with
              balance, precision, and serene materiality. A home where privacy,
              light, and spaciousness come together in quiet harmony.
            </p>
          </div>
        </div>

        {/* Small-Info */}
        {/* <p className="text-white mx-auto mt-[50px] text-[14px] leading-[14px]">
          360° Integrated Design
        </p> */}

        {/* 3D Canvas With Model Container */}
        <Component3DModel />

        {/* Some-Residence-info */}
        <div className="w-full h-fit flex justify-end items-end text-white pt-[50px] z-[100]">
          {/* Right-Container */}
          <div className="w-full max-w-[400px] h-fit flex flex-col  mr-[40px]">
            {/* Name */}
            <div className="w-full h-fit justify-start items-center mb-[30px]">
              <h1 className="text-[2rem] CFF">Key Highlights</h1>
            </div>

            {/* Text-Data */}
            <div className="w-full max-w-[400px] h-fit flex flex-col mb-[20px]">
              <SomeInfoText
                t1={"Location"}
                t2={"Royal Precinct, Thiruvananthapuram"}
              />
              <SomeInfoText
                t1={"Architecture"}
                t2={"Classical Symmetry with Minimal Modern Lines"}
              />
              <SomeInfoText
                t1={"Amenities"}
                t2={"rooftop Lounge, Fitness Suite, Courtyard"}
              />
              <SomeInfoText
                t1={"Privacy"}
                t2={"Private Lift Lobby + Controlled Access"}
              />
              <SomeInfoText
                t1={"Views"}
                t2={"Unobstructed City & Temple-Side Vistas"}
              />
            </div>

            <a
              href="/brochure/Ananta.pdf"
              download
            >
            <DownBTN text={"Download Brochure"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidenceSection;
