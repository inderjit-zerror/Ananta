"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HoverImageActivate,
  HoverImageDeActivate,
} from "@/functions/HoverImageFunction";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CraftedSection = () => {
  useEffect(() => {
    // Disable animation on mobile
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      ".Crafted_Img",
      {
        y: -500,
      },
      {
        y: 500,
        ease: "linear",
        scrollTrigger: {
          trigger: ".Crafted_Cont",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      }
    );
  }, []);

  return (
    <>
      <div
        id="About"
        className="Crafted_Cont w-full min-h-screen relative overflow-hidden flex flex-col max-sm:px-[20px]  p-[40px] max-sm:p-[10px] gap-y-32 max-sm:gap-[45px] py-[100px] bg-[#FEF7EE] z-90"
      >
        <Image
          className="w-full Crafted_Img object-cover object-center h-full absolute top-0 left-0 z-[-1]"
          src={"/Img/Crafted/CraftedBG.webp"}
          width={1000}
          height={1000}
          alt="bg"
        />

        <div className="w-full h-full bg-[#00000062] absolute top-0 left-0 z-[-1]"></div>

        {/* Title-Text-Div */}
        <div className="w-full h-fit flex text-white  justify-between items-end max-sm:flex-col max-sm:mt-[30px]">
          {/* title */}
          <div className="w-[50%] h-full max-sm:w-full">
            <h1 className="text-[8rem] leading-[8rem] max-sm:text-[3rem] max-sm:leading-[3rem] CFF max-[1030px]:text-[5rem] max-[1030px]:leading-[5rem]">
              Crafted by Masters of Their Discipline
            </h1>
          </div>

          {/* Desc */}
          <div className="w-[50%] max-w-[500px]  h-full flex STF items-center  md:pr-[40px] max-sm:w-full max-sm:max-w-full max-sm:mt-[50px]">
            <div className="text-[20px] leading-[22px] max-sm:text-[20px] STF max-sm:leading-[22px] text-justify  ">
              Ananta is brought to life by a handpicked collective of
              architects, designers, engineers, and artisans — each chosen for
              their mastery, precision, and integrity. From structural experts
              to fine-detail craftsmen, every partner involved reflects a shared
              commitment to excellence and enduring quality. <br />
              <p className="mt-[20px]">
                Together, they shape a residence that stands as a benchmark of
                refined craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Second-Section */}
        <div className="flex my-[100px] max-sm:my-[20px]  relative  flex-col md:flex-row items-center relative gap-10 md:gap-16 max-sm:gap-[5px] max-w-6xl mx-auto max-sm:w-full">
          {/* LEFT IMAGES */}
          <div className="flex gap-4 items-end  ">
            {/* Image 1 */}
            <div
              onMouseEnter={() => HoverImageActivate(".ch1")}
              onMouseLeave={() => HoverImageDeActivate(".ch1")}
              className="w-[250px] h-[300px] ImgP1 md:w-[250px] md:h-[300px] overflow-hidden  cursor-pointer max-sm:w-[50%] max-sm:h-[200px] "
            >
              <Image
                src={"/Img/Crafted/TMBG1.webp"}
                width={1000}
                height={1000}
                alt="Interior 1"
                className="w-full h-full object-cover object-right ch1"
              />
            </div>

            {/* Image 2 */}
            <div
              onMouseEnter={() => HoverImageActivate(".ch2")}
              onMouseLeave={() => HoverImageDeActivate(".ch2")}
              className="w-[250px] h-[330px] ImgP2 md:w-[320px] md:h-[430px] overflow-hidden  cursor-pointer max-sm:w-[50%] max-sm:h-[250px] "
            >
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
          <div className="flex justify-center md:justify-start w-fit absolute bottom-0   right-[-20%] max-[1030px]:right-[-20%] max-sm:bottom-[-10%] max-sm:right-[0%] max-sm:w-full max-sm:h-fit max-sm:justify-center max-sm:items-center">
            <h2 className="text-white text-4xl CFF md:text-6xl capitalize tracking-wide max-sm:text-[2.5rem]">
              The Makers
            </h2>
          </div>
        </div>

        {/* 3-Section */}
        <div className="  my-[100px] max-sm:my-[20px] CFF w-full flex  items-center   justify-between max-sm:flex-col">
          {/* LEFT SIDE CONTENT BLOCK */}
          <div className="flex flex-col gap-8 text-white md:w-1/2">
            {/* Heading */}
            <h1 className="text-4xl CFF md:text-6xl  flex">Elite Developers</h1>

            {/* Paragraph */}
            <p className="max-w-md text-[20px] STF md:text-base leading-[22px] max-sm:text-[1rem] max-sm:leading-[1rem]">
              The Philosophy Behind Ananta Is Simple Yet Profound: True Luxury
              Should Endure. Guided By This Belief, Every Design Choice Is Made
              With Permanence, Balance, And Cultural Resonance In Mind.
            </p>

            {/* STATS SECTION */}
            <div className="grid grid-cols-2 gap-10 mt-6">
              {/* Stat 1 */}
              <div className="flex w-fit h-fit flex-col gap-[20px] max-sm:gap-[10px]">
                <h2 className="text-[3rem] max-sm:text-[30px] CFF">20+</h2>
                <p className="text-[20px] mt-1 leading-[22px] STF max-sm:text-[14px] max-sm:leading-[15px]">
                  Years Of Architectural
                  <br />
                  And Development
                  <br />
                  Expertise.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex w-fit h-fit flex-col gap-[20px] max-sm:gap-[10px]">
                <h2 className="text-[3rem] max-sm:text-[30px] CFF">
                  1.5M+ Sq. Ft
                </h2>
                <p className="text-[20px] mt-1 leading-[22px] STF max-sm:text-[14px] max-sm:leading-[15px]">
                  Delivered Across
                  <br />
                  Residential And Commercial
                  <br />
                  Projects.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex w-fit h-fit flex-col gap-[20px] max-sm:gap-[10px]">
                <h2 className="text-[3rem] max-sm:text-[30px] CFFf">15</h2>
                <p className="text-[20px] mt-1 leading-[22px] STF max-sm:text-[14px] max-sm:leading-[15px]">
                  Landmark Projects
                  <br />
                  Completed Across Major
                  <br />
                  Indian Cities.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex w-fit h-fit flex-col gap-[20px] max-sm:gap-[10px]">
                <h2 className="text-[3rem] max-sm:text-[30px] CFF">98%</h2>
                <p className="text-[20px] mt-1 leading-[22px] STF max-sm:text-[14px] max-sm:leading-[15px]">
                  Customer Satisfaction
                  <br />
                  Across All Delivered
                  <br />
                  Developments.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT BLOCK */}
          <div className="flex flex-col  text-white md:w-1/2 pr-[50px]  max-sm:pr-[0px]  mt-[30px] max-sm:w-full max-sm:items-center  max-sm:pb-[50px]">
            {/* Right Paragraph */}
            <p className="max-w-[350px] text-[20px] leading-[22px]  STF md:text-base ml-auto max-sm:w-full text-justify max-sm:hidden max-sm:justify-center pb-[30px]">
              The Result Is A Home That Transcends Trends — An Architectural
              Expression That Is Sophisticated, Rooted In Heritage, And Crafted
              To Remain Relevant For Generations.
            </p>

            {/* Right Image */}
            <div
              onMouseEnter={() => HoverImageActivate(".ch3")}
              onMouseLeave={() => HoverImageDeActivate(".ch3")}
              className="w-full sm:max-w-[350px] ImgP3 h-[350px] md:h-[350px] max-sm:h-[444px] overflow-hidden  rounded-sm ml-auto max-sm:ml-0 cursor-pointer  max-sm:w-full"
            >
              <Image
                src={"/Img/Crafted/TMBG2.webp"} // Replace
                alt="Interior"
                width={1000}
                height={1000}
                className="w-full h-full object-cover ch3"
              />
            </div>
            {/* Right Paragraph */}
            <p className="sm:max-w-[355px] text-[1rem] leading-[1rem]  md:text-base max-sm:text-[14px] max-sm:leading-[16px] STF ml-auto max-sm:w-full text-justify sm:hidden mt-[20px] max-sm:ml-0 ">
              The Result Is A Home That Transcends Trends — An Architectural
              Expression That Is Sophisticated, Rooted In Heritage, And Crafted
              To Remain Relevant For Generations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftedSection;
