import Image from "next/image";
import React from "react";
import ContentDisplay from "../ui/ContentDisplay";

const ModrenAra = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#F5F3EA] z-90 pb-[50px] ">

        {/* Draw SVG */}
        <div className=" w-full h-[50px] flex select-none justify-center items-center mt-[50px]">
            <Image
             className=" h-full "
             src={'/data/TitleDesign.svg'}
             width={1000}
             height={1000}
             alt="SVG"
            />
        </div>

        {/* Title */}
        <div className="w-full h-fit flex justify-center items-center mt-[50px]">
            <p className=" capitalize text-center text-[4rem] leading-[4rem] CFF">Heritage Refined for the <br /> Modern Era</p>
        </div>

        {/* Desc */}
        <div className="w-full h-fit max-w-[600px] m-auto flex justify-center items-center mt-[50px]">
            <p className=" capitalize text-center text-[1.2rem] leading-[1.2rem] CFF">
                Designed by leading architects, Ananta embodies a rare architectural balance—  honouring the region’s heritage while embracing modern refinement. Its façade  reflects a refined interplay of textures and light, 
            </p>
        </div>

        {/* Display-Contant */}
        <div className="w-full h-fit overflow-hidden flex ">

            <div className="w-full h-fit overflow-x-scroll mt-[60px] flex justify-center gap-[20px] shrink-0 whitespace-nowrap scroll-container">
                <ContentDisplay width={'350px'} url={'/Img/displayContent/DCImg1.jpg'} />
                <ContentDisplay width={'350px'} url={'/Img/displayContent/DCImg2.jpg'} />
                <ContentDisplay width={'680px'} url={'/Img/displayContent/DCImg3.jpg'} />
                <ContentDisplay width={'350px'} url={'/Img/displayContent/DCImg4.jpg'} />
                <ContentDisplay width={'350px'} url={'/Img/displayContent/DCImg1.jpg'} />
            </div>

        </div>


      </div>
    </>
  );
};

export default ModrenAra;
