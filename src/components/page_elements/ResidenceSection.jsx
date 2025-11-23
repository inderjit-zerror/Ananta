import React from "react";
import SectionTitle from "../common/SectionTitle";
import Component3DModel from "../ui/Component3DModel";
import SomeInfoText from "../ui/SomeInfoText";

const ResidenceSection = () => {
  return (
    <div className="w-full min-h-screen flex relative BG_R z-90">
      {/* ContantWraper */}
      <div className="w-full min-h-screen flex flex-col pb-[100px] ">
        {/* Title-Cont */}
        <div className="w-full h-fit flex flex-col justify-center items-center text-white">
          <SectionTitle
            textData={"One Floor. One Residence. Infinite Privacy."}
          />
        </div>

        {/* Desc-Cont */}
        <div className="w-full h-fit flex justify-center select-none items-center CFF text-white gap-[20px] text-[1rem] leading-[1rem] mt-[50px]">
          {/* Left-Desc */}
          <div className="w-full max-w-[300px] flex text-justify">
            <p>
              honour heritage while embracing modern luxury. Its architecture
              balances classical symmetry with contemporary minimalism, built
              not just for today but for the next century.
            </p>
          </div>

          {/* Right-Desc */}
          <div className="w-full max-w-[300px] flex text-justify">
            <p>
              honour heritage while embracing modern luxury. Its architecture
              balances classical symmetry with contemporary minimalism, built
              not just for today but for the next century.
            </p>
          </div>
        </div>

        {/* Small-Info */}
        <p className="text-white mx-auto mt-[50px] text-[14px] leading-[14px]">
          360° Integrated Design
        </p>

        {/* 3D Canvas With Model Container */}
        <Component3DModel />

        {/* Some-Residence-info */}
        <div className="w-full h-fit flex justify-end items-end">
          {/* Right-Container */}
          <div className="w-full max-w-[400px] h-fit flex flex-col text-white mr-[40px]">
            {/* Name */}
            <div className="w-full h-fit justify-start items-center mb-[30px]">
              <h1 className="text-[2rem] CFF">Key Highlights</h1>
            </div>

            {/* Text-Data */}
            <SomeInfoText
              t1={"Location"}
              t2={"Royal Precinct, Thiruvananthapuram"}
            />
            <SomeInfoText
              t1={"Architecture"}
              t2={"Classical Symmetry with Minimal Modern Lines"}
            />
            <SomeInfoText
              t1={"Amenities"}
              t2={"rooftop Lounge, Fitness Suite, Courtyard"}
            />
            <SomeInfoText
              t1={"Privacy"}
              t2={"Private Lift Lobby + Controlled Access"}
            />
            <SomeInfoText
              t1={"Views"}
              t2={"Unobstructed City & Temple-Side Vistas"}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ResidenceSection;
