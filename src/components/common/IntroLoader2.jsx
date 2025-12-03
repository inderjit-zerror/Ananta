"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import gsap from "gsap";

const IntroLoader = () => {

    useEffect(() => {
        gsap.to(".intro_clip_1", {
            left: "-100%",
            duration: 1,
            delay: 1,
            ease:"power2.inOut"
        })
        gsap.to(".intro_clip_2", {
            right: "-100%",
            duration: 1,
            delay: 1,
            ease:"power2.inOut"
        })
        gsap.to(".loader_txt", {
           opacity:0,
            duration:.5,
            delay: 1,
            ease:"power2.inOut"
        })
        gsap.to(".introLogo", {
            top:"24px",
            height:"40px",
            filter:"invert(0)",
            duration: 1,
            delay: .8,
            ease:"expo.inOut"
        })
        gsap.set(".intro_div",{display:"none",delay:2})

    }, [])


    return (
        <div className=' intro_div  w-full h-screen fixed z-[999]  flex items-center justify-center'>
            <div className='loader_txt absolute bottom-20 uppercase text-sm z-10 text-[#9c6b25] flex justify-center items-center'>Loading 
                 <div className='w-[80px] h-fit flex relative justify-center items-center '>
                    <span className="loader "></span>
                 </div>
                 </div>
            <div
                className=" intro_clip_1 h-full w-1/2 bg-[#F5F3EA] top-0 left-0 absolute z-[-1]">
                {/* <img className='   w-full h-full object-cover opacity-[.3]' src="/Img/BgImgPattren1.svg" alt="" /> */}
            </div>
            <div
                className=" intro_clip_2 h-full w-1/2 bg-[#F5F3EA] top-0 right-0 absolute z-[-1]">
                {/* <img className='   w-full h-full object-cover opacity-[.3]' src="/Img/BgImgPattren1.svg" alt="" /> */}
            </div>
                <Image
                    src={"/data/LogoMain.svg"}
                    className="md:h-[4vw] w-[150px] introLogo absolute  z-10  "
                    width={1000}
                    height={1000}
                    alt="Logo"
                />
        </div>
    )
}

export default IntroLoader