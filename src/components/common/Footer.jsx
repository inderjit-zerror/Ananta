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

  return (
    <div className="w-full h-screen z-90  flex flex-col pt-[80px] bg-[#FEF7EE] text-black VText max-sm:overflow-x-hidden">
      {/* Title_Div */}
      <div className="w-full h-fit flex justify-center items-center  gap-[10px] px-[40px]">
        <p className="text-[5rem] max-sm:text-[2.5rem] ">ANANTA</p>
        <p className=" text-[2rem] max-sm:text-[1.5rem]">By</p>
        <p className="text-[5rem]  max-sm:text-[2.5rem]">ELITE</p>
      </div>

      {/* Desc */}
      <div className="w-full h-fit max-w-[400px] m-auto text-center mt-[30px] mb-[70px] px-[40px] max-sm:px-[30px]">
        <p className="text-[2rem] leading-[2rem] max-sm:text-[1.5rem] max-sm:leading-[1.5rem]">
          SanctuaryTimeless Luxury. Infinite Legacy
        </p>
      </div>

      {/* Img-Cont */}
      <div className="w-full h-[60vh] overflow-hidden FooterImgCont">
        <Image
          src={"/Img/footer/FooterImg.jpg"}
          className="w-full h-full object-cover object-center FooterImg"
          width={1000}
          height={1000}
          alt="bg"
        />
      </div>

      {/* Info */}
      <div className="w-full h-fit flex py-[20px] max-sm:flex-col">
        <div className="w-[50%] h-fit flex justify-between px-[40px] text-[1rem] CFF max-sm:w-full  max-sm:ga-[10px] sm:justify-around">
          <p className=" hover:border-b-[1px] border-black select-none cursor-pointer">
            Privacy polity
          </p>
          <p className=" hover:border-b-[1px] border-black select-none cursor-pointer">
            Terms and conditions
          </p>
        </div>
        <div className="w-[50%] h-fit flex justify-between px-[40px] text-[1rem] CFF max-sm:w-full max-sm:ga-[10px] sm:justify-around ">
          <p className=" hover:border-b-[1px] border-black select-none cursor-pointer">
            +9134593583
          </p>
          <p className=" hover:border-b-[1px] border-black select-none cursor-pointer">
            info@ananta.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
