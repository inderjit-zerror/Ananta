import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit z-90 px-[40px] flex flex-col pt-[80px] bg-[#FEF7EE] text-black">

      <div className="w-full mx-auto flex flex-col md:flex-row justify-between gap-10 items-center">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-xl font-serif tracking-wide">
            ANANTA <span className="font-light">by</span> ELITE
          </h2>

          <p className="text-sm leading-relaxed max-w-xs">
            Classical Symmetry, Minimal Lines, And Premium Materials Engineered
            For Lasting Strength And Quiet Elegance.
          </p>
        </div>

        {/* CENTER SECTION */}
        <div className="flex flex-col items-center text-center gap-4 md:w-1/3">
          <h3 className="text-xl font-serif leading-snug">
            Sanctuary Timeless
            <br /> Luxury. Infinite Legacy.
          </h3>

          <div className="text-sm leading-relaxed">
            <p>+91 3459 3583</p>
            <p>Info@Ananta.In</p>
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="flex md:w-1/3 w-full justify-center md:justify-end">
          <div className="w-[250px] h-[300px] overflow-hidden rounded-sm">
            <Image
              src={"/Img/footer/footer.jpg"}
              alt="building"
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER LINE */}
      <div className="w-full border-t border-[#d7d7c9] mt-16 pt-5">
        <div className="flex justify-start gap-[20px] text-sm ">
          <p>Privacy Policy</p>
          <p>Terms And Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
