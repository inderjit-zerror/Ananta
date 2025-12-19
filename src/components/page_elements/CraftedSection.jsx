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
    if (window.innerWidth <= 1024) return;

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
            <h1 className="text-[60px] leading-[60px] max-sm:text-[38px] max-sm:leading-[42px] flex CFF max-[1030px]:text-[5rem] max-[1030px]:leading-[5rem] max-sm:mt-[40px]">
              Crafted By <br className="sm:hidden " /> Masters Of <br /> Their Discipline
            </h1>
            <p className="mt-[10px] max-sm:hidden STF max-w-[380px] w-full text-[20px] leading-[20px]">
              Together, they shape a residence that stands as a benchmark of
              refined craftsmanship.
            </p>
          </div>

          {/* Desc */}
          <div className="w-[50%] max-w-[500px]  h-full flex max-sm:flex-col STF items-center  md:pr-[40px] max-sm:w-full max-sm:max-w-full max-sm:mt-[30px]">
            <div className="text-[20px] leading-[20px] max-sm:text-[14px] STF max-sm:leading-[16px] text-justify capitalize  ">
              Ananta is brought to life by a handpicked collective of
              architects, designers, engineers, and artisans — each chosen for
              their mastery, precision, and integrity. From structural experts
              to fine-detail craftsmen, every partner involved reflects a shared
              commitment to excellence and enduring quality. <br />
            </div>
            <p className="mt-[20px] sm:hidden STF max-w-[380px] w-full text-[20px] capitalize max-sm:text-[14px] max-sm:leading-[16px] leading-[20px]">
              Together, they shape a residence that stands as a benchmark of
              refined craftsmanship.
            </p>
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
            <h2 className="text-white text-4xl CFF md:text-6xl capitalize tracking-wide max-sm:text-[3.5rem]">
              The Makers
            </h2>
          </div>
        </div>

        {/* 3-Section */}
        <div className="w-full h-fit px-[40px] flex flex-col gap-[60px] max-sm:px-[0px] max-sm:mt-[80px] ">
          {/* TOP1 */}
          <div className="w-full h-fit flex justify-between text-white items-end max-sm:flex-col capitalize ">
            {/* IM! */}
            <div className="w-full h-fit max-w-[500px] flex flex-col gap-[31px] ">
              <h1 className="text-[60px] CFF leading-[62px] max-sm:hidden ">From the house of Elite</h1>
              <h1 className="text-[40px] CFF leading-[42px] sm:hidden "> ELITE <br /> DEVELOPERS</h1>
              <p className="text-[20px] STF leading-[20px] max-sm:text-[14px] max-sm:leading-[16px]">
                Elite Developers, headquartered in Thrissur and a key division
                of the prestigious Elite Foods & Innovations Group, has earned a
                reputation across Kerala for delivering premium apartments and
                villas with a strong focus on design, build quality, and
                long‑term value.
              </p>
            </div>
            {/* IM2 */}
            <div className="w-full h-fit max-w-[500px] STF text-[20px] max-sm:mt-[30px] leading-[20px] flex flex-col max-sm:gap-[10px] gap-[40px] max-sm:text-[14px] max-sm:leading-[16px] ">
              <p>
                The Elite Ananta extends this legacy into the ultra‑luxury
                sky‑residence category, combining disciplined engineering and
                bespoke detailing for a limited number of discerning families.
              </p>
              <p>
                owners enjoy priority maintenance, curated handover services,
                and long‑term support through Elite’s dedicated after‑sales
                team, treating each home as a continuing relationship rather
                than a one‑time transaction, ensuring the experience stays
                seamless beyond possession.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full h-[400px] overflow-hidden max-sm:mb-[80px] ">
            <img src={'/Img/Crafted/craftBottom.webp'} className="w-full h-full object-center object-cover" alt="Al" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftedSection;
