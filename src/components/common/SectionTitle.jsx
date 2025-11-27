import React from "react";
import Image from "next/image";

const SectionTitle = ({textData}) => {
  return (
    <>
      {/* Draw SVG */}
      <div className=" w-full max-w-[650px] m-auto h-[50px] flex select-none justify-center items-center ">
        <Image
          className=" h-full "
          src={"/data/TitleDesign.svg"}
          width={1000}
          height={1000}
          alt="SVG"
        />
      </div>

      {/* Title */}
      <div className="w-full max-w-[650px] m-auto h-fit flex justify-center items-center mt-[50px] max-sm:px-[30px]">
        <p className=" capitalize text-center text-[4rem] leading-[4rem] CFF  max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
          {textData}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
