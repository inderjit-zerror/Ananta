import React from "react";
import FlowerElement from "../ui/FlowerElement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const BTN = ({ text }) => {

  const RotateFLowerActive = () => {
    gsap.to('.fl',{
      rotateZ:'360deg',
      duration:0.7,
      ease:'linear'
    })
  }

  const RotateFLowerDeActive = () => {
    gsap.to('.fl',{
      rotateZ:'0deg',
      duration:0.7,
      ease:'linear'
    })
  }

  return (
    <div onMouseEnter={()=>RotateFLowerActive()} onMouseLeave={()=>RotateFLowerDeActive()} className="bg-[#B3976E] transition-all duration-300  hover:bg-[#9c6b25] w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center max-sm:px-[20px] max-sm:py-[15px]">
      <FlowerElement  />
      <p className="text-[0.875rem]  max-[1030]:text-[0.8rem] text-[#F5F3EA]">{text}</p>
      <FlowerElement  />
    </div>
  );
};

export default BTN;

