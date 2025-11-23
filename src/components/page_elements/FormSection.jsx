import Image from "next/image";
import React from "react";

const FormSection = () => {
  return (
    <>
      <div className="w-full min-h-screen z-90 relative BG_Form flex justify-center items-center text-black">

        {/* Inner-Container */}
        <div className="w-fit h-fit bg-[#FEF7EE] p-[4vw]">

          {/* Title-Section */}
          <div className="w-full h-fit flex flex-col justify-center items-center">
            {/* SVG */}
            <Image
              src={"/data/TitleDesign.svg"}
              className="w-full max-w-[400px]"
              width={1000}
              height={1000}
              alt="bg"
            />

            {/* Desc */}
            <div className="w-full max-w-[400px] h-fit flex justify-center items-center my-[30px]">
              <p className="CFF text-[2.2rem] leading-[2.2rem] tracking-tight text-center">
                Your Next Address Begins Here
              </p>
            </div>
          </div>

          {/* Form Container */}
          <form className="w-full max-w-[600px] CFF">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black outline-none pb-1"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black outline-none pb-1"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-black outline-none pb-1"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black outline-none pb-1"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-10">
              <label className="block text-sm mb-3">Select Subject?</label>
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="subject"
                      className="appearance-none w-4 h-4 rounded-full border border-gray-500 checked:bg-black"
                    />
                    <span className="text-sm">General Inquiry</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="2"
                className="w-full bg-transparent border-b border-black outline-none pb-1 resize-none"
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-center">
              <button className="px-10 py-3 bg-[#3C553A] text-white rounded-sm font-medium tracking-wide flex items-center gap-2">
                ✶ Send Message ✶
              </button>
            </div>
          </form>

        </div>

      </div>
    </>
  );
};

export default FormSection;
