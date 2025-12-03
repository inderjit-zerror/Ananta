"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LegacyComponent = () => {
  const ringRef = useRef(null);
  const ring2Ref = useRef(null);

  const AllImgArr = [
    {
      url: `/Img/legacyImg/L1.webp`,
      call: "legacyDiv1",
    },
    {
      url: `/Img/legacyImg/L2.webp`,
      call: "legacyDiv2",
    },
    {
      url: `/Img/legacyImg/L3.webp`,
      call: "legacyDiv3",
    },
    {
      url: `/Img/legacyImg/L4.webp`,
      call: "legacyDiv4",
    },
    {
      url: `/Img/legacyImg/L5.webp`,
      call: "legacyDiv5",
    },
    {
      url: `/Img/legacyImg/L6.webp`,
      call: "legacyDiv6",
    },
    {
      url: `/Img/legacyImg/L7.webp`,
      call: "legacyDiv7",
    },
    {
      url: `/Img/legacyImg/L7.webp`,
      call: "legacyDiv8",
    },
  ];

  // ------------------------------------- FUNCTION

  const HoverAction = (item) => {
    gsap.to(".legacyDiv", {
      opacity: 0,
    });
    gsap.to(item, {
      opacity: 1,
    });
    gsap.to(".blurDiv", {
      opacity: 1,
    });
  };

  const HoverPreAction = () => {
    gsap.to(".legacyDiv", {
      opacity: 0,
    });

    gsap.to(".blurDiv", {
      opacity: 0,
    });
  };

  useEffect(() => {
    const randomDelay = () => Math.random() * 0.4; // 0–400ms small delay

    // Animate all hotspot-ring elements
    gsap.utils.toArray(".hotspot-ring").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.6, opacity: 0.6 },
        {
          scale: 1.3,
          opacity: 0,
          duration: 1.8,
          repeat: -1,
          delay: randomDelay(),
          ease: "power2.out",
        }
      );
    });

    // Animate all outer circles (Outer_T1)
    gsap.utils.toArray(".Outer_T1").forEach((el) => {
      gsap.to(el, {
        scale: 2,
        opacity: 0,
        duration: 1.2,
        repeat: -1,
        delay: randomDelay(),
        ease: "power1.inOut",
      });
    });

    // Animate all outer circles (Outer_T2)
    gsap.utils.toArray(".Outer_T2").forEach((el) => {
      gsap.to(el, {
        scale: 3,
        opacity: 0,
        duration: 1.2,
        repeat: -1,
        delay: randomDelay(),
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <>
      <div className="h-fit w-full relative z-[99] bg-[#e7d9bf] overflow-x-hidden">
        {/* Img_BG */}
        <div className="w-full h-full  absolute z-[1] ">
          <div className="blurDiv w-full h-full absolute top-0 left-0 z-10 backdrop-blur-[1px] bg-white/30 opacity-0"></div>
          {AllImgArr.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  item.call
                } w-full h-full legacyDiv absolute top-0 left-0 overflow-hidden opacity-0 z-[${
                  index + 1
                }]`}
              >
                <Image
                  className="w-full h-full object-cover object-center"
                  src={item.url}
                  width={1000}
                  height={1000}
                  alt={`Lalegacy Images ${index + 1}`}
                />
              </div>
            );
          })}
        </div>

        {/* Title IMG */}
        <div className="w-full relative  z-[99]  flex justify-center items-center pt-[70px] max-sm:pt-[30px] px-[50px] ">
          <Image
            className="w-[35vw] max-sm:w-full  "
            src={"/data/LegacyTitle.svg"}
            width={1000}
            height={1000}
            alt="Legacy Title"
          />
        </div>

        {/* Hover Div */}
        <div className="w-full h-fit relative z-[999]  px-[30px] max-sm:px-[10px] ">
          <div className=" w-full h-fit flex justify-center items-center py-[100px]  overflow-hidden pb-[150px]  ">
            {/* SVG-Container */}
            <div className="w-full max-w-[650px] h-fit relative">
              <Image
                className=" w-full object-cover scale-[1.1] "
                src={"/data/Intreaction.svg"}
                width={1000}
                height={1000}
                alt="Intreaction SVG"
              />
              <Image
                className=" w-full absolute z-[-1] top-0 left-0 object-cover   "
                src={"Img/Vectorbg.svg"}
                width={1000}
                height={1000}
                alt="Intreaction SVG"
              />
              

              {/* HoverDiv1 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv1")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute  top-[24%] left-[46.6%] rounded-full cursor-pointer  "
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">01</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv2 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv2")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[38.9%] left-[47.3%] rounded-full cursor-pointer"
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">02</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv3 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv3")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[57.3%] left-[57.7%] rounded-full cursor-pointer"
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">03</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv4 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv4")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[71%] left-[56.5%] rounded-full cursor-pointer"
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">04</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv5 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv5")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[79.2%] left-[47%] rounded-full cursor-pointer "
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">05</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv6 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv6")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[96%] left-[44.1%] rounded-full cursor-pointer  "
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">06</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv7 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv7")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[52.8%] left-[21.4%] rounded-full cursor-pointer   "
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">07</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>

              {/* HoverDiv8 */}
              <div
                onMouseEnter={() => HoverAction(".legacyDiv8")}
                onMouseLeave={() => HoverPreAction()}
                className="w-[20px] h-[20px] absolute top-[26.4%] left-[59.1%] rounded-full cursor-pointer  "
              >
                <div className="hotspot-container w-full h-full relative ">
                  <div className="hotspot-inner ">08</div>
                  <div ref={ringRef} className="hotspot-ring" />
                  <div ref={ring2Ref} className="hotspot-ring" />

                  <div className="Outer_T1 absolute w-full h-full rounded-full border-4 border-white "></div>
                  <div className="Outer_T2 absolute w-full h-full rounded-full border-4 border-white bg-transparent scale-0 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegacyComponent;
