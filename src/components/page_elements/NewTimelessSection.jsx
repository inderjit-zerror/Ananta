"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const NewTimelessSection = () => {
  useEffect(() => {
    const NTL1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".MainContTimeLess",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    //    TitleOpacity-0
    NTL1.to(".Logo_Cont", {
      opacity: 0,
       y:'-25px'
    });

    // text-opacity
    NTL1.to(".tc_1", {
      opacity: 1,
      y:0
    });
    NTL1.to(".tc_1", {
      opacity: 0,
      delay: 1,
       y:'-25px'
    });
    // 2
    NTL1.to(".tc_2", {
      opacity: 1,
      y:0
    });
    NTL1.to(".tc_2", {
      opacity: 0,
      delay: 1,
       y:'-25px'
    });
    // 3
    NTL1.to(".tc_3", {
      opacity: 1,
      y:0
    });
    NTL1.to(".tc_3", {
      opacity: 0,
      delay: 1,
       y:'-25px'
    });
    // 4
    NTL1.to(".tc_4", {
      opacity: 1,
      y:0

    });
    NTL1.to(".tc_4", {
      opacity: 0,
      delay: 1,
       y:'-25px'
    });
    // 5
    NTL1.to(".tc_5", {
      opacity: 1,
      y:0
    });
    NTL1.to(".tc_5", {
      opacity: 0,
      delay: 1,
       y:'-25px'
    });
    // 6
    NTL1.to(".tc_6", {
      opacity: 1,
      y:0
    });
    // NTL1.to(".tc_6", {
    //   opacity: 0,
    // });
  }, []);

  useEffect(() => {
    gsap.to(".TL_ImgCont", {
      top: "-100%",
      ease: "linear",
      scrollTrigger: {
        trigger: ".MainContTimeLess",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="MainContTimeLess w-full h-[400dvh] bg-[#EFE2C9] relative  ">
      {/* Img Cont */}
      <div className="TL_ImgCont w-full h-fit fixed top-0 left-0 flex justify-center items-center ">
        <Image
          className="sm:w-full TimeLessImg w-full object-cover sm:object-center object-top "
          src={"/Img/imeless/BigBuilding.png"}
          width={1000}
          height={1000}
          alt="ai"
        />
      </div>

      {/* Text Animate-Cont */}
      <div className="w-full h-[100dvh] flex  fixed top-0 left-0">
        <div className="Logo_Cont w-full h-fit flex justify-center items-center pt-[50px]">
          <img className="w-[40%]" src={"/data/TimelessTitle.svg"} alt="logo" />
        </div>

        {/* Div-1-L-Side */}
        <div className="w-[350px] tc_1 h-fit absolute top-[10%] left-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            4,300 sq.ft{" "}
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            single-level sky residences with 4 en-suite bedrooms, a family
            lounge, staff room, utility, and expansive balconies.
          </p>
        </div>

        {/* Div-2-R-Side */}
        <div className="w-[350px] tc_2 h-fit absolute top-[20%] right-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            one residence per floor
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Exclusive private lift lobby ensuring total privacy and secure,
            controlled access.
          </p>
        </div>

        {/* Div-3-l-Side */}
        <div className="w-[350px] tc_3 h-fit absolute top-[30%] left-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            3.4 m floor-to-floor height
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Creates grand volumes, enhances natural light, and delivers a true
            “villa-in-the-sky” living experience.
          </p>
        </div>

        {/* Div-4-R-Side */}
        <div className="w-[350px] tc_4 h-fit absolute top-[40%] right-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Luxe Living Volumes
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Large-format living and dining with full-height glazing for
            uninterrupted views of the Trivandrum skyline.
          </p>
        </div>

        {/* Div-5-l-Side */}
        <div className="w-[350px] tc_5 h-fit absolute top-[50%] left-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Dedicated Parking Excellence
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Every residence comes with 3 exclusive parking slots, supported by
            EV-ready infrastructure.
          </p>
        </div>

        {/* Div-6-R-Side */}
        <div className="w-[350px] tc_6 h-fit absolute top-[60%] right-[5%] flex flex-col gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Private Service Flow
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Dedicated staff/service circulation ensures discreet, seamless daily
            operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTimelessSection;
