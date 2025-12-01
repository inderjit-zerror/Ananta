import React from "react";
import Image from "next/image";

const SectionTitle = ({textData}) => {
  return (
    <>
      {/* Draw SVG */}
      <div className=" w-full max-w-[650px] m-auto h-[50px] flex select-none justify-center items-center  ">
        <Image
          className=" h-full "
          src={"/data/TitleDesign.svg"}
          width={1000}
          height={1000}
          alt="SVG"
        />
      </div>     
    </>
  );
};

export default SectionTitle;
