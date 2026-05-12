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
    if (window.innerWidth < 800) {
      return;
    }

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
      delay: 1,
      y: "-25px",
    });

    // text-opacity
    NTL1.to(
      ".tc_1",
      {
        opacity: 1,
        y: 0,
      },
      "a1"
    );
    NTL1.to(
      ".tc_1",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a2"
    );
    // 2
    NTL1.to(
      ".tc_2",
      {
        opacity: 1,
        y: 0,
      },
      "a1"
    );
    NTL1.to(
      ".tc_2",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a2"
    );
    // 3
    NTL1.to(
      ".tc_3",
      {
        opacity: 1,
        y: 0,
      },
      "a3"
    );
    NTL1.to(
      ".tc_3",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a4"
    );
    // 4
    NTL1.to(
      ".tc_4",
      {
        opacity: 1,
        y: 0,
      },
      "a3"
    );
    NTL1.to(
      ".tc_4",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a4"
    );
    // 5
    NTL1.to(
      ".tc_5",
      {
        opacity: 1,
        y: 0,
      },
      "a5"
    );
    NTL1.to(
      ".tc_5",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a6"
    );
    // 6
    NTL1.to(
      ".tc_6",
      {
        opacity: 1,
        y: 0,
      },
      "a5"
    );
    NTL1.to(
      ".tc_6",
      {
        opacity: 0,
        delay: 1,
        y: "-25px",
      },
      "a6"
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth < 800) {
      return;
    }

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

  useEffect(() => {
    if (window.innerWidth > 800) {
      return;
    }
    gsap.to(".SM_CC", {
      backgroundColor: "#e7d9bf",
      scrollTrigger: {
        trigger: ".SMUP",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <div className="MainContTimeLess w-full h-[300vh] lg:bg-[#F5F3EA]  relative max-lg:h-fit  max-lg:pt-[120vh]    ">
      {/* Img Cont */}
      <div className="TL_ImgCont w-full h-[200vh] fixed top-0 left-0  flex justify-center items-center max-sm:h-[100vh] max-sm:z-[-1] max-lg:bg-[#F5F3EA] ">
        <Image
          className="sm:w-full TimeLessImg w-full  h-full object-cover sm:object-center object-top "
          src={"/Img/imeless/BigBuilding.png"}
          width={1000}
          height={1000}
          alt="ai"
        />

        <div className="Logo_Cont w-full h-fit flex justify-center items-center pt-[50px] sm:hidden  absolute top-2 left-0 ">
          <img
            className="w-[40%] max-sm:w-[80%]"
            src={"/data/TimelessTitle.svg"}
            alt="logo"
          />
        </div>

        {/* SM COLOR DIV */}
        <div className="w-full SM_CC h-screen absolute top-0 left-0 z-90 sm:hidden"></div>
      </div>

      {/* Text Animate-Cont */}
      <div className="w-full h-[100vh] flex   fixed top-0 left-0 max-lg:hidden">
        <div className="Logo_Cont w-full h-fit flex justify-center items-center pt-[50px] ">
          <img
            className="w-[40%] max-sm:w-[80%]"
            src={"/data/TimelessTitle.svg"}
            alt="logo"
          />
        </div>

        {/* Div-1-L-Side */}
        <div className="w-[350px] tc_1 h-fit absolute top-[12%] left-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            4,372 sq.ft{" "}
           
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            A single residence per floor - expansive, efficient, and intuitively planned. Every space opens naturally, allowing light and movement to define the home.
           
          </p>
        </div>

        {/* Div-2-R-Side */}
        <div className="w-[350px] tc_2 h-fit absolute top-[16%] right-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            one residence per floor
            
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Exclusive private lift lobby ensuring total privacy and secure,
            controlled access.
           
          </p>
        </div>

        {/* Div-3-l-Side */}
        <div className="w-[350px] tc_3 h-fit absolute top-[20%] left-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            3.4 m floor-to-floor height
           

          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Creates grand volumes, enhances natural light, and delivers a true
            “villa-in-the-sky” living experience.
            
          </p>
        </div>

        {/* Div-4-R-Side */}
        <div className="w-[350px] tc_4 h-fit absolute top-[25%] right-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Luxe Living Volumes
            
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Large-format living and dining with full-height glazing for
            uninterrupted views of the Trivandrum skyline.
             </p>
        </div>

        {/* Div-5-l-Side */}
        <div className="w-[350px] tc_5 h-fit absolute top-[25%] left-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Dedicated Parking Excellence
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Every residence comes with 3 exclusive parking slots, supported by
            EV-ready infrastructure.
          </p>
        </div>

        {/* Div-6-R-Side */}
        <div className="w-[350px] tc_6 h-fit absolute top-[27%] right-[5%] flex flex-col px-[25px] gap-[41px] translate-y-[25px] text-[#9c6b25] opacity-0">
          <h1 className="CFF text-[42px] leading-[44px] capitalize">
            Private Service Flow
           
          </h1>
          <p className=" STF capitalize text-[20px] leading-[20px]">
            Dedicated staff/service circulation ensures discreet, seamless daily
            operations.
           </p>
        </div>
      </div>

      {/* SM  */}
      <div className=" w-full h-fit SMUP flex flex-col lg:hidden z-90 px-[7vw] pb-[50px] pt-[50px] justify-center items-center gap-[20px] ">
        {/* Div-1-L-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px]">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
             4,372 sq.ft{" "}
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
             A single residence per floor - expansive, efficient, and intuitively planned. Every space opens naturally, allowing light and movement to define the home.
          </p>
        </div>

        {/* Div-2-R-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px] ">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
            one residence per floor
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
            Exclusive private lift lobby ensuring total privacy and secure,
            controlled access.
          </p>
        </div>

        {/* Div-3-l-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px] ">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
            3.4 m floor-to-floor height
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
            Creates grand volumes, enhances natural light, and delivers a true
            “villa-in-the-sky” living experience.
          </p>
        </div>

        {/* Div-4-R-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px] ">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
            Luxe Living Volumes
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
            Large-format living and dining with full-height glazing for
            uninterrupted views of the Trivandrum skyline.
          </p>
        </div>

        {/* Div-5-l-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px] ">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
            Dedicated Parking Excellence
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
            Every residence comes with 3 exclusive parking slots, supported by
            EV-ready infrastructure.
          </p>
        </div>

        {/* Div-6-R-Side */}
        <div data-aos="fade-up" className="w-[95%] tc_1 h-fit  flex flex-col px-[25px] gap-[44px]  text-[#9c6b25] bg-[#F5F3EAF0] py-[20px] ">
          <h1 className="CFF text-[32px] leading-[44px] max-sm:text-[32px] max-sm:leading-[32px] capitalize">
            Private Service Flow
          </h1>
          <p className=" STF capitalize text-[14px] leading-[16px]">
            Dedicated staff/service circulation ensures discreet, seamless daily
            operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTimelessSection;
