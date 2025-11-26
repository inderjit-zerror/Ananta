"use client";
import React, { useEffect } from "react";
import FlowerElement from "../ui/FlowerElement";
import Image from "next/image";
import MenuBtn from "../ui/MenuBtn";
import gsap from "gsap";
import BTN from "./BTN";

const NavBar = () => {
  useEffect(() => {
    gsap.set(".nav_logo", {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <>
      <div className="w-full z-95 fixed top-6 left-0 flex justify-between items-center px-[40px] TextWhite">
        {/* Menu Container */}
        <div className="w-[18%] h-fit flex justify-center items-center gap-[30px] pl-[5px]">
          {/* Home */}
          <a href="#Address">
            <MenuBtn item={"Address"} />
          </a>

          {/* About */}

          <a href="#Gallery">
            <MenuBtn item={"Gallery"} />

          </a>

          
          <a href="#FloorPlan">
            <MenuBtn item={"FloorPlan"} />
          </a>


          <a href="#About">
            <MenuBtn item={"About"} />
          </a>




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
        <a href="#form">
        <BTN text={'Contact Us'} />
        </a>
        </div>

        {/* BTN */}
        {/* <div className="w-[15%] flex justify-end">
          <div className="bg-[#B3976E] group transition-all duration-300 text-[#F5F3EA]  hover:bg-transparent border border-transparent hover:text-[#B3976E] hover:border-[#B3976E] w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center">
            <img
              className=" group-hover:invert-30 group-hover:rotate-[360deg] transition-all duration-300  h-[18px]"
              src={"/data/ContactFlower.svg"}
              alt="Flower"
            />
            <p className="text-[0.875rem] group-hover:underline ">Contact Us</p>
            <img
              className=" group-hover:invert-30 group-hover:-rotate-[360deg] transition-all duration-300  h-[18px]"
              src={"/data/ContactFlower.svg"}
              alt="Flower"
            />
          </div>
                  
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
