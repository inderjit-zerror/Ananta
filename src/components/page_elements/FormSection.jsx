"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTN from "../common/BTN";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FormSection = () => {
  useEffect(() => {
    // Disable animation on mobile
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      ".BGFC",
      {
        y: -100,
      },
      {
        y: 100,
        ease: "linear",
        scrollTrigger: {
          trigger: ".BGP",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers:true
        },
      }
    );
  }, []);

  return (
    <>
      <div
        id="form"
        className="w-full min-h-screen z-90 relative BGP BG_Form flex justify-center items-center bg-[#FEF7EE] text-[#9c6b25]  overflow-hidden max-sm:p-[0px]  "
      >
        {/* <Image
          src={"/Img/Form/FormBG.webp"}
          className="w-full h-full object-cover BGFC absolute top-0 left-0 z-[-1]"
          width={1000}
          height={1000}
          alt="FBG"
        /> */}
        <img src="/Img/Form/FormBG.webp" className="w-full h-full object-cover BGFC absolute top-0 left-0 z-[-1]" alt="oad" />

        {/* Inner-Container */}
        <div className="w-fit h-fit bg-[#FEF7EE] p-[4vw] max-sm:pt-[40px] max-sm:px-[30px]  max-md:w-full max-md:h-full ">
          {/* Title-Section */}
          <div className="w-full h-fit flex flex-col justify-center items-center max-sm:pt-[20px]">
            {/* SVG */}
            <Image
              src={"/data/TitleDesign.svg"}
              className="w-full h-[50px] max-sm:h-[50px]"
              width={1000}
              height={1000}
              alt="bg"
            />

            {/* Desc */}
            <div className="w-full max-w-[460px] h-fit flex justify-center items-center my-[30px] mb-[60px] max-sm:px-[20px]">
              <p className="CFF text-[2.2rem] leading-[2.2rem] tracking-tight text-center text-[#9c6b25] max-sm:text-[2.1rem] max-sm:leading-[2.1rem] ">
                Your Next Address Begins Here
              </p>
            </div>
          </div>

          {/* Form Container max-w-[800px] */}
          <form className="w-full max-w-[800px]  CFF">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-[18px] CFF mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#9c6b25] outline-none pb-1"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-[18px] CFF mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#9c6b25] outline-none pb-1"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-[18px] CFF mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-[#9c6b25] outline-none pb-1"
                />
              </div>

              <div>
                <label className="block text-[18px] CFF mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#9c6b25] outline-none pb-1"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-10">
              <label className="block text-[18px] mb-3 CFF">
                Select Subject?
              </label>
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="subject"
                      className="appearance-none w-4 h-4 rounded-full border border-[#9c6b25] checked:bg-[#9c6b25]"
                    />
                    <span className="text-[14px] STF">General Inquiry</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="block text-[18px] mb-2 CFF">Message</label>
              <textarea
                rows="1"
                className="w-full bg-transparent border-b border-[#9c6b25] outline-none pb-1 resize-none"
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-center">
              <BTN text={"Send Message"} />
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default FormSection;
