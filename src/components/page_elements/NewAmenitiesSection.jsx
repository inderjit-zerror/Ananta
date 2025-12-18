"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";

const NewAmenitiesSection = () => {
  const dataArr = [
    {
      mainTitle: "Exquisite Lifestyle",
      url: `/Img/amenities/AImg2.webp`,
      descT: "Overview",
      desc: "Crafted for elevated everyday living with premium leisure amenities. Designed to blend comfort, exclusivity, and indulgence, every space elevates.",
      url1: `/Img/ex1.svg`,
      text1:
        "Rooftop temperature-controlled pool, sauna, sun deck with palace views",
      url2: `/Img/ex2.svg`,
      text2: "Rooftop temperature-controlled",
      url3: `/Img/ex3.svg`,
      text3: "Rooftop temperature",
      url4: `/Img/ex4.svg`,
      text4: "Rooftop temperature-controlled",
    },
    {
      mainTitle: "Residence & Privacy",
      url: `/Img/amenities/AImg3.webp`,
      descT: "Overview",
      desc: "Crafted for elevated everyday living with premium leisure amenities. Designed to blend comfort, exclusivity, and indulgence, every space elevates.",
      url1: `/Img/ex1.svg`,
      text1:
        "Rooftop temperature-controlled pool, sauna, sun deck with palace views",
      url2: `/Img/ex2.svg`,
      text2: "Rooftop temperature-controlled",
      url3: `/Img/ex3.svg`,
      text3: "Rooftop temperature",
      url4: `/Img/ex4.svg`,
      text4: "Rooftop temperature-controlled",
    },
    {
      mainTitle: "Architectural Luxury",
      url: `/Img/amenities/AImg4.webp`,
      descT: "Overview",
      desc: "Crafted for elevated everyday living with premium leisure amenities. Designed to blend comfort, exclusivity, and indulgence, every space elevates.",
      url1: `/Img/ex1.svg`,
      text1:
        "Rooftop temperature-controlled pool, sauna, sun deck with palace views",
      url2: `/Img/ex2.svg`,
      text2: "Rooftop temperature-controlled",
      url3: `/Img/ex3.svg`,
      text3: "Rooftop temperature",
      url4: `/Img/ex4.svg`,
      text4: "Rooftop temperature-controlled",
    },
    {
      mainTitle: "Intelligent Engineering",
      url: `/Img/amenities/AImg5.webp`,
      descT: "Overview",
      desc: "Crafted for elevated everyday living with premium leisure amenities. Designed to blend comfort, exclusivity, and indulgence, every space elevates.",
      url1: `/Img/ex1.svg`,
      text1:
        "Rooftop temperature-controlled pool, sauna, sun deck with palace views",
      url2: `/Img/ex2.svg`,
      text2: "Rooftop temperature-controlled",
      url3: `/Img/ex3.svg`,
      text3: "Rooftop temperature",
      url4: `/Img/ex4.svg`,
      text4: "Rooftop temperature-controlled",
    },
    {
      mainTitle: "Security & Services",
      url: `/Img/amenities/AImg1.webp`,
      descT: "Overview",
      desc: "Crafted for elevated everyday living with premium leisure amenities. Designed to blend comfort, exclusivity, and indulgence, every space elevates.",
      url1: `/Img/ex1.svg`,
      text1:
        "Rooftop temperature-controlled pool, sauna, sun deck with palace views",
      url2: `/Img/ex2.svg`,
      text2: "Rooftop temperature-controlled",
      url3: `/Img/ex3.svg`,
      text3: "Rooftop temperature",
      url4: `/Img/ex4.svg`,
      text4: "Rooftop temperature-controlled",
    },
  ];

  const [openindex, setOpenIndex] = useState(0);

  const handleMouseEnter = (index) => {
    if (openindex !== index) {
      gsap.to(".CTO", {
        opacity: 1,
        ease: "power3.out",
      });
    } else {
      gsap.to(".CTO", {
        opacity: 0,
        ease: "power3.inOut",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (openindex === index) {
      return;
    } else {
      gsap.to(".CTO", {
        opacity: 0,
        ease: "power3.inOut",
      });
    }
  };

  const MoveMouse = (e) => {
    gsap.to(".CTO", {
      x: e.clientX + 15,
      y: e.clientY + 15,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    handleMouseEnter();
    handleMouseLeave();
  }, [openindex]);

  return (
    <div
      onMouseMove={MoveMouse}
      className="w-full min-h-screen bg-[#F5F3EA] pt-[50px] pb-[100px] max-sm:pt-[100px] px-[2vw] relative max-sm:px-[20px]"
    >
      <div className=" bg-[#f0dbb5] max-sm:hidden opacity-0 CTO px-[20px] py-[10px] fixed top-0 left-0 rounded-md">
        <p className="CFF text-[18px] leading-[18px] text-white pointer-events-none">
          Click To Open
        </p>
      </div>

      {/* Title-Cont */}
      <div className="w-full h-fit flex flex-col justify-center items-center text-white ">
        <SectionTitle />
        <div className="w-full max-w-[650px] m-auto h-fit flex justify-center items-center mt-[50px]   ">
          <p className=" capitalize text-center text-[#9c6b25] text-[4rem] leading-[4rem] CFF  max-sm:text-[2.5rem] max-sm:leading-[2.5rem] ">
            The Art of Refined <br /> Living.
          </p>
        </div>
      </div>

      {/* Contant */}
      <div className="w-full  h-fit flex flex-col pt-[50px] text-[#9c6b25] gap-[20px]">
        {dataArr.map((item, index) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              onClick={() => setOpenIndex(index)}
              className={`w-full transition-all duration-300 ease-in ${
                index == openindex
                  ? "h-auto "
                  : " h-[70px] border-b-[1px] border-[##9c6b25] select-none cursor-pointer"
              } flex flex-col overflow-hidden `}
            >
              {/* Title */}
              <div className="w-full h-fit  py-[10px] flex justify-between whitespace-nowrap">
                <p className=" text-[28px] pb-[30px] leading-[32px] CFF">
                  {item.mainTitle}
                </p>
                <p className="text-[28px] leading-[32px] CFF"> 0{index + 1}</p>
              </div>

              {/* Img */}
              <div className="w-full h-[580px] max-sm:h-[382px] flex whitespace-nowrap">
                <img
                  src={item.url}
                  alt="ik"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* mini-Cont */}
              <div className="w-full h-fit flex gap-[4vw] justify-between max-sm:flex-col ">
                {/* left */}
                <div className="w-[50%] h-full pr-[7vw] py-[40px] flex flex-col gap-[20px] max-sm:w-[100%] max-sm:pr-0 ">
                  <p className="CFF text-[32px] leading-[32px]">OverView</p>
                  <p className="STF text-[20px] leading-[22px]">{item.desc}</p>
                </div>
                {/* right */}
                <div className="w-fit h-fit flex flex-col py-[40px] STF  ">
                  {/* top */}
                  <div className="w-fit h-fit flex flex-col    ">
                    <p className="CFF text-[32px] leading-[32px]">
                      Key Highlight
                    </p>
                    <div className="w-fit h-fit flex py-[40px] gap-[40px]  ">
                      {/* t1 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url1} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px]">
                          {item.text1}
                        </p>
                      </div>
                      {/* t2 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url2} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px]">
                          {item.text2}
                        </p>
                      </div>
                    </div>
                    {/* b */}
                    <div className="w-fit h-fit flex py-[40px] gap-[40px]">
                      {/* b1 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url3} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px]">
                          {item.text3}
                        </p>
                      </div>
                      {/* b2 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url4} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px]">
                          {item.text4}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewAmenitiesSection;
