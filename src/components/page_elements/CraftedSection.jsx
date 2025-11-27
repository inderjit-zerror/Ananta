'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {HoverImageActivate, HoverImageDeActivate} from '@/functions/HoverImageFunction'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CraftedSection = () => {

  useEffect(()=>{
    gsap.fromTo('.Crafted_Img',{
      y:-500,
    },{
      y:500,
      ease:'linear',
      scrollTrigger:{
        trigger:'.Crafted_Cont',
        start:'top bottom',
        end:'bottom top',
        scrub:true,
        // markers:true
      }
    })

  
  },[])

  return (
    <>
      <div id="About" className="Crafted_Cont w-full min-h-screen relative overflow-hidden flex flex-col  p-[40px] max-sm:p-[10px] gap-y-32 py-[100px] bg-[#FEF7EE] z-90">

        <Image 
        className="w-full Crafted_Img object-cover object-center h-full absolute top-0 left-0 z-[-1]"
         src={'/Img/Crafted/CraftedBG.webp'}
         width={1000}
         height={1000}
         alt="bg"
        />

        <div className="w-full h-full bg-[#00000062] absolute top-0 left-0 z-[-1]">

        </div>

        {/* Title-Text-Div */}
        <div className="w-full h-fit flex text-white justify-between items-end max-sm:flex-col max-sm:mt-[30px]">
          {/* title */}
          <div className="w-[50%] h-full max-sm:w-full">
            <h1 className="text-[8rem] leading-[8rem] max-sm:text-[3rem] max-sm:leading-[3rem] CFF max-[1030px]:text-[5rem] max-[1030px]:leading-[5rem]">
              Crafted by Masters of Their Discipline
            </h1>
          </div>

          {/* Desc */}
          <div className="w-[50%] max-w-[400px] h-full flex CFF text-justify pr-[40px] max-sm:w-full max-sm:max-w-full max-sm:mt-[50px]">
            <p className="text-[1.1rem] leading-[1.1rem] max-sm:text-[1rem] max-sm:leading-[1rem]">
              Ananta is brought to life by a handpicked collective of
              architects, designers, engineers, and artisans — each chosen for
              their mastery, precision, and integrity. From structural experts
              to fine-detail craftsmen, every partner involved reflects a shared
              commitment to excellence and enduring quality.{" "}
            </p>
          </div>
        </div>

        {/* Second-Section */}
        <div className="flex my-[100px] max-sm:my-[20px]  flex-col md:flex-row items-center relative gap-10 md:gap-16 max-sm:gap-[5px] max-w-6xl mx-auto max-sm:w-full">
          {/* LEFT IMAGES */}
          <div className="flex gap-4 items-end">
            {/* Image 1 */}
            <div onMouseEnter={()=>HoverImageActivate('.ch1')} onMouseLeave={()=>HoverImageDeActivate('.ch1')} className="w-[250px] h-[300px] ImgP1 md:w-[250px] md:h-[300px] overflow-hidden rounded-sm cursor-pointer max-sm:w-[50%] max-sm:h-[200px] ">
              <Image
                src={"/Img/Crafted/TMBG1.webp"}
                width={1000}
                height={1000}
                alt="Interior 1"
                className="w-full h-full object-cover object-right ch1"
              />
            </div>

            {/* Image 2 */}
            <div onMouseEnter={()=>HoverImageActivate('.ch2')} onMouseLeave={()=>HoverImageDeActivate('.ch2')} className="w-[250px] h-[330px] ImgP2 md:w-[320px] md:h-[430px] overflow-hidden rounded-sm cursor-pointer max-sm:w-[50%] max-sm:h-[250px] ">
              <Image
                src="/Img/Crafted/TMBG1.webp"
                width={1000}
                height={1000}
                alt="Interior 2"
                className="w-full h-full object-cover ch2"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex justify-center md:justify-start w-fit absolute bottom-0 right-[-50%] max-[1030px]:right-[-20%] max-sm:right-[-0%]">
            <h2 className="text-white text-4xl md:text-6xl font-serif tracking-wide max-sm:text-[3rem]">
              THE MAKERS
            </h2>
          </div>
        </div>

        {/* 3-Section */}
        <div className="  my-[100px] max-sm:my-[20px] CFF w-full flex  items-center  justify-between max-sm:flex-col">

        {/* LEFT SIDE CONTENT BLOCK */}
        <div className="flex flex-col gap-8 text-white md:w-1/2 px-[10px]">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif flex">
            ELITE DEVELOPERS
          </h1>

          {/* Paragraph */}
          <p className="max-w-md text-sm md:text-base leading-relaxed max-sm:text-[1rem] max-sm:leading-[1rem]">
            The Philosophy Behind Ananta Is Simple Yet Profound:
            True Luxury Should Endure. Guided By This Belief,
            Every Design Choice Is Made With Permanence, Balance,
            And Cultural Resonance In Mind.
          </p>

          {/* STATS SECTION */}
          <div className="grid grid-cols-2 gap-10 mt-6">

            {/* Stat 1 */}
            <div>
              <h2 className="text-4xl font-serif">20+</h2>
              <p className="text-sm mt-1 leading-snug max-sm:text-[10px] max-sm:leading-[10px]">
                Years Of Architectural<br />And Development<br />Expertise.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h2 className="text-4xl font-serif">1.5M+ Sq. Ft</h2>
              <p className="text-sm mt-1 leading-snug max-sm:text-[10px] max-sm:leading-[10px]">
                Delivered Across<br />Residential And Commercial<br />Projects.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h2 className="text-4xl font-serif">15</h2>
              <p className="text-sm mt-1 leading-snug max-sm:text-[10px] max-sm:leading-[10px]">
                Landmark Projects<br />Completed Across Major<br />Indian Cities.
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <h2 className="text-4xl font-serif">98%</h2>
              <p className="text-sm mt-1 leading-snug max-sm:text-[10px] max-sm:leading-[10px]">
                Customer Satisfaction<br />Across All Delivered<br />Developments.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CONTENT BLOCK */}
        <div className="flex flex-col  text-white md:w-1/2 pr-[50px]  max-sm:pr-[10px]  mt-[30px] max-sm:w-full max-sm:items-center ">

          {/* Right Paragraph */}
          <p className="max-w-[350px] text-[1rem] leading-[1rem] md:text-base CFF ml-auto max-sm:w-full text-justify max-sm:hidden max-sm:justify-center ">
            The Result Is A Home That Transcends Trends — An
            Architectural Expression That Is Sophisticated,
            Rooted In Heritage, And Crafted To Remain Relevant
            For Generations.
          </p>

          {/* Right Image */}
          <div onMouseEnter={()=>HoverImageActivate('.ch3')} onMouseLeave={()=>HoverImageDeActivate('.ch3')} className="w-full max-w-[350px] ImgP3 h-[350px] md:h-[350px] overflow-hidden rounded-sm ml-auto max-sm:ml-0 cursor-pointer  max-sm:w-full">
            <Image
              src={'/Img/Crafted/TMBG2.webp'}  // Replace
              alt="Interior"
              width={1000}
              height={1000}
              className="w-full h-full object-cover ch3"
            />
          </div>
          {/* Right Paragraph */}
          <p className="max-w-[350px] text-[1rem] leading-[1rem] md:text-base CFF ml-auto max-sm:w-full text-justify sm:hidden mt-[20px] max-sm:ml-0 ">
            The Result Is A Home That Transcends Trends — An
            Architectural Expression That Is Sophisticated,
            Rooted In Heritage, And Crafted To Remain Relevant
            For Generations.
          </p>

        </div>
        </div>

      </div>
    </>
  );
};

export default CraftedSection;
