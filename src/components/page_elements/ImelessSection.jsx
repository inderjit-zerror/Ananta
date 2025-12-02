'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ImelessSection = () => {
  useEffect(() => {

    // Disable animation on mobile
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      ".TimeLessImg",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: ".Timeless_Cont",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      }
    );
  }, []);

  return (
    <div className="w-full Timeless_Cont  max-sm:h-[100vh] h-[200vh] bg-[#F7F0E4]  relative z-[90] overflow-hidden">
      {/* Title */}
      <div className="w-full h-fit flex justify-center items-center absolute top-[5%] left-0 px-[40px] max-sm:px-[20px] ">
        {/* PC */}
        {/* <div className="w-full max-w-[600px] sm:hidden">
          <Image
            className="w-full h-full object-cover object-center object-top"
            src={"data/TimeLessSMTitle.svg"}
            width={1000}
            height={1000}
            alt="ai"
          />
        </div> */}

        {/* Mobile */}
        <div className="w-full max-w-[600px] pl-[5px] flex justify-center items-center ">
          <Image
            className="w-full h-full object-cover object-center object-top"
            src={"data/TimelessTitle.svg"}
            width={1000}
            height={1000}
            alt="ai"
          />
        </div>
      </div>

      <Image
        className="sm:w-full TimeLessImg h-full object-cover sm:object-center object-top absolute top-0 left-0 z-[-1]"
        src={"/Img/imeless/BigBuilding.png"}
        width={1000}
        height={1000}
        alt="ai"
      />
    </div>
  );
};

export default ImelessSection;
