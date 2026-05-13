"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const EdgeSection = () => {
  const sectionRef = useRef(null);
  const movingRef = useRef(null);

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
      desc: "From regular housekeeping to preventive maintenance and security checks, our team will support to ensure your investment remains impeccable and ready for your return at any time.",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const movingCont = document.querySelector(".MOVINGCONT");

    const moveAmount =
      movingCont.getBoundingClientRect().height - window.innerHeight;

    gsap.to(".MOVINGCONT", {
      y: -moveAmount,
      ease: "none",
      scrollTrigger: {
        trigger: ".EG_CONT",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="w-full EG_CONT lg:h-[200svh] relative bg-[#F5F3EA]"
      >
        {/* MAIN WRAPPER */}
        <div className="w-full lg:h-[100svh] flex flex-col lg:flex-row lg:sticky top-0 left-0 overflow-hidden">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 h-[70svh] sm:h-[80svh] lg:h-[100svh] overflow-hidden relative">
            <img
              src={`/Img/edge/EdgeBG.svg`}
              alt="SVG"
              className="h-full w-full object-cover object-center lg:translate-y-[5%]"
            />

            {/* <div className="w-full h-fit absolute top-1/2 -translate-y-1/2 left-0 flex flex-col justify-center items-center px-[20px]">
              
              <img
                src={`/Img/edge/EdgeLogo.svg`}
                alt="LOGO"
                className="w-[90px] sm:w-[120px] lg:w-[150px]"
              />

              <h1 className="CFF text-[34px] leading-[38px] sm:text-[48px] sm:leading-[52px] lg:text-[60px] lg:leading-[67px] mt-[3vh] text-[#9c6b25] text-center capitalize">
                experience excellence
                <br className="hidden sm:block" />
                beyond ownership
              </h1>
            </div> */}
          </div>

          {/* RIGHT SECTION */}
          <div
            ref={movingRef}
            className="w-full lg:w-1/2 h-fit MOVINGCONT flex flex-col justify-center items-center gap-[10vh] lg:gap-[20vh] py-[10vh] lg:py-[20vh] px-[20px] sm:px-[40px]"
          >
            <div className="w-[90%] max-sm:w-full h-fit flex flex-col justify-center ml-auto items-center px-[20px]">
              {/* <img
                src={`/Img/edge/EdgeLogo.svg`}
                alt="LOGO"
                className="w-[90px] sm:w-[120px] lg:w-[150px]"
              /> */}

              <h1 className="CFF text-[34px] leading-[38px] sm:text-[48px] sm:leading-[52px] max-md:text-center  lg:text-[60px] lg:leading-[67px] mt-[3vh] text-[#9c6b25]  capitalize">
                experience excellence
                <br className="hidden sm:block" />
                beyond ownership
              </h1>
            </div>

            {TU.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full max-w-full sm:max-w-[500px] lg:max-w-[380px] xl:max-w-[420px] flex flex-col"
                >
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] flex justify-center items-center mb-[25px]">
                    <img
                      src={item.url}
                      alt="ICON"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full flex flex-col">
                    <div className="CFF text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] text-[#9c6b25]">
                      {item.text}
                    </div>

                    <div className="mt-[15px] sm:mt-[20px] STF text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] text-[#9c6b25] text-justify">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgeSection;
