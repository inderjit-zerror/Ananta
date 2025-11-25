"use client"
import React, { useEffect } from "react";
import FlowerElement from "../ui/FlowerElement";
import Image from "next/image";
import MenuBtn from "../ui/MenuBtn";
import gsap from "gsap";
import BTN from "./BTN";

const NavBar = () => {

  useEffect(() => {
      gsap.set(".nav_logo",{
        opacity:1,
        delay:2
      })
  }, [])
  

  return (
    <>
      <div className="w-full z-95 fixed top-6 left-0 flex justify-between items-center px-[40px] TextWhite">
        {/* Menu Container */}
        <div className="w-[15%] h-fit flex justify-center items-center gap-[30px]">
          {/* Home */}
          <MenuBtn item={"Home"} />

          {/* About */}
          <MenuBtn item={"About"} />

          {/* Residence */}
          <MenuBtn item={"Residence"} />
        </div>

        {/* Logo Container */}
        <div className="w-fit h-fit flex justify-center items-center select-none cursor-pointer">
          <Image
            src={"/data/LogoMain.svg"}
            className="h-[40px] w-fit nav_logo opacity-0"
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>

        {/* BTN Container */}
        <div className="w-[15%] flex justify-end">
        <BTN text={'Contact Us'} />
        </div>
      </div>
    </>
  );
};

export default NavBar;


