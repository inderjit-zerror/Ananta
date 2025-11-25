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

  // useEffect(()=>{
  //     // bg ----------------
  //       gsap.fromTo('.PIMG',{
  //         y:-500,
  //       },{
  //         y:500,
  //         ease:'linear',
  //         scrollTrigger:{
  //           trigger:'.PIMGCONT',
  //           start:'top bottom',
  //           end:'bottom top',
  //           scrub:true,
  //           // markers:true
  //         }
  //       })
  // },[])
     
  // ------------------------------------------ Call

  return (
    // Wraper-Div-For_Scrolling
    <div className=" w-full h-fit z-90 relative  overflow-hidden PIMGCONT pointer-events-none ">

      {/* Bg-div */}
     
        {/* <Image 
        src={'/Img/BgForest.jpg'}
        className="w-full h-full absolute top-0 left-0 z-[-1] object-cover PIMG " 
        width={1000}
        height={1000}
        alt="bg"    
        />

        <div className="w-full h-full bg-[#00000062] absolute top-0 left-0 z-[-1]">

        </div> */}


        <InnerImgContant />
   </div>
  );
};

export default PrecinctSection;
