"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const NewAmenitiesSection = () => {
  const dataArr = [
    {
      mainTitle: " The Art of Refined Everday Living.",
      url: `/Img/displayContent/DCImg4.webp`,
      descT: "Overview",
      desc: "A living room designed around proportion and openness. Textural finishes that elevate simplicity into quiet luxury. Seamless transitions between spaces, crafted for intuitive living.",
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
      mainTitle: "The Retreat Into Relaxation",
      url: `/Img/bd.png`,
      descT: "Overview",
      desc: `Bedrooms shaped for rest and retreat.
Restrooms designed with balance, precision, and
serene materiality.

A home where privacy, light, and spaciousness
come together in quiet harmony.`,
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
      mainTitle: "Reflections Of Timeless Living",
      url: `/Img/VideoPlayBackIMG.png`,
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

  const [openindex, setOpenIndex] = useState(null);

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

  useEffect(() => {
    if (window.innerWidth < 780) {
      setOpenIndex(null);
    }
  }, []);

  // const SetClick = (index) => {
  //   if (openindex === index) {
  //     if (window.innerWidth < 780) {
  //       setOpenIndex(null);
  //     }
  //   } else{
  //     setOpenIndex(index);
  //   }
  // };

  const SetClick = (index) => {
  setOpenIndex((prev) => (prev === index ? null : index));
};

  return (
    <div
      onMouseMove={MoveMouse}
      className="w-full min-h-fit max-sm:min-h-fit bg-[#F5F3EA] pt-[50px] pb-[100px] max-sm:pb-[50px] max-sm:pt-[60px] px-[2vw] relative max-sm:px-[20px]"
    >
      <div className=" bg-white max-sm:hidden opacity-0 CTO px-[20px] py-[10px] fixed top-0 left-0 ">
        <p className="CFF text-[14px] leading-[14px] text-[#9c6b25] pointer-events-none">
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
      <div className="w-full  h-fit flex flex-col pt-[50px] text-[#9c6b25] gap-[20px] max-sm:gap-[10px] bg">
        {dataArr.map((item, index) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              onClick={() => SetClick(index)}
              className={`w-full transition-max-h  duration-700 ease-in ${
                index == openindex
                  ? "max-h-[150vh] "
                  : " max-h-[70px] max-sm:max-h-[45px] border-b-[1px] border-[##9c6b25] select-none cursor-pointer"
              } flex flex-col overflow-hidden  `}
            >
              {/* Title */}
              <div className="w-full h-fit  py-[10px] flex sm:justify-between whitespace-nowrap max-sm:gap-[13px]  ">
                <p className="text-[28px] leading-[32px] max-sm:text-[16px] max-sm:leading-[18px] CFF sm:hidden ">
                  {" "}
                  0{index + 1}
                </p>
                <p className=" text-[28px] pb-[30px] max-sm:pb-[10px] max-sm:text-[16px] max-sm:leading-[18px] leading-[32px] CFF ">
                  {item.mainTitle}
                </p>
                <p className="text-[28px] leading-[32px] CFF max-sm:hidden">
                  {" "}
                  0{index + 1}
                </p>
                {index == openindex ? (
                  <>
                    <p className="text-[28px] leading-[32px] max-sm:text-[22px] max-sm:leading-[18px]  CFF sm:hidden ml-auto ">
                      <MdKeyboardArrowUp />
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[28px] leading-[32px] max-sm:text-[22px] max-sm:leading-[18px]  CFF sm:hidden ml-auto ">
                      <MdKeyboardArrowDown />
                    </p>
                  </>
                )}
              </div>

              {/* Img */}
              <div className="w-full h-[580px] max-sm:h-[382px] shrink-0 flex whitespace-nowrap">
                <img
                  src={item.url}
                  alt="ik"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* mini-Cont */}
              <div className="w-full h-fit flex gap-[4vw] max-sm:gap-[0px] justify-between  max-sm:flex-col ">
                {/* left */}
                <div className="w-[50%] h-full pr-[7vw] py-[40px] flex flex-col gap-[20px] max-sm:w-[100%] max-sm:pr-0 ">
                  <p className="CFF text-[32px] leading-[32px] max-sm:text-[16px] max-sm:leading-[18px]">
                    OverView
                  </p>
                  <p className="STF text-[20px] leading-[22px] max-sm:text-[14px] max-sm:leading-[16px] ">
                    {item.desc}
                  </p>
                </div>
                {/* right */}
                <div className="w-fit h-fit flex flex-col py-[40px] STF max-sm:py-[10px] ">
                  {/* top */}
                  <div className="w-fit h-fit flex flex-col    ">
                    <p className="CFF text-[32px] leading-[32px] max-sm:text-[16px] msx-sm:leading-[18px]">
                      Key Highlight
                    </p>
                    <div className="w-fit h-fit flex py-[40px] gap-[40px]  ">
                      {/* t1 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url1} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px] max-sm:text-[14px] max-sm:leading-[16px] ">
                          {item.text1}
                        </p>
                      </div>
                      {/* t2 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url2} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px] max-sm:text-[14px] max-sm:leading-[16px] ">
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
                        <p className=" text-[20px] leading-[20px] max-sm:text-[14px] max-sm:leading-[16px] ">
                          {item.text3}
                        </p>
                      </div>
                      {/* b2 */}
                      <div className="w-[200px] h-fit flex flex-col gap-[20px] max-sm:w-[50%]">
                        <div className="h-[40px]">
                          <img src={item.url4} alt="" className="h-full" />
                        </div>
                        <p className=" text-[20px] leading-[20px] max-sm:text-[14px] max-sm:leading-[16px] ">
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
