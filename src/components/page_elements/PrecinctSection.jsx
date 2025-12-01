import React from "react";
import InnerImgContant from "../ui/InnerImgContant";
import BgWhiteHoverComponent from "./BgWhiteHoverComponent";


const PrecinctSection = () => {

  return (
    <div className=" w-full h-fit z-90 relative overflow-hidden PIMGCONT pointer-events-none max-sm:pb-[40px] max-sm:bg-[#E7D9BF] ">
      <BgWhiteHoverComponent />
        <InnerImgContant />
   </div>
  );
};

export default PrecinctSection;
