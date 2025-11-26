"use client"
import React, { useEffect, useState } from 'react'
import SectionTitle from '../common/SectionTitle';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    titel: "INTERIORS & FINISHES ",
    para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    para2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    largeImg1: "/Img/amenities/AImg1.webp",
    largeImg2: "/Img/amenities/AImg2.webp",
    smallImg1: "/Img/amenities/AImg3.webp",
    smallImg2: "/Img/amenities/AImg4.webp",
  },
  {
    id: 2,
    titel: "AMENITIES & LIFESTYLE",
    para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    para2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolorem veritatis sed nesciunt maxime. Id obcaecati deleniti eligendi atque sequi!",
    largeImg1: "/Img/amenities/AImg2.webp",
    largeImg2: "/Img/amenities/AImg1.webp",
    smallImg1: "/Img/amenities/AImg4.webp",
    smallImg2: "/Img/amenities/AImg3.webp",
  },
  {
    id: 3,
    titel: "SECURITY & PRIVACY",
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
      <div className="w-full  pb-20 px-[40px] bg-[#F5F3EA] relative z-90 pt-[50px]">
        <SectionTitle textData={"The Art of Refined Living."} />
        <div className="w-full  flex justify-center mt-20 gap-32 border-b border-black/30">
          {data.map((item, i) => {
            return (
              <div
                onClick={() => {
                  setActiveAmentie(item)
                }} key={i} className={`CFF cursor-pointer relative text-lg flex justify-center ${activeAmentie.id === item.id ? 'opacity-100' : 'opacity-50'} `}>
                <div className=" w-fit block relative">
                  {activeAmentie.id === item.id && <div className="absolute w-full bg-black left-0 bottom-0 h-[1px]"></div>}
                  <p>0{i + 1} &nbsp; {item.titel} </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full mt-20 relative flex items-end justify-between ">
          <div className=" small_img_1 w-[28vw] absolute bg-[#F5F3EA] top-0 left-[15vw] aspect-[4/3] p-10">
            <div className="w-full h-full overflow-hidden">
              <img className='w-full h-full object-cover' src={activeAmentie.smallImg1} alt="" />
            </div>
          </div>

          <div className="w-[20%] flex gap-2 CFF leading-tight text-lg">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para1}</p>
          </div>
          <div className="w-[60vw] shrink-0 aspect-[5/3] ">
            <img className='w-full h-full object-cover' src={activeAmentie.largeImg1} alt="" />
          </div>
        </div>

        <div className="w-full mt-32 relative flex flex-row-reverse items-end justify-between ">
          <div className="w-[28vw] small_img_2 absolute bg-[#F5F3EA] top-0 right-[15vw] aspect-[4/3] p-10">
            <div className="w-full h-full overflow-hidden">
              <img className='w-full h-full object-cover' src={activeAmentie.smallImg2} alt="" />
            </div>

          </div>

          <div className="w-[20%] flex gap-2 CFF leading-tight text-lg">
            <p>0{activeAmentie.id}</p>
            <p>{activeAmentie.para2}</p>
          </div>
          <div className="w-[60vw] shrink-0 aspect-[5/3] ">
            <img className='w-full h-full object-cover' src={activeAmentie.largeImg2} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AmenitiesSection