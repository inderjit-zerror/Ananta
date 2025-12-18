import React from "react";
import FlowerElement from "../ui/FlowerElement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const DownBTN = ({text}) => {

    
  const DownloadRotateFLowerActive = () => {
    gsap.to('.flD',{
      rotateZ:'360deg',
      duration:0.7,
      ease:'linear'
    })
  }

  const DownloadRotateFLowerDeActive = () => {
    gsap.to('.flD',{
      rotateZ:'0deg',
      duration:0.7,
      ease:'linear'
    })
  }

  return (
    <div onMouseEnter={()=>DownloadRotateFLowerActive()} onMouseLeave={()=>DownloadRotateFLowerDeActive()} className="hover:bg-[#f7e6cf] group text-[#9c6b25]  transition-all duration-300 bg-[#ffffff] w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center max-sm:px-[20px] max-sm:py-[15px]">
     <img className='h-[18px] flD' src={'/data/Flower2.svg'} alt="Flower" />
      <p className="text-[0.875rem]  max-[1030]:text-[0.8rem]">{text}</p>
     <img className='h-[18px] flD' src={'/data/Flower2.svg'} alt="Flower" />
    </div>
  )
}

export default DownBTN