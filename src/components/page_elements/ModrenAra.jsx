import Image from "next/image";
import React from "react";
import ContentDisplay from "../ui/ContentDisplay";
import SectionTitle from "../common/SectionTitle";

const ModrenAra = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#F5F3EA] z-90 pb-[50px] ">

        <SectionTitle textData={'Heritage Refined for the Modern Era'} />

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
