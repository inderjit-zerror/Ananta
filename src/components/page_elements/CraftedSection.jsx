import Image from "next/image";
import React from "react";

const CraftedSection = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col Crafted_BG p-[40px] bg-[#FEF7EE] z-90">
        {/* Title-Text-Div */}
        <div className="w-full h-fit flex text-white justify-between items-end">
          {/* title */}
          <div className="w-[50%] h-full">
            <h1 className="text-[8rem] leading-[8rem] CFF">
              Crafted by Masters of Their Discipline
            </h1>
          </div>

          {/* Desc */}
          <div className="w-[50%] max-w-[400px] h-full flex CFF text-justify pr-[40px]">
            <p className="text-[1.1rem] leading-[1.1rem]">
              Ananta is brought to life by a handpicked collective of
              architects, designers, engineers, and artisans — each chosen for
              their mastery, precision, and integrity. From structural experts
              to fine-detail craftsmen, every partner involved reflects a shared
              commitment to excellence and enduring quality.{" "}
            </p>
          </div>
        </div>

        {/* Second-Section */}
        <div className="flex my-[100px] flex-col md:flex-row items-center relative gap-10 md:gap-16 max-w-6xl mx-auto">
          {/* LEFT IMAGES */}
          <div className="flex gap-4 items-end">
            {/* Image 1 */}
            <div className="w-[250px] h-[300px] md:w-[250px] md:h-[300px] overflow-hidden rounded-sm">
              <Image
                src={"/Img/Crafted/TMBG1.jpg"}
                width={1000}
                height={1000}
                alt="Interior 1"
                className="w-full h-full object-cover object-right"
              />
            </div>

            {/* Image 2 */}
            <div className="w-[250px] h-[330px] md:w-[320px] md:h-[430px] overflow-hidden rounded-sm">
              <Image
                src="/Img/Crafted/TMBG1.jpg"
                width={1000}
                height={1000}
                alt="Interior 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex justify-center md:justify-start w-fit absolute bottom-0 right-[-50%]">
            <h2 className="text-white text-4xl md:text-6xl font-serif tracking-wide">
              THE MAKERS
            </h2>
          </div>
        </div>

        {/* 3-Section */}
        <div className="  my-[100px] CFF w-full flex  items-center  justify-between ">

        {/* LEFT SIDE CONTENT BLOCK */}
        <div className="flex flex-col gap-8 text-white md:w-1/2 ">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif">
            ELITE DEVELOPERS
          </h1>

          {/* Paragraph */}
          <p className="max-w-md text-sm md:text-base leading-relaxed">
            The Philosophy Behind Ananta Is Simple Yet Profound:
            True Luxury Should Endure. Guided By This Belief,
            Every Design Choice Is Made With Permanence, Balance,
            And Cultural Resonance In Mind.
          </p>

          {/* STATS SECTION */}
          <div className="grid grid-cols-2 gap-10 mt-6">

            {/* Stat 1 */}
            <div>
              <h2 className="text-4xl font-serif">20+</h2>
              <p className="text-sm mt-1 leading-snug">
                Years Of Architectural<br />And Development<br />Expertise.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h2 className="text-4xl font-serif">1.5M+ Sq. Ft</h2>
              <p className="text-sm mt-1 leading-snug">
                Delivered Across<br />Residential And Commercial<br />Projects.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h2 className="text-4xl font-serif">15</h2>
              <p className="text-sm mt-1 leading-snug">
                Landmark Projects<br />Completed Across Major<br />Indian Cities.
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <h2 className="text-4xl font-serif">98%</h2>
              <p className="text-sm mt-1 leading-snug">
                Customer Satisfaction<br />Across All Delivered<br />Developments.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CONTENT BLOCK */}
        <div className="flex flex-col  text-white md:w-1/2 pr-[50px]  ">

          {/* Right Paragraph */}
          <p className="max-w-[350px] text-[1rem] leading-[1rem] md:text-base leading-relaxed CFF ml-auto ">
            The Result Is A Home That Transcends Trends — An
            Architectural Expression That Is Sophisticated,
            Rooted In Heritage, And Crafted To Remain Relevant
            For Generations.
          </p>

          {/* Right Image */}
          <div className="w-full max-w-[350px] h-[350px] md:h-[350px] overflow-hidden rounded-sm ml-auto">
            <Image
              src={'/Img/Crafted/TMBG2.jpg'}  // Replace
              alt="Interior"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        </div>

      </div>
    </>
  );
};

export default CraftedSection;
