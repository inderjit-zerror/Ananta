"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuBtn from "../ui/MenuBtn";
import gsap from "gsap";
import BTN from "./BTN";
import { RiMenu4Fill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import MenuComponent from "./MenuComponent";

const NavBar = () => {
  const [navStatus, SetNavStatus] = useState(false);


  const CheckNavBarStatus = () =>{
    if(navStatus == false){
      SetNavStatus(true)
    }
    else{
      SetNavStatus(false)
    }
  }

  useEffect(() => {
    gsap.set(".nav_logo", {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <>
      <div className="w-full z-[100] fixed top-6 left-0 flex justify-between items-center px-[40px] TextWhite">
        {/* Menu Container */}
        <div className="w-[18%] h-fit flex justify-center items-center gap-[30px] pl-[5px] max-[1030]:w-full max-[1030]:gap-[17px]  max-[1030]:justify-start  max-[1030]:pl-0 lg:w-full lg:gap-[17px]  lg:justify-start  lg:pl-0 max-sm:hidden">
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
            <MenuBtn item={"FloorPlan"} />
          </a>

          {/* About */}
          <a href="#About">
            <MenuBtn item={"About"} />
          </a>
        </div>

        {/* Menu Btn */}
        <div onClick={CheckNavBarStatus} className="w-fit h-fit absolute left-[4%] top-[5%]  sm:hidden z-[100]">
          {navStatus === false ? (
            <>
              <RiMenu4Fill className={`text-white text-[40px] `} />
            </>
          ) : (
            <>
              <CgMenuLeft className={`text-[40px] text-black `} />
            </>
          )}
        </div>

        {/* Logo Container */}
        <div className="w-fit h-fit flex justify-center items-center select-none cursor-pointer  max-[1030]:absolute max-[1030]:top-0 max-[1030]:left-[50%] z-[100]  max-[1030]:translate-x-[-50%] lg:absolute lg:top-0 lg:left-[50%]  lg:translate-x-[-50%]">
          <Image
            src={"/data/LogoMain.svg"}
            className={`h-[40px] max-sm:w-[150px] sm:w-fit nav_logo opacity-0 ${navStatus === true? ('max-sm:invert-100'):('')}  `}
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>

        {/* BTN Container */}

        <div className="w-[20%] flex justify-end  max-[1030]:w-full lg:w-full max-sm:w-fit max-sm:hidden ">
          <a href="#form">
            <BTN text={"Contact Us"} />
          </a>
        </div>

        <MenuComponent navStatus={navStatus} SetNavStatus={SetNavStatus} />
      </div>
    </>
  );
};

export default NavBar;
