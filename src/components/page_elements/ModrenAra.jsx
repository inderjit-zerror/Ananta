"use client";
// import Image from "next/image";
// import React from "react";
// import ContentDisplay from "../ui/ContentDisplay";
// import SectionTitle from "../common/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";

// const ModrenAra = () => {
//   return (
//     <>
//       <div className="w-full min-h-screen bg-[#F5F3EA] z-90 pb-[50px] ">
//         <SectionTitle textData={"Heritage Refined for the Modern Era"} />

//         {/* Desc */}
//         <div className="w-full h-fit max-w-[600px] m-auto flex justify-center items-center mt-[50px]">
//           <p className=" capitalize text-center text-[1.2rem] leading-[1.2rem] CFF">
//             Designed by leading architects, Ananta embodies a rare architectural
//             balance— honouring the region’s heritage while embracing modern
//             refinement. Its façade reflects a refined interplay of textures and
//             light,
//           </p>
//         </div>

//         {/* Display Content */}
//         <div className="w-full h-fit overflow-hidden flex  justify-center ">

//             <Swiper
//              className="myswiper w-full h-fit flex justify-start bg-amber-700"
//               modules={[Navigation, Autoplay]}
//               navigation={true}
//               centeredSlides={true}
//               loop={true}
//               slidesPerView={'auto'}
//               spaceBetween={30}
//               autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//               }}
//             >
//               {/* S1 */}
//               <SwiperSlide className="custom-slide">
//                 <ContentDisplay width={"100%"} url={"/Img/displayContent/DCImg1.jpg"} />
//               </SwiperSlide>

//               {/* S2 */}
//               <SwiperSlide className="custom-slide">
//                 <ContentDisplay width={"100%"} url={"/Img/displayContent/DCImg2.jpg"} />
//               </SwiperSlide>

//               {/* S3 */}
//               <SwiperSlide className="custom-slide">
//                 <ContentDisplay width={"100%"} url={"/Img/displayContent/DCImg3.jpg"} />
//               </SwiperSlide>

//               {/* S4 */}
//               <SwiperSlide className="custom-slide">
//                 <ContentDisplay width={"100%"} url={"/Img/displayContent/DCImg4.jpg"} />
//               </SwiperSlide>

//               {/* S5 */}
//               <SwiperSlide className="custom-slide">
//                 <ContentDisplay width={"100%"} url={"/Img/displayContent/DCImg1.jpg"} />
//               </SwiperSlide>

//             </Swiper>

//         </div>
//       </div>

//       {/* Slide Width Animation */}
//       <style jsx global>{`
//         .custom-slide {
//           width: 25vw !important;
//           transition: all 0.6s ease;

//         }

//         .swiper-slide-active {
//           width: 50vw !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ModrenAra;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const arrdata = [
  {
    id: 1,
    image: `/Img/displayContent/DCImg1.jpg`,
    title: `Crafted With Precision`,
  },
  {
    id: 2,
    image: `/Img/displayContent/DCImg2.jpg`,
    title: `Crafted With Precision`,
  },
  {
    id: 3,
    image: `/Img/displayContent/DCImg3.jpg`,
    title: `Crafted With Precision`,
  },
  {
    id: 4,
    image: `/Img/displayContent/DCImg4.jpg`,
    title: `Crafted With Precision`,
  },
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arrdata.map((item, index) => {
          return (
            <>
              <div className="w-full h-screen flex justify-center z-90">
                <SwiperSlide className="w-[50vw] h-[600px] " key={index}>
                  <div className="w-full h-full overflow-hidden relative">
                    <Image
                      className="w-full h-full object-center object-cover"
                      src={item.image}
                      width={1000}
                      height={1000}
                      alt="1"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
