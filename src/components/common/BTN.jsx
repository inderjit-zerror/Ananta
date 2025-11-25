import React from "react";
import FlowerElement from "../ui/FlowerElement";

const BTN = ({ text }) => {
  return (
    <div className="bg-[#B3976E]  hover:bg-[#9c6b25] w-fit h-fit px-[10px]  py-[10px] FSB select-none cursor-pointer flex gap-[10px] justify-center items-center">
      <FlowerElement />
      <p className="text-[0.875rem] text-[#F5F3EA]">{text}</p>
      <FlowerElement />
    </div>
  );
};

export default BTN;
