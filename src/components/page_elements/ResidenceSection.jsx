'use client'
import React, { useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import Component3DModel from "../ui/Component3DModel";
import SomeInfoText from "../ui/SomeInfoText";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ResidenceSection = () => {


   useEffect(()=>{
      // bg ----------------
        gsap.fromTo('.RIMG',{
          y:-500,
        },{
          y:500,
          ease:'linear',
          scrollTrigger:{
            trigger:'.RIMGCONT',
            start:'top bottom',
            end:'bottom top',
            scrub:true,
            // markers:true
          }
        })
  },[])


  return (
    <div id="FloorPlan" className="w-full min-h-screen flex relative BG_R z-90  TextBlack pointer-events-none RIMGCONT overflow-hidden ">
      {/* Bg-div */}

      <Image
        src={"/Img/Residence/ResidenceBG.webp"}
        className="w-full h-full absolute top-0 left-0 z-[-1] object-cover object-center RIMG "
        width={1000}
        height={1000}
        alt="bg"
      />

      {/* BG-Black */}
      <div className="w-full h-full absolute top-0 left-0 z-[-1] bg-[#13131385]">

      </div>



      {/* ContantWraper */}
      <div className="w-full min-h-screen flex flex-col pb-[100px] pt-[50px] ">
        {/* Title-Cont */}
        <div className="w-full h-fit flex flex-col justify-center items-center text-white">
          <SectionTitle
            textData={"One Floor. One Residence. Infinite Privacy."}
          />
        </div>

        {/* Desc-Cont */}
        <div className="w-full h-fit flex justify-center select-none items-center CFF text-white gap-[20px] text-[1rem] leading-[1rem] mt-[50px]">
          {/* Left-Desc */}
          <div className="w-full max-w-[300px] flex text-justify">
            <p>
              honour heritage while embracing modern luxury. Its architecture
              balances classical symmetry with contemporary minimalism, built
              not just for today but for the next century.
            </p>
          </div>

          {/* Right-Desc */}
          <div className="w-full max-w-[300px] flex text-justify">
            <p>
              honour heritage while embracing modern luxury. Its architecture
              balances classical symmetry with contemporary minimalism, built
              not just for today but for the next century.
            </p>
          </div>
        </div>

        {/* Small-Info */}
        <p className="text-white mx-auto mt-[50px] text-[14px] leading-[14px]">
          360° Integrated Design
        </p>

        {/* 3D Canvas With Model Container */}
        <Component3DModel />

        {/* Some-Residence-info */}
        <div className="w-full h-fit flex justify-end items-end text-white pt-[50px]">
          {/* Right-Container */}
          <div className="w-full max-w-[400px] h-fit flex flex-col  mr-[40px]">
            {/* Name */}
            <div className="w-full h-fit justify-start items-center mb-[30px]">
              <h1 className="text-[2rem] CFF">Key Highlights</h1>
            </div>

            {/* Text-Data */}
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
        </div>
      </div>
    </div>
  );
};

export default ResidenceSection;
