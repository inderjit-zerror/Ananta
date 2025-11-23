import React from "react";
import FlowerElement from "../ui/FlowerElement";
import Image from "next/image";
import MenuBtn from "../ui/MenuBtn";

const NavBar = () => {
  return (
    <>
      <div className="w-full z-95 fixed top-6 left-0 flex justify-between items-center px-[40px] text-black">
        {/* Menu Container */}
        <div className="w-fit h-fit flex justify-center items-center gap-[30px]">
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
            className="h-[40px] w-fit"
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>

        {/* BTN Container */}
        <div className="bg-[#B3976E] w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center">
          <FlowerElement />
          <p className="text-[0.875rem] text-[#F5F3EA]">Contact Us</p>
          <FlowerElement />
        </div>
      </div>
    </>
  );
};

export default NavBar;
