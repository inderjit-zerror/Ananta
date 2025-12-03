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
        y: -100,
      },
      {
        y: 100,
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
      <div className="w-full h-fit max-w-[400px] m-auto text-center mt-[30px] max-sm:mt-[10px] mb-[70px] max-sm:mb-[60px] px-[40px] max-sm:px-[80px] ">
        <p className="text-[2rem] leading-[2rem] STF max-sm:text-[20px] max-sm:leading-[20px] ">
          SanctuaryTimeless Luxury. Infinite Legacy
        </p>
      </div>

      {/* Img-Cont */}
      <div className="w-full h-[60vh] overflow-hidden FooterImgCont">
        {/* <Image
          src={"/Img/footer/FooterImg.webp"}
          className="w-full h-full object-cover object-bottom FooterImg"
          width={1000}
          height={1000}
          alt="bg"
        /> */}

        {/* PC */}
        <img src="/Img/footer/FooterImg.webp" className="w-full h-full object-cover max-sm:hidden object-center FooterImg" alt="" />
        {/* Mobile */}
        <img src="/Img/footer/FooterImgSM.webp" className="w-full h-full object-cover sm:hidden max-sm:object-right object-bottom FooterImg" alt="" />
      </div>

      {/* Info */}
      <div className="w-full h-fit flex py-[20px] max-sm:flex-col max-sm:gap-[20px]">
        <div className="w-[50%] h-fit flex justify-between px-[40px] text-[18px] STF max-sm:w-full  max-sm:ga-[10px] sm:justify-around">
          {/* F1 */}
          <div
            onMouseEnter={() => hoverActive(".FooterShowDiv1")}
            onMouseLeave={() => hoverDeActive(".FooterShowDiv1")}
            className="w-fit h-fit flex flex-col gap-[1px]"
          >
            <p className="select-none cursor-pointer">Privacy polity</p>

            <div className="FooterShowDiv1 w-[0px] h-[1px] bg-[#9c6b25]"></div>
          </div>

          {/* F2 */}
          <div
            onMouseEnter={() => hoverActive(".FooterShowDiv2")}
            onMouseLeave={() => hoverDeActive(".FooterShowDiv2")}
            className="w-fit h-fit flex flex-col gap-[1px]"
          >
            <p className="select-none cursor-pointer">Terms and conditions</p>

            <div className="FooterShowDiv2 w-[0px] h-[1px] bg-[#9c6b25]"></div>
          </div>
        </div>
        <div className="w-[50%] h-fit flex justify-between px-[40px] text-[1rem] CFF max-sm:w-full max-sm:ga-[10px] sm:justify-around ">
          {/* F1 */}
          <div
            onMouseEnter={() => hoverActive(".FooterShowDiv3")}
            onMouseLeave={() => hoverDeActive(".FooterShowDiv3")}
            className="w-fit h-fit flex flex-col gap-[1px]"
          >
            <p className="select-none cursor-pointer">+9134593583</p>

            <div className="FooterShowDiv3 w-[0px] h-[1px] bg-[#9c6b25]"></div>
          </div>

          {/* F2 */}
          <div
            onMouseEnter={() => hoverActive(".FooterShowDiv4")}
            onMouseLeave={() => hoverDeActive(".FooterShowDiv4")}
            className="w-fit h-fit flex flex-col gap-[1px]"
          >
            <p className="select-none cursor-pointer">info@ananta.in</p>

            <div className="FooterShowDiv4 w-[0px] h-[1px] bg-[#9c6b25]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
