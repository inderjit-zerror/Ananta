'use client'
import React from "react";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {HoverImageActivate, HoverImageDeActivate} from '@/functions/HoverImageFunction'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const AmenitiesSection = () => {
  const ASData = [
    {
      text1: "Concierge lobby",
      text2: "A warm, refined welcome for residents and guests.",
      url: `/Img/amenities/AImg1.jpg`,
    },
    {
      text1: "Rooftop Lounge",
      text2: "Panoramic views of the royal precinct and city skyline.",
      url: `/Img/amenities/AImg2.jpg`,
    },
    {
      text1: "fitness & Wellness Centre",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg3.jpg`,
    },
    {
      text1: "Landscaped Courtyard",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg4.jpg`,
    },
    {
      text1: "Biometric Access",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg5.jpg`,
    },
    {
      text1: "Concierge lobby",
      text2: "A warm, refined welcome for residents and guests.",
      url: `/Img/amenities/AImg1.jpg`,
    },
    {
      text1: "Rooftop Lounge",
      text2: "Panoramic views of the royal precinct and city skyline.",
      url: `/Img/amenities/AImg2.jpg`,
    },
    {
      text1: "fitness & Wellness Centre",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg3.jpg`,
    },
    {
      text1: "Landscaped Courtyard",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg4.jpg`,
    },
    {
      text1: "Biometric Access",
      text2: "Premium equipment for balanced wellbeing.",
      url: `/Img/amenities/AImg5.jpg`,
    },
  ];

  const ImgContComp = ({ text1, text2, url, isOdd, ClsId }) => {
    return (
      <>
        <div
          className={` w-[330px] h-fit flex flex-col ${
            isOdd ? "mt-[50px]" : ""
          }  whitespace-nowrap `}
        >
          {/* text1 */}
          <p className="  uppercase text-[1rem] leading-[1rem] select-none text-[#212121] pb-[30px] flex">
            {text1}
          </p>

          {/* Img-Cont */}
          <div onMouseEnter={()=>HoverImageActivate(`.cls${ClsId}`)} onMouseLeave={()=>HoverImageDeActivate(`.cls${ClsId} `)} className="w-full h-[210px] overflow-hidden select-none cursor-pointer">
            <Image
              src={url}
              className={`w-full h-full object-cover object-center cls${ClsId}`}
              width={1000}
              height={1000}
              alt="img"
            />
          </div>

          {/* text2 */}
          <p className="text-[1rem] leading-[1rem] capitalize select-none text-[#3b3b3b] pt-[30px] flex ">
            {text2}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col z-90 bg-[#F5F3EA] px-[40px]">
      {/* title */}
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <SectionTitle textData={"Amenities Crafted for Everyday Luxury"} />
      </div>

      {/* Element */}

      <div className="w-full h-fit overflow-x-hidden flex  my-auto text-wrap  whitespace-nowrap">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
        //   pagination={{
        //     clickable: true,
        //   }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {ASData.map((item, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <SwiperSlide>
                <ImgContComp
                  key={index}
                  text1={item.text1}
                  text2={item.text2}
                  url={item.url}
                  isOdd={isOdd}
                  ClsId={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AmenitiesSection;
