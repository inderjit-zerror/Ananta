"use client";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: `/Img/displayContent/DCImg1.webp`,
    title: `Designed for Modern Living`,
  },
  {
    id: 2,
    image: `/Img/displayContent/DCImg2.webp`,
    title: `Where Elegance Meets Craftsmanship`,
  },
  {
    id: 3,
    image: `/Img/displayContent/DCImg3.webp`,
    title: `Inspired Spaces, Timeless Style`,
  },
  {
    id: 4,
    image: `/Img/displayContent/DCImg4.webp`,
    title: `Built to Stand Out`,
  },
  {
    id: 5,
    image: `/Img/displayContent/DCImg1.webp`,
    title: `Experience Refined Perfection`,
  },
];

const SliderSection = () => {

  const containerRef = useRef(null);

  const expandSlide = (hovered, all) => {
    gsap.to(all, {
      width: "15vw",
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(hovered, {
      width: "50vw",
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const resetSlides = (all) => {
    gsap.to(all, {
      width: `${100 / all.length}vw`,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const slidesEl = gsap.utils.toArray(".modern-slide");

    slidesEl.forEach((slide) => {
      slide.addEventListener("mouseenter", () => expandSlide(slide, slidesEl));
      slide.addEventListener("mouseleave", () => resetSlides(slidesEl));
    });

    return () => {
      slidesEl.forEach((slide) => {
        slide.removeEventListener("mouseenter", () => expandSlide(slide, slidesEl));
        slide.removeEventListener("mouseleave", () => resetSlides(slidesEl));
      });
    };
  }, []);

  return (
    <div id="Gallery" className="w-full h-fit z-90 bg-[#F5F3EA] pt-[100px] max-sm:pt-[80px]">
      <SectionTitle textData={"Heritage Refined for the Modern Era"} />

       <div className="w-full max-w-[650px] m-auto h-fit flex justify-center items-center mt-[50px] max-sm:px-[30px] text-[#9c6b25] ">
        <p className=" capitalize text-center text-[4rem] leading-[4rem] CFF  max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
          Heritage Refined for the Modern Era
        </p>
      </div>

      {/* Desc */}
      <div className="w-full h-fit max-w-[600px] m-auto flex justify-center items-center mt-[20px] max-sm:px-[30px]">
        <p className=" capitalize text-center text-[20px] leading-[22px] max-sm:leading-[20px] STF max-sm:text-[1rem] text-[#9c6b25]">
          Designed by leading architects, Ananta embodies a rare architectural
          balance— honouring the region’s heritage while embracing modern
          refinement. Its façade reflects a refined interplay of textures and
          light,
        </p>
      </div>

      <div className="w-full  px-[40px] max-sm:px-[10px] my-[10px] md:my-0 h-[50vh] md:h-fit  py-[90px]  flex items-center justify-center overflow-hidden max-sm:hidden">
        <div
          ref={containerRef}
          className="flex gap-4 justify-center items-center w-full overflow-hidden " 
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="modern-slide group relative h-[60vh] cursor-pointer overflow-hidden"
              style={{ width: `${100 / slides.length}vw` }}
            >
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt=""
              />

              <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute bottom-10 left-10 ">
                <p className="slide-title  translate-y-5 text-4xl capitalize w-[80%] CFF text-white ">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>


      {/* max-sm: Code */}

      <div className="w-full h-[500px] overflow-x-scroll flex sm:hidden gap-[20px] max-sm:mt-[40px]">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

        {
            slides.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="w-full h-full  flex justify-center items-center">
                    {/* Img-Div */}
                    <div className="w-[95%] h-full bg-amber-600 overflow-hidden">
                      <Image 
                       src={item.image}
                       className="w-full h-full object-center object-cover"
                       width={1000}
                       height={1000}
                       alt="img"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
        }
      </Swiper>

      </div>
      


    </div >
  );
};

export default SliderSection;
