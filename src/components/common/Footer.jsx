"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      }
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
    <div className="w-full h-screen z-90  flex flex-col pt-[80px] bg-[#FEF7EE] text-[#9c6b25] VText max-sm:overflow-x-hidden">
      {/* Title_Div */}
      <div className="w-full h-fit flex justify-center items-center  gap-[10px] px-[40px]">
        <p className="text-[5rem] max-sm:text-[2.7rem] ">ANANTA</p>
        <p className=" text-[2rem] max-sm:text-[1.5rem]">By</p>
        <p className="text-[5rem]  max-sm:text-[2.7rem]">ELITE</p>
      </div>

      {/* Desc */}
      <div className="w-full h-fit max-w-[400px] m-auto text-center mt-[20px] max-sm:mt-[10px] mb-[70px] max-sm:mb-[60px] px-[40px] max-sm:px-[80px] ">
        <p className="text-[2rem] leading-[2rem] STF max-sm:text-[20px] max-sm:leading-[20px] ">
          SanctuaryTimeless Luxury. Infinite Legacy
        </p>
      </div>

      {/* Info */}
      <div className="w-full h-fit flex py-[20px] max-sm:flex-wrap max-sm:px-[20px] max-sm:gap-[20px]  justify-between GFS_R text-[18px] leading-[20px] px-[40px] select-none tracking-tight capitalize ">
        <div
          onMouseEnter={() => hoverActive(".lineT1T")}
          onMouseLeave={() => hoverDeActive(".lineT1T")}
          className=" cursor-pointer flex flex-col gap-[4px]"
        >
          +91 9XXXXXXXXX
          <div className="w-[0px] h-[1px] lineT1T bg-[#9c6b25]"></div>
        </div>

        <div
          onMouseEnter={() => hoverActive(".lineT2T")}
          onMouseLeave={() => hoverDeActive(".lineT2T")}
          className=" cursor-pointer flex flex-col gap-[4px]"
        >
          info@elitedevelopers.com
          <div className="w-[0px] h-[1px] lineT2T bg-[#9c6b25]"></div>
        </div>

        <div
          onMouseEnter={() => hoverActive(".lineT3T")}
          onMouseLeave={() => hoverDeActive(".lineT3T")}
          className=" cursor-pointer flex flex-col gap-[4px]"
        >
          elitedeveloper.com
          <div className="w-[0px] h-[1px] lineT3T bg-[#9c6b25]"></div>
        </div>
      </div>

      {/* Img-Cont */}
      <div className="w-full h-[60vh] overflow-hidden flex FooterImgCont relative ">
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
        <div className="w-[80%] h-fit absolute top-[30%]  max-sm:left-[10%] sm:hidden flex bg-[#FEF7EE] p-[10px] justify-center  items-center rounded-sm ">
          <div className="w-fit h-fit">
            <div className="w-fit h-fit flex flex-col">
              <p className="text-[16px] leading-[18px]">RERA Registration</p>
              <p className="text-[12px] leading-[14px]">
                K-RERA/PRJ/TVM/1234/2024
              </p>
            </div>
             <p className="text-[14px] mt-[10px]  leading-[16px] pr-[70px] max-sm:text-[12px]  max-sm:leading-[12px]">
              Images, plans, specifications, and areas shown are indicative and
              subject to change without prior notice.
            </p>
          </div>
          <div className="w-[90px] h-[90px] flex-shrink-0">
            <img
              src={"/Img/QR.svg"}
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
              Images, plans, specifications, and areas shown are indicative and
              subject to change without prior notice.
            </p>
          </div>

          {/* QR Img */}
          <div className="w-[90px] h-[90px] flex-shrink-0">
            <img
              src={"/Img/QR.svg"}
              alt="QR"
              className=" h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Infob */}
      <div className="w-full h-fit flex py-[20px]  justify-between GFS_R text-[18px] leading-[20px] px-[40px] select-none tracking-tight capitalize max-sm:flex-wrap max-sm:px-[20px] max-sm:gap-[20px] max-sm:justify-center  ">
        <div
          onMouseEnter={() => hoverActive(".lineB1T")}
          onMouseLeave={() => hoverDeActive(".lineB1T")}
          className=" cursor-pointer flex flex-col gap-[4px]"
        >
          © Elite Developers . All rights reserved.
          <div className="w-[0px] h-[1px] lineB1T bg-[#9c6b25]"></div>
        </div>

        <div
          onMouseEnter={() => hoverActive(".lineB2T")}
          onMouseLeave={() => hoverDeActive(".lineB2T")}
          className=" cursor-pointer flex flex-col gap-[4px]"
        >
          Privacy Policy | Terms & Conditions
          <div className="w-[0px] h-[1px] lineB2T bg-[#9c6b25]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
