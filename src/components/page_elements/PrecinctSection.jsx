"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import InnerImgContant from "../ui/InnerImgContant";
import TheAddressComponent from "../ui/TheAddressComponent";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PrecinctSection = () => {


  // ------------------------------------------ Functions
  const WraperScrollAinmation = () => {
    const WSA = gsap.timeline({
      scrollTrigger: {
        trigger: ".WDFS",
        start: "top top",
        end: "+=100% bottom",
        scrub: true,
        pin:true,
        // markers: true,
      },
    });
    WSA.fromTo(
      ".svg",
      {
        maskSize: "30%",
        maskPosition: "20% 10%",
      },
      {
        maskSize: "600%",
        maskPosition: "50% 50%",
        ease: "none",
      },
      "wsa1"
    );
  };
  
   
  // ------------------------------------------ Call
  useEffect(() => {
    WraperScrollAinmation();
  }, []);

  return (
    // Wraper-Div-For_Scrolling
    <div className=" w-full h-fit z-90 relative bg-[#F5F3EA] ">
      <div className="WDFS w-full h-fit  ">

       {/*  TOP-Mention-Contant -Auto Hide */}
       <div className="w-full h-screen absolute top-0 left-0 bg-transparent">

         {/* Title_HighLight */}
         <div className="w-full h-fit flex justify-center items-center pt-[50px]">
          <Image
          className="w-[30%]" 
          src={'/data/TitleDesign.svg'}
          width={1000}
          height={1000}
          alt="Line"
          />
         </div>

         {/* Title */}
         <div className="w-full h-fit flex justify-center items-center pt-[10px] text-[#464238]">
          <h1 className="CFF text-[7vw] leading-[7vw]"> THE PRECINCT </h1>
         </div>

         {/* Description -Container */}
         <div className="w-full h-fit pt-[80px]  absolute  bottom-[35%] right-[10%] text-[#464238]">

          <div className="ml-auto w-full max-w-[600px] flex flex-col gap-[10px] text-[1.7rem] leading-[1.7rem]">
            {/* D1 */}
            <p className="pb-[20px] text-[1.1rem]">Set within Thiruvananthapuram’s </p>

            {/* D2 */}
            <p className="text-justify CFF capitalize pb-[20px]">
              most storied neighbourhood, the precinct around Ananta reflects centuries of royal tradition, cultural depth, and architectural heritage. From revered temples to historic institutions, 
            </p>

            {/* D3 */}
            <p className=" CFF capitalize">
              this area carries a quiet prestige that has defined the city’s identity for generations.
            </p>
          </div>

         </div>

       </div>

       {/* MASK SVG */}
        <div className="svg">
          {/* Inside-BG-Img */}
          <div className="img h-fit relative">
            {/* Image-Top Content */}

            <div className="w-full min-h-screen z-80  ">

              {/* Tag-Title*/}
              <TheAddressComponent />

              {/* Contant-Container */}
              <div className="w-full h-fit">
                <InnerImgContant />
              </div>
            
            </div>
            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default PrecinctSection;
