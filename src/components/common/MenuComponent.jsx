import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MenuBtn from "../ui/MenuBtn";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const MenuComponent = ({ navStatus, SetNavStatus }) => {
  useEffect(() => {
    if (navStatus == false) {
      const MenuTLF = gsap.timeline();
      MenuTLF.to('.menuText',{
        translateY:'300%',
        opacity:0,
        stagger:0.05,
        ease: "power3.inOut",
      })
      MenuTLF.to(".MenuMainCont", {
        width: "0px",
        left: "-40%",
        ease: "power3.inOut",
      });
    } 
    else {
      const MenuTLT = gsap.timeline();
      MenuTLT.to('.menuText',{
        translateY:'0%',
        opacity:1,
        stagger:0.05,
        ease: "power3.inOut",
      })
      MenuTLT.to(".MenuMainCont", {
        width: "100%",
        left: "0%",
        ease: "power3.inOut",
      });
    }
  }, [navStatus]);

  return (
    <div className="MenuMainCont w-full h-[100dvh] fixed top-[0%]  gap-[30px] left-[0%] z-[98] bg-[#F5F3EA] flex flex-col justify-center items-center">
      {/* Menu1 */}
      <div onClick={()=>SetNavStatus(false)} className="w-full h-[2rem]  overflow-hidden flex justify-center items-center">
        <a href="#Address">
          <MenuBtn item={"Address"} menu={'menuText'} />
        </a>
      </div>

      {/* Menu2 */}
      <div onClick={()=>SetNavStatus(false)} className="w-full h-[2rem]  overflow-hidden flex justify-center items-center">
        <a href="#Gallery">
          <MenuBtn item={"Gallery"} menu={'menuText'} />
        </a>
      </div>


      {/* Menu4 */}
      <div onClick={()=>SetNavStatus(false)} className="w-full h-[2rem]  overflow-hidden flex justify-center items-center">
        <a href="#About">
          <MenuBtn item={"About"} menu={'menuText'} />
        </a>
      </div>
    </div>
  );
};

export default MenuComponent;
