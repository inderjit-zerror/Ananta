"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownBTN from "./DownBTN";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Disable animation on mobile
    if (window.innerWidth <= 1024) return;

    gsap.fromTo(
      ".FooterImg",
      {
        y: -10,
      },
      {
        y: 10,
        ease: "linear",
        scrollTrigger: {
          trigger: ".FooterImgCont",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      },
    );
  }, []);

  const hoverActive = (item) => {
    gsap.to(item, {
      width: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };
  const hoverDeActive = (item) => {
    gsap.to(item, {
      width: "0%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="w-full h-screen z-90 justify-between  flex flex-col pt-[80px] bg-[#F5F3EA] text-[#9c6b25]  VText max-sm:overflow-x-hidden">
      {/* Title_Div */}

      <div className="w-full h-fit flex flex-col ">
        <div className="w-full h-fit flex justify-center items-center  gap-[10px] px-[40px]">
          <p className="text-[5rem] max-sm:text-[2.7rem] ">ANANTA</p>
          <p className=" text-[2rem] max-sm:text-[1.5rem]">By</p>
          <p className="text-[5rem]  max-sm:text-[2.7rem]">ELITE</p>
        </div>

        {/* Desc */}
        <div className="w-full h-fit max-w-[400px] m-auto text-center mt-[20px] max-sm:mt-[10px] mb-[70px] max-sm:mb-[10px] px-[40px] max-sm:px-[80px]  ">
          <p className="text-[2rem] leading-[2rem] STF max-sm:text-[20px] max-sm:leading-[28px] ">
            SanctuaryTimeless Luxury. Infinite Legacy
          </p>
        </div>
      </div>

      {/* Info pc */}
      <div className="w-full h-fit ">
        <div className="w-full h-fit flex py-[20px] max-sm:hidden   max-sm:flex-wrap max-sm:px-[20px] max-sm:gap-[10px] max-sm:text-[14px] max-sm:text-[16px]  justify-between GFS_R text-[18px] leading-[20px] px-[40px] select-none tracking-tight capitalize ">
          <div
            onMouseEnter={() => hoverActive(".lineT1T")}
            onMouseLeave={() => hoverDeActive(".lineT1T")}
            className=" cursor-pointer flex flex-col gap-[4px]"
          >
            +91 9946811111
            <div className="w-[0px] h-[1px] lineT1T bg-[#9c6b25]"></div>
          </div>

          <div
            onMouseEnter={() => hoverActive(".lineT2T")}
            onMouseLeave={() => hoverDeActive(".lineT2T")}
            className=" cursor-pointer flex flex-col gap-[4px]"
          >
            info@elitehomesindia.co.in
            <div className="w-[0px] h-[1px] lineT2T bg-[#9c6b25]"></div>
          </div>

          <div
            onMouseEnter={() => hoverActive(".lineT3T")}
            onMouseLeave={() => hoverDeActive(".lineT3T")}
            className=" cursor-pointer flex flex-col gap-[4px]"
          >
            elitedevelopers.co.in
            <div className="w-[0px] h-[1px] lineT3T bg-[#9c6b25]"></div>
          </div>
        </div>

        {/* Info SM  */}
        <div className="w-full h-fit flex  px-[18px] py-[20px] sm:hidden">
          {/* left */}
          <div className="w-[50%] h-fit ">
            <div
              onMouseEnter={() => hoverActive(".lineT1T")}
              onMouseLeave={() => hoverDeActive(".lineT1T")}
              className=" cursor-pointer flex flex-col gap-[4px]"
            >
              +91 9946811111
              <div className="w-[0px] h-[1px] lineT1T bg-[#9c6b25]"></div>
            </div>
            <div
              onMouseEnter={() => hoverActive(".lineT2T")}
              onMouseLeave={() => hoverDeActive(".lineT2T")}
              className=" cursor-pointer flex flex-col gap-[4px]"
            >
              info@elitehomesindia.co.in
              <div className="w-[0px] h-[1px] lineT2T bg-[#9c6b25]"></div>
            </div>
            <div
              onMouseEnter={() => hoverActive(".lineT3T")}
              onMouseLeave={() => hoverDeActive(".lineT3T")}
              className=" cursor-pointer flex flex-col gap-[4px]"
            >
              elitedevelopers.co.in
              <div className="w-[0px] h-[1px] lineT3T bg-[#9c6b25]"></div>
            </div>
          </div>

          {/* Right */}
          <div className="w-[50%] h-full  flex flex-col  items-end py-auto justify-center">
            <div
              onMouseEnter={() => hoverActive(".lineB2T")}
              onMouseLeave={() => hoverDeActive(".lineB2T")}
              className=" cursor-pointer flex flex-col gap-[4px] "
            >
              Privacy Policy
              <div className="w-[0px] h-[1px] lineB2T bg-[#9c6b25]"></div>
            </div>

            <div
              onMouseEnter={() => hoverActive(".lineB2L")}
              onMouseLeave={() => hoverDeActive(".lineB2L")}
              className=" cursor-pointer flex flex-col gap-[4px] "
            >
              Terms & Conditions
              <div className="w-[0px] h-[1px] lineB2L bg-[#9c6b25]"></div>
            </div>
          </div>
        </div>

        {/* Img-Cont */}
        <div className="w-full max-md:h-[50vh] md:h-[40vh] overflow-hidden flex FooterImgCont relative ">
          {/* <Image
          src={"/Img/footer/FooterImg.webp"}
          className="w-full h-full object-cover object-bottom FooterImg"
          width={1000}
          height={1000}
          alt="bg"
        /> */}

          {/* PC */}
          <img
            src="/Img/footer/FooterImg.webp"
            className="w-full h-full object-cover max-sm:hidden object-bottom FooterImg"
            alt=""
          />
          {/* Mobile */}
          <img
            src="/Img/footer/FooterImgSM.webp"
            className="w-full h-full object-cover sm:hidden max-sm:object-right object-bottom FooterImg"
            alt=""
          />

          {/* MB OR */}
          <div className="w-[80%] h-fit absolute top-[30%] max-md:top-[50%]  max-sm:left-[10%] sm:hidden flex bg-[#F5F3EA] p-[10px]  justify-center  items-center rounded-sm ">
            <div className="w-fit h-fit">
              <div className="w-fit h-fit flex flex-col">
                <p className="text-[16px] leading-[18px]">RERA Registration</p>
                <p className="text-[12px] leading-[14px] STF mt-[7px]">
                  K-RERA/PRJ/TVM/1234/2024
                </p>
              </div>
              <p className="text-[14px] mt-[10px] STF leading-[16px] pr-[70px] max-sm:text-[12px]  max-sm:leading-[12px]">
                Thrissur Office: Elite Gardenia Hills, Near Reliance Petrol Pump
                Puzhakkal PO. Thrissur- 680553
              </p>
            </div>
            <div className="w-[90px] h-[90px] flex-shrink-0">
              <img
                src={"/Img/QR.png"}
                alt="QR"
                className=" h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* QR */}
          <div className="w-[443px] h-fit flex absolute top-[30%] max-sm:hidden max-sm:left-[10%] max-sm:w-[80%] right-[5%] bg-[#FEF7EE]  max-sm:px-[10px] max-sm:py-[10px] px-[20px] py-[20px] GFS_R justify-center items-center rounded-sm select-none cursor-pointer ">
            {/* Text */}
            <div className="w-fit h-full max-sm:w-fit flex flex-col justify-between ">
              <div className="w-fit h-full">
                <p className="text-[22px] leading-[32px] max-sm:text-[16px]  max-sm:leading-[18px]">
                  RERA Registration
                </p>
                <p className="text-[14px] leading-[16px] max-sm:text-[12px]  max-sm:leading-[14px]">
                  K-RERA/PRJ/TVM/1234/2024
                </p>
              </div>
              <p className="text-[14px] mt-[10px]  leading-[16px] pr-[70px] max-sm:text-[12px]  max-sm:leading-[12px]">
                Thrissur Office: Elite Gardenia Hills, Near Reliance Petrol Pump
                Puzhakkal PO. Thrissur- 680553
              </p>
            </div>

            

            {/* QR Img */}
            <div className="w-[90px] h-[90px] flex-shrink-0">
              <img
                src={"/Img/QR.png"}
                alt="QR"
                className=" h-full object-cover object-center"
              />
            </div>
          </div>
        

          <div className=" absolute top-1/2 translate-y-[-50%] max-md:left-1/2 max-md:w-full max-md:justify-center max-md:items-center max-md:top-[10%] max-md:translate-y-[10%]  max-md:translate-x-[-50%] left-[5vw] flex flex-col text-white gap-3">
            <p className="  capitalize text-[22px] leading-[22px] max-md:text-[18px] max-md:text-center ">Book yourprivate preview <br/> To A Timeless Experience At Ananta</p>

             <a
              href="/brochure/Ananta.pdf"
              download

              
            >
            <DownBTN text={"Download Brochure"} />
            </a>

          </div>

          
        </div>

        {/* Infob */}
        <div className="w-full h-fit flex py-[20px]  justify-between GFS_R text-[18px] bg-[#F5F3EA] leading-[20px] px-[40px] max-sm:text-[14px] max-sm:text-[16px] select-none tracking-tight capitalize max-sm:flex-wrap max-sm:px-[20px] max-sm:gap-[10px] max-sm:justify-center  ">
          <div
            // onMouseEnter={() => hoverActive(".lineB1T")}
            // onMouseLeave={() => hoverDeActive(".lineB1T")}
            className=" cursor-pointer flex flex-col gap-[4px]"
          >
            © Elite Developers . All rights reserved.
            {/* <div className="w-[0px] h-[1px] lineB1T bg-[#9c6b25]"></div> */}
          </div>

          <div className="flex gap-[4px] max-sm:hidden">
            <div
              onMouseEnter={() => hoverActive(".lineB2T")}
              onMouseLeave={() => hoverDeActive(".lineB2T")}
              className=" cursor-pointer flex flex-col gap-[4px] max-sm:hidden"
            >
              Privacy Policy
              <div className="w-[0px] h-[1px] lineB2T bg-[#9c6b25]"></div>
            </div>
            |
            <div
              onMouseEnter={() => hoverActive(".lineB3T")}
              onMouseLeave={() => hoverDeActive(".lineB3T")}
              className=" cursor-pointer flex flex-col gap-[4px] max-sm:hidden"
            >
              Terms & Conditions
              <div className="w-[0px] h-[1px] lineB3T bg-[#9c6b25]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
