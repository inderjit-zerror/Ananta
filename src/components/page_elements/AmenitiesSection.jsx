"use client"
import React, { useEffect, useState } from 'react'
import SectionTitle from '../common/SectionTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    titel: "Interiors & Finishes ",
    para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    para2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    largeImg1: "/Img/amenities/AImg1.webp",
    largeImg2: "/Img/amenities/AImg2.webp",
    smallImg1: "/Img/amenities/AImg3.webp",
    smallImg2: "/Img/amenities/AImg4.webp",
  },
  {
    id: 2,
    titel: "Amenities & Lifestyle",
    para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    para2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    largeImg1: "/Img/amenities/AImg2.webp",
    largeImg2: "/Img/amenities/AImg1.webp",
    smallImg1: "/Img/amenities/AImg4.webp",
    smallImg2: "/Img/amenities/AImg3.webp",
  },
  {
    id: 3,
    titel: "Security & Privacy",
    para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    para2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    largeImg1: "/Img/amenities/AImg3.webp",
    largeImg2: "/Img/amenities/AImg4.webp",
    smallImg1: "/Img/amenities/AImg1.webp",
    smallImg2: "/Img/amenities/AImg2.webp",
  },
]

const AmenitiesSection = () => {

  const [activeAmentie, setActiveAmentie] = useState(data[0])

  useEffect(() => {
      gsap.fromTo(".small_img_1",{
        top:"20%"
      }, {
        scrollTrigger:{
          trigger:".small_img_1",
          start:"top bottom",
          end:"bottom top", 
          scrub:true
        },
        top:"-5%",
        ease:"linear",
      })
      gsap.fromTo(".small_img_2",{
        top:"20%"
      }, {
        scrollTrigger:{
          trigger:".small_img_2",
          start:"top bottom",
          end:"bottom top", 
          scrub:true
        },
        top:"-5%",
        ease:"linear",
      })
  }, [])
   

  return (
    <div>
      <div className="w-full  pb-20 px-[40px] bg-[#F5F3EA] relative z-90 py-[100px] max-sm:py-[80px] max-sm:px-[20px] max-sm:h-fit max-sm:overflow-x-hidden max-sm:px-[10px] max-sm:pb-[20px]">
        <SectionTitle  />
        <div className="w-full max-w-[650px] m-auto h-fit flex justify-center items-center mt-[50px] max-sm:px-[30px] text-[#9c6b25] ">
            <p className=" capitalize text-center text-[4rem] leading-[4rem] CFF  max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
              The Art of Refined Living.
            </p>
          </div>

        <div className="w-full  flex justify-center mt-20 gap-32  max-sm:pt-[20px] border-b border-black/30 max-sm:border-b-0 max-sm:flex-col max-sm:gap-[10px] max-sm:mt-[30px] ">
          {data.map((item, i) => {
            return (
              <div
                onClick={() => {
                  setActiveAmentie(item)
                }} key={i} className={`CFF cursor-pointer capitalize relative text-lg flex justify-center max-sm:justify-start max-sm:border-b border-black/30 pb-[5px] ${activeAmentie.id === item.id ? 'opacity-100' : 'opacity-50'}  `}>
                <div className=" w-fit block relative capitalize">
                  {activeAmentie.id === item.id && <div className="absolute w-full capitalize bg-black left-0 bottom-[-17%] h-[1px] max-sm:h-[0px]"></div>}
                  <p className=' capitalize text-[25px] max-sm:text-[24px] text-[#9c6b25]'>0{i + 1} &nbsp; {item.titel} </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Top */}
        <div className="w-full mt-20 relative flex items-end  justify-between max-sm:h-fit  max-sm:flex-col max-sm:mt-[0px]   ">
          <div className=" small_img_1 w-[28vw] absolute bg-[#F5F3EA] top-0 left-[15vw] aspect-[4/3] p-10  max-sm:w-[70vw] max-sm:left-[-3%] max-sm:h-[300px] max-sm:p-[10px]">
            <div className="w-full h-full overflow-hidden">
              <img className='w-full h-full object-cover' src={activeAmentie.smallImg1} alt="" />
            </div>
          </div>

          <div className="w-[20%] flex gap-2 STF  text-[20px] leading-[22px] max-sm:hidden text-[#9c6b25]">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para1}</p>
          </div>

          <div className="w-[60vw] shrink-0 aspect-[5/3] max-sm:w-full max-sm:h-[500px] max-sm:mt-[200px] ">
            <img className='w-full h-full object-cover' src={activeAmentie.largeImg1} alt="" />
          </div>

          <div className="w-[20%] flex gap-2 STF text-[20px] leading-[22px] text-black max-sm:hidden max-sm:w-full sm:hidden max-sm:h-fit text-[#9c6b25] ">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para1}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full mt-32 relative flex flex-row-reverse items-end justify-between max-sm:h-fit max-sm:mt-[20px] max-sm:flex-col ">

          <div className="w-[28vw] small_img_2 absolute bg-[#F5F3EA] top-0 max-sm:top-[-10%] right-[15vw] aspect-[4/3] p-10 max-sm:w-[70%] max-sm:left-[-2%] max-sm:p-[10px] max-sm:h-[300px] ">
            <div className="w-full h-full overflow-hidden">
              <img className='w-full h-full object-cover' src={activeAmentie.smallImg2} alt="" />
            </div>

          </div>

          <div className="w-[20%] flex gap-2 STF text-[20px] leading-[22px] max-sm:hidden text-[#9c6b25]">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para2}</p>
          </div>

          <div className="w-[60vw] shrink-0 aspect-[5/3] max-sm:w-full max-sm:h-[500px] max-sm:mt-[100px] ">
            <img className='w-full h-full object-cover' src={activeAmentie.largeImg2} alt="" />
          </div>


          <div className="w-[20%] max-sm:py-[20px] flex gap-2 STF text-[20px] leading-[22px] sm:hidden max-sm:w-full max-sm:mt-[20px] text-[#9c6b25]">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para2}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AmenitiesSection