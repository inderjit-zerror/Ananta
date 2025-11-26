'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import LegacyComponent from "../page_elements/LegacyComponent";
import {HoverImageActivate, HoverImageDeActivate} from '@/functions/HoverImageFunction'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const InnerImgContant = () => {

  useEffect(()=>{

    // Img1
    gsap.fromTo('.innerImgCont1Img',{
      y:-60,
    },{
      y:60,
      ease:'linear',
      scrollTrigger:{
        trigger:'.innerImgCont1ImgCont',
        start:'top bottom',
        end:'bottom top',
        scrub:true,
        // markers:true
      }
    })

    // Img2
     gsap.fromTo('.innerImgCont2Img',{
      y:-60,
    },{
      y:60,
      ease:'linear',
      scrollTrigger:{
        trigger:'.innerImgCont2ImgCont',
        start:'top bottom',
        end:'bottom top',
        scrub:true,
        // markers:true
      }
    })

    // Img3
     gsap.fromTo('.innerImgCont3Img',{
      y:-60,
    },{
      y:60,
      ease:'linear',
      scrollTrigger:{
        trigger:'.innerImgCont3ImgCont',
        start:'top bottom',
        end:'bottom top',
        scrub:true,
        // markers:true
      }
    })


  },[])


  return (
    <>
      <div className="w-full h-fit flex flex-col BBBBB text-black">
        {/* Title & Desc */}
        <div className="w-full h-fit pt-[50px] flex justify-between items-end px-[40px]">
          <img className="w-[50%] invert-100 max-[1030px]:w-[60%]" src={"/data/TitleImg.svg"} alt="Title" />

          {/* Desc */}
          <div className="w-[50%] max-w-[500px] h-full flex text-[1rem] text-black pb-[30px] max-[1030px]:max-w-[300px]">
            <p>
              The location offers easy access to key civic, cultural, and
              lifestyle landmarks — a rare blend of heritage and convenience.
            </p>
          </div>
        </div>

        {/* Cont-Div1-Img-Container */}
        <div className="w-full h-fit flex items-end mt-[100px] px-[40px]  max-[1030px]:flex-col max-[1030px]:gap-[120px] ">
          {/* Left-Cont */}
          <div className="w-[50%] h-fit max-[1030px]:w-full">
            {/* Img & Text Cont */}
            <div className="w-[550px] h-[250px] flex select-none bg-amber-700 ">
              {/* Img */}
              <div onMouseEnter={()=> HoverImageActivate('.innerImgCont1Img')} onMouseLeave={()=> HoverImageDeActivate('.innerImgCont1Img')}  className=" w-[50%] h-full  overflow-hidden cursor-pointer innerImgCont1ImgCont ">
                <Image
                  className="w-full h-full object-cover innerImgCont1Img scale-[1.5]"
                  src={"/Img/ContImg1.webp"}
                  width={1000}
                  height={1000}
                  alt="Cont_Img1"
                />
              </div>

              {/* Text */}
              <div className=" w-[50%] h-full bg-[#F5F3EA] flex justify-center items-center px-[40px]">
                <p className="text-[18px] leading-[18px] text-[#212121] CFF text-center">
                  Beyond its heritage, the location offers seamless access to
                  the city`s civic, lifestyle, and institutional landmarks. 
                </p>
              </div>
            </div>
          </div>

          {/* Right-Cont */}
          <div className="w-[50%] h-fit  flex justify-end items-end">
            {/* Img & Text */}
            <div className="w-fit h-fit flex">
              {/* Img-Cont */}
              <div onMouseEnter={()=> HoverImageActivate('.innerImgCont2Img')} onMouseLeave={()=> HoverImageDeActivate('.innerImgCont2Img')} className="w-[250px] h-[250px] innerImgCont2ImgCont cursor-pointer overflow-hidden ">
                <Image
                  className="w-full h-full object-cover object-center innerImgCont2Img sacle-[2]"
                  src={"/Img/ContImg2.webp"}
                  width={1000}
                  height={1000}
                  alt="Cont_Img2"
                />
              </div>

              {/* Text-Cont */}
              <div className="w-[400px] h-[450px] bg-[#F5F3EA] p-[30px] flex flex-col justify-between">
                <p className="text-[18px] leading-[18px]">
                  At the Centre of <br /> Significance.
                </p>

                <p className="text-[18px] leading-[18px] text-justify CFF capitalize">
                  This neighbourhood is home to iconic temples, historic
                  institutions, and a sense of dignity that has shaped the citys
                  identity through generations. Within this storied setting,
                  Ananta finds its place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cont-Div-2-Img-Container */}
        <div className="w-full h-screen flex justify-center items-center px-[40px]">

          {/* Image-Text-Cont */}
          <div className="w-[70%] h-[60%] flex max-[1030px]:w-[90%]">

            {/* Img-Cont */}
            <div onMouseEnter={()=> HoverImageActivate('.innerImgCont3Img')} onMouseLeave={()=> HoverImageDeActivate('.innerImgCont3Img')} className="w-full h-full innerImgCont3ImgCont overflow-hidden flex cursor-pointer">
              <Image
                className="w-full h-full object-cover object-center innerImgCont3Img scale-[1.5]"
                src={"/Img/ContImg3.webp"}
                width={1000}
                height={1000}
                alt="Cont_Img3"
              />
            </div>

            {/* Text */}
            <div className=" w-[250px] h-[250px] bg-[#F5F3EA] flex justify-center items-center px-[30px]">
              <p className="text-[18px] leading-[18px] text-[#212121] CFF text-center">
                Beyond its heritage, the location offers seamless access to the
                city`s civic, lifestyle, and institutional landmarks. 
              </p>
            </div>

          </div>
          
        </div>

        
      </div>
    </>
  );
};

export default InnerImgContant;
