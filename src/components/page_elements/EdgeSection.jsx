"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const EdgeSection = () => {
  const TU = [
    {
      url: `/Img/edge/V1.svg`,
      text: "Expert Maintenance Support",
      desc: "Benefit from vetted vendors and a quick-response team for repairs and routine servicing, keeping your investment secure and hassle-free.",
    },
    {
      url: `/Img/edge/V2.svg`,
      text: "Warranty Guidance and Claims",
      desc: "Count on Elite Edge to expedite warranty claims and coordinate timely repairs with vendors if any defects arise.",
    },
    {
      url: `/Img/edge/V3.svg`,
      text: "Loyalty Rewards",
      desc: "Experience exclusive discounts and investment opportunities on future Elite projects, and special invitations as a cherished member of the Elite family.",
    },
    {
      url: `/Img/edge/V4.svg`,
      text: "Legal and Registration Assistance",
      desc: "Our specialists ensure smooth handling of property registration, tax compliance, and all required formalities on your behalf.",
    },
    {
      url: `/Img/edge/V5.svg`,
      text: "Complete Upkeep & Care",
      desc: "Our specialists ensure smooth handling of property registration, tax compliance, and all required formalities on your behalf.",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".EG_CONT",
        start: "top top",
        end: "top -20%",
        scrub: true,
        // markers:true
      },
    });

    tl.to(".option1", {
      opacity: 0,
      ease: "linear",
    });
    tl.to(".option2", {
      opacity: 1,
      ease: "linear",
    });
  },[]);

  return (
    <div className="w-full EG_CONT min-h-[200vh] relative bg-[#F5F3EA]">
      <div className="w-full h-screen sticky top-0 left-0  flex justify-center items-center z-10 pointer-events-none select-none">
        <img
          src={`/Img/edge/EdgeBG.svg`}
          alt="SVG"
          className="h-full object-cover object-center "
        />
        {/* Option-1 */}
        <div className="w-full option1 h-screen absolute top-0 left-0 flex flex-col gap-[20px] text-center justify-center items-center">
          <img
            src={`/Img/edge/EdgeLogo.svg`}
            alt="LGO"
            className="w-[150px] "
          />
          <h1 className="CFF text-[60px] leading-[67px] max-sm:text-[42px] max-sm:leading-[44px] max-sm:px-[20px] text-[#B3976E] capitalize">
            experience excellence <br className="max-sm:hidden" /> beyond ownership
          </h1>
        </div>
      </div>

      {/* 2 COnt */}
      <div className="w-full option2 opacity-0 h-full flex flex-col  py-[100px] select-none ">
        <div className="w-full h-fit flex flex-col justify-center items-center mb-[200px] max-sm:mb-[100px]  max-sm:px-[20px]">
          <img
            src={`/Img/edge/EdgeLogo.svg`}
            alt="LGO"
            className="w-[150px] mb-[30px]"
          />
          <p className="w-full max-w-[582px] STF text-[20px] leading-[20px] text-[#B3976E] max-sm:text-justify">
            Welcome to an exclusive world of lasting care, convenience, and
            value with Elite Edge — the premier after-sales service program from
            Elite Developers designed to elevate your property ownership
            experience.
          </p>
        </div>

        {/*  */}
        <div className="w-full h-fit flex flex-wrap max-2xl:px-[2vw] px-[4vw] gap-[65px] justify-center max-sm:px-[20px]">
          {TU.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[400px] h-fit flex flex-col "
              >
                <div className="w-[80px] h-[80px] flex justify-center items-center mb-[80px]">
                  <img
                    src={item.url}
                    alt="alt"
                    className="w-full h-full object-center object-center"
                  />
                </div>
                <div className="w-full h-fit CFF text-[22px] leading-[22px] text-[#B3976E] ">
                  {item.text}
                </div>
                <div className="w-full mt-[27px] h-fit STF text-[20px] leading-[20px] text-[#B3976E] max-sm:text-justify  max-sm:mt-[15px]">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EdgeSection;
