import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit z-90  flex flex-col pt-[80px] bg-[#FEF7EE] text-black VText">
      {/* Title_Div */}
      <div className="w-full h-fit flex justify-center items-center  gap-[10px] px-[40px]">
        <p className="T_Size ">ANANTA</p>
        <p className=" text-[2rem]">By</p>
        <p className="T_Size ">ELITE</p>
      </div>

      {/* Desc */}
      <div className="w-full h-fit max-w-[400px] m-auto text-center mt-[30px] mb-[70px] px-[40px]">
        <p className="text-[2rem] leading-[2rem]">SanctuaryTimeless Luxury. Infinite Legacy</p>
      </div>


      {/* Img-Cont */}
      <div className="w-full h-[360px] overflow-hidden">
        <Image 
         src={'/Img/footer/FooterImg.jpg'}
         className="w-full h-full object-cover object-center"
         width={1000}
         height={1000}
         alt="bg"
        />
      </div>

      {/* Info */}
      <div className="w-full h-fit flex justify-between px-[40px] text-[1rem] CFF py-[20px]">
        <p className="">Privacy polity</p>
        <p className="">Terms and conditions</p>
        <p className="">+9134593583</p>
        <p className="">info@ananta.in</p>
      </div>
      
    </div>
  );
};

export default Footer;
