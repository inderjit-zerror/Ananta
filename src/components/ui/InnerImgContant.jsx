import Image from "next/image";
import React from "react";
import LegacyComponent from "../page_elements/LegacyComponent";

const InnerImgContant = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col">
        {/* Title & Desc */}
        <div className="w-full h-fit pt-[50px] flex justify-between items-end px-[40px]">
          <img className="w-[50%]" src={"/data/TitleImg.svg"} alt="Title" />

          {/* Desc */}
          <div className="w-[50%] max-w-[500px] h-full flex text-[1rem] text-white pb-[30px]">
            <p>
              The location offers easy access to key civic, cultural, and
              lifestyle landmarks — a rare blend of heritage and convenience.
            </p>
          </div>
        </div>

        {/* Cont-Div1-Img-Container */}
        <div className="w-full h-fit flex items-end mt-[100px] px-[40px]">
          {/* Left-Cont */}
          <div className="w-[50%] h-fit ">
            {/* Img & Text Cont */}
            <div className="w-[550px] h-[250px] flex select-none ">
              {/* Img */}
              <div className=" w-[50%] h-full  overflow-hidden ">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={"/Img/ContImg1.jpg"}
                  width={1000}
                  height={1000}
                  alt="Cont_Img1"
                />
              </div>

              {/* Text */}
              <div className=" w-[50%] h-full bg-[#F5F3EA] flex justify-center items-center px-[40px]">
                <p className="text-[18px] leading-[18px] text-[#212121] CFF text-center">
                  Beyond its heritage, the location offers seamless access to
                  the city`s civic, lifestyle, and institutional landmarks. 
                </p>
              </div>
            </div>
          </div>

          {/* Right-Cont */}
          <div className="w-[50%] h-fit  flex justify-end items-end">
            {/* Img & Text */}
            <div className="w-fit h-fit flex">
              {/* Img-Cont */}
              <div className="w-[250px] h-[250px] overflow-hidden bg-amber-200">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={"/Img/ContImg2.jpg"}
                  width={1000}
                  height={1000}
                  alt="Cont_Img2"
                />
              </div>

              {/* Text-Cont */}
              <div className="w-[400px] h-[450px] bg-[#F5F3EA] p-[30px] flex flex-col justify-between">
                <p className="text-[18px] leading-[18px]">
                  At the Centre of <br /> Significance.
                </p>

                <p className="text-[18px] leading-[18px] text-justify CFF capitalize">
                  This neighbourhood is home to iconic temples, historic
                  institutions, and a sense of dignity that has shaped the citys
                  identity through generations. Within this storied setting,
                  Ananta finds its place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cont-Div-2-Img-Container */}
        <div className="w-full h-screen flex justify-center items-center px-[40px]">

          {/* Image-Text-Cont */}
          <div className="w-[70%] h-[60%] flex">

            {/* Img-Cont */}
            <div className="w-full h-full overflow-hidden flex">
              <Image
                className="w-full h-full object-cover object-center"
                src={"/Img/ContImg3.jpg"}
                width={1000}
                height={1000}
                alt="Cont_Img3"
              />
            </div>

            {/* Text */}
            <div className=" w-[250px] h-[250px] bg-[#F5F3EA] flex justify-center items-center px-[30px]">
              <p className="text-[18px] leading-[18px] text-[#212121] CFF text-center">
                Beyond its heritage, the location offers seamless access to the
                city`s civic, lifestyle, and institutional landmarks. 
              </p>
            </div>

          </div>
          
        </div>

        <LegacyComponent />
      </div>
    </>
  );
};

export default InnerImgContant;
