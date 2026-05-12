"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTN from "../common/BTN";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    city: "",
    phone: "",
    mode: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Disable animation on mobile
    if (window.innerWidth <= 1024) return;

    gsap.fromTo(
      ".BGFC",
      {
        y: -100,
      },
      {
        y: 100,
        ease: "linear",
        scrollTrigger: {
          trigger: ".BGP",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 VALIDATION FIRST
    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    // ✅ Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (!formData.mode.trim()) {
      toast.error("Please select preferred mode");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");

        // ✅ Reset Form
        setFormData({
          firstName: "",
          email: "",
          city: "",
          phone: "",
          mode: "",
          message: "",
        });

        setSuccess("Form submitted successfully!");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <ToastContainer position="top-right" autoClose={3000} />

      <div
        id="form"
        className="w-full min-h-screen z-90 relative BGP BG_Form flex justify-center items-center bg-[#FEF7EE] max-sm:bg-[#FFFEFA] text-[#9c6b25] overflow-hidden max-sm:p-[0px]"
      >


        {/* Background */}
        <img
          src="/Img/Form/FormBG.webp"
          className="w-full h-full object-cover BGFC absolute top-0 left-0 z-[-1] max-sm:hidden"
          alt="BG"
        />

        {/* Inner Container */}
        <div className="w-fit h-fit bg-[#F5F3EA] max-sm:bg-[#FFFEFA] p-[4vw] pb-[2vw] max-sm:pt-[40px] max-sm:px-[30px] max-md:w-full max-md:h-full">
          {/* Title */}
          <div className="w-full h-fit flex flex-col justify-center items-center max-sm:pt-[20px]">
            <Image
              src={"/data/TitleDesign.svg"}
              className="w-full h-[50px] max-sm:h-[50px]"
              width={1000}
              height={1000}
              alt="bg"
            />

            <div className="w-full max-w-[460px] h-fit flex justify-center items-center my-[30px] mb-[60px] max-sm:px-[20px]">
              <p className="CFF text-[2.2rem] leading-[2.2rem] tracking-tight text-center text-[#9c6b25] max-sm:text-[2.1rem] max-sm:leading-[2.1rem]">
                Your Next Address Begins Here
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[800px] CFF">
            {/* First Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-sm:gap-6 mb-7">
              <div>
                <label className="block text-[18px] max-sm:text-[12px] CFF mb-1 max-sm:mb-0">
                  First Name*
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b max-sm:text-[12px] border-[#9c6b25] outline-none pb-0"
                />
              </div>

              <div>
                <label className="block text-[18px] max-sm:text-[12px] CFF mb-1 max-sm:mb-0">
                  Email*
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b max-sm:text-[12px] border-[#9c6b25] outline-none pb-0"
                />
              </div>
            </div>

            {/* City + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-sm:gap-6 mb-7 max-sm:mb-6">
              <div>
                <label className="block text-[18px] max-sm:text-[12px] CFF mb-1 max-sm:mb-0">
                  City / Country
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b max-sm:text-[12px] border-[#9c6b25] outline-none pb-0"
                />
              </div>

              <div>
                <label className="block text-[18px] max-sm:text-[12px] CFF mb-1 max-sm:mb-0">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b max-sm:text-[12px] border-[#9c6b25] outline-none pb-0"
                />
              </div>
            </div>

            {/* Preferred Mode */}
            <div className="mb-7 max-sm:mb-5">
              <label className="block text-[18px] max-sm:text-[12px] mb-4 CFF">
                Select Preferred Mode*
              </label>

              <div className="flex flex-wrap gap-6">
                {["In-person Visit", "Video Call"].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="mode"
                      value={item}
                      checked={formData.mode === item}
                      onChange={handleChange}
                      required
                      className="appearance-none w-4 h-4 rounded-full border border-[#9c6b25] checked:bg-[#9c6b25]"
                    />

                    <span className="text-[14px] max-sm:text-[12px] GFS_R">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-7">
              <label className="block text-[18px] max-sm:text-[12px] mb-1 max-sm:mb-0 CFF">
                Message (Optional)
              </label>

              <textarea
                rows="1"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b max-sm:text-[12px] border-[#9c6b25] outline-none pb-0 resize-none"
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-center">
              <button type="submit" disabled={loading}>
                <BTN text={loading ? "Sending..." : "Send Message"} />
              </button>
            </div>
            

            {/* Footer Text */}
            <p className="capitalize mt-[50px] max-sm:text-[14px] STF text-center max-sm:leading-[16px] max-sm:mb-[40px] sm:text-[12px] sm:leading-[14px]">
              your details are handled only by Elite Developers and are not
              shared with third-party brokers or agencies*
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSection;
