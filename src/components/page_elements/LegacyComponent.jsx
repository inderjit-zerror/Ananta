"use client"

import Image from "next/image";
import React from "react";
import TheAddressComponent from "../ui/TheAddressComponent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LegacyComponent = () => {
  const AllImgArr = [
    {
      url: `/Img/legacyImg/LImg4.webp`,
      call: "legacyDiv1",
    },
    {
      url: `/Img/legacyImg/LImg2.webp`,
      call: "legacyDiv2",
    },
    {
      url: `/Img/legacyImg/LImg5.webp`,
      call: "legacyDiv3",
    },
    {
      url: `/Img/legacyImg/LImg6.webp`,
      call: "legacyDiv4",
    },
    {
      url: `/Img/legacyImg/LImg7.webp`,
      call: "legacyDiv5",
    },
    {
      url: `/Img/legacyImg/LImg3.webp`,
      call: "legacyDiv6",
    },
    {
      url: `/Img/legacyImg/LImg8.webp`,
      call: "legacyDiv7",
    },
  ];

  // ------------------------------------- FUNCTION

  const HoverAction = (item) => { 
    gsap.to('.legacyDiv',{
        opacity:0
    })
    gsap.to(item,{
        opacity:1
    })
    gsap.to('.blurDiv',{
      opacity:1,
    })
  }

  const HoverPreAction = () => {
    gsap.to('.legacyDiv',{
        opacity:0
    })
    
    gsap.to('.blurDiv',{
      opacity:0,
    })
   
  }

  

  return (
    <>
      <div id="Address" className="w-full min-h-screen z-90 relative bg-[#e7d9bf]">
        {/* All_Image_Div_Container */}
        <div className="w-full h-screen relative ">
          {AllImgArr.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  item.call
                } w-full h-full legacyDiv absolute top-0 left-0 overflow-hidden opacity-0 z-[${
                  index + 1
                }]`}
              >
                <Image
                  className="w-full h-full object-cover object-center"
                  src={item.url}
                  width={1000}
                  height={1000}
                  alt={`Lalegacy Images ${index + 1}`}
                />
              </div>
            );
          })}
        </div>

        {/* Blur Div */}
        <div className="blurDiv w-full h-full absolute top-0 left-0 z-10 backdrop-blur-[1px] bg-white/30 opacity-0"></div>

        {/* TOP-Intraction-Container */}
        <div className="w-full h-full absolute top-0 left-0 z-30 flex px-[40px] flex-col ">


          {/* Title */}
          <div className="w-full h-[180px] flex justify-center items-center mt-[70px] invert-100 ">
            <Image
              className=" h-full"
              src={"/data/LegacyTitle.svg"}
              width={1000}
              height={1000}
              alt="Legacy Title"
            />
          </div>

          {/* Intraction-Container */}
          <div className=" w-full h-fit flex justify-center items-center mt-[50px]">

            {/* SVG-Container */}
            <div className="w-full max-w-[650px] h-fit relative">
              <Image
                className=" w-full object-cover scale-[1.1] invert-[0.7]"
                src={"/data/Intreaction.svg"}
                width={1000}
                height={1000}
                alt="Intreaction SVG"
              />

              {/* HoverDiv1 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv1')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[27%] left-[43%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv2 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv2')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[39%] left-[44%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv3 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv3')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[54%] left-[52%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv4 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv4')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[64%] left-[52%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv5 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv5')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[72%] left-[44%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv6 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv6')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[85%] left-[41%] rounded-full cursor-pointer ">

              </div>

              {/* HoverDiv7 */}
              <div onMouseEnter={()=>HoverAction('.legacyDiv7')} onMouseLeave={()=>HoverPreAction()} className="w-[20px] h-[20px] absolute top-[50%] left-[23%] rounded-full cursor-pointer ">

              </div>

              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegacyComponent;
