"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MenuBtn from "../ui/MenuBtn";
import gsap from "gsap";
import BTN from "./BTN";
import { RiMenu4Fill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import MenuComponent from "./MenuComponent";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [navStatus, SetNavStatus] = useState(false);
  const navRef = useRef(null);
   let lastScroll = 0;

  const CheckNavBarStatus = () => {
    if (navStatus == false) {
      SetNavStatus(true);
    } else {
      SetNavStatus(false);
    }
  };

  useEffect(() => {
    gsap.set(".nav_logo", {
      opacity: 1,
      delay: 2,
    });
  }, []);


   useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // scroll down → hide
        gsap.to('.NAVALLOPTION', {
          y: "-400%",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        // scroll up → show
        gsap.to('.NAVALLOPTION', {
          y: "0%",
          duration: 0.4,
          ease: "power3.out",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div  className="w-full NAVALLOPTION z-[100] fixed top-5 left-0 flex justify-between items-center px-[40px] TextWhite mix-blend-difference ">
        {/* Menu Container */}
        <div className="w-[18%] h-fit flex justify-center items-center gap-[30px] pl-[5px] max-[1030]:w-full max-[1030]:gap-[10px]  max-[1030]:justify-start  max-[1030]:pl-0 lg:w-full lg:gap-[17px]  lg:justify-start  lg:pl-0 max-md:hidden">
          {/* Address */}
          <a href="#Address">
            <MenuBtn item={"Address"} />
          </a>

          {/* Gallery */}
          <a href="#Gallery">
            <MenuBtn item={"Gallery"} />
          </a>

          {/* FloorPlan */}
          <a href="#FloorPlan">
            <MenuBtn item={"Floor Plan"} />
          </a>

          {/* About */}
          <a href="#About">
            <MenuBtn item={"About"} />
          </a>
        </div>

        {/* Menu Btn */}
        <div
          onClick={CheckNavBarStatus}
          className="w-fit h-fit absolute left-[4%] mt-[30px] md:hidden z-[100] "
        >
          <Hamburger
            toggled={navStatus}
            toggle={SetNavStatus}
            color="#9c6b25"
            className=""
            size={28}
          />
        </div>

        {/* Logo Container */}
        <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-fit h-fit flex justify-center items-center select-none  cursor-pointer  max-[1030]:absolute max-[1030]:top-0 max-[1030]:left-[50%] z-[100]  max-[1030]:translate-x-[-50%] lg:absolute lg:top-1 lg:left-[50%]  lg:translate-x-[-50%]">
          <Image
            src={"/data/LogoMain.svg"}
            className={`h-[30px] max-lg:w-[100px] sm:w-fit nav_logo opacity-0 `}
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>

        {/* BTN Container */}

        {/* <div className="w-[20%] flex justify-end  max-[1030]:w-full lg:w-full max-sm:w-fit max-sm:hidden ">
          <a href="#form">
            <BTN text={"Contact Us"} />
          </a>
        </div> */}

      </div>
        <MenuComponent navStatus={navStatus} SetNavStatus={SetNavStatus} />
    </>
  );
};

export default NavBar;
