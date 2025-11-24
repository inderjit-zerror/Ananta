"use client";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const slides = [
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
const SliderSection = () => {
  const sliderContainer = useRef(null);
  const animationRef = useRef(null);
  const pausedRef = useRef(false);
  const lastCenterIndex = useRef(null);

  const allSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const container = sliderContainer.current;
    if (!container) return;

    const slideEls = container.querySelectorAll(".slide");

    setTimeout(() => {
      const totalWidth = Array.from(slideEls).reduce((acc, slide) => {
        return acc + slide.offsetWidth + 20;
      }, 0);

      animationRef.current = gsap.to(container, {
        x: `-=${totalWidth / 3}`,
        duration: 3,
        ease: "linear",
        repeat: -1,
        paused: false,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 3)),
        },
      });

      const checkCenter = () => {
        if (pausedRef.current) return requestAnimationFrame(checkCenter);

        const centerX = window.innerWidth / 2 - 12;

        slideEls.forEach((slide, index) => {
          const rect = slide.getBoundingClientRect();
          const slideCenter = rect.left + rect.width / 2;
          const distance = Math.abs(slideCenter - centerX);

          if (distance < 10 && lastCenterIndex.current !== index) {
            lastCenterIndex.current = index;
            pausedRef.current = true;
            animationRef.current.pause();

            const computedCenter = window.getComputedStyle(slide);
            const originalCenterStyles = {
              width: slide.offsetWidth + "px",
              height: slide.offsetHeight + "px",
              marginLeft: computedCenter.marginLeft,
              marginRight: computedCenter.marginRight,
            };

            // Identify side elements
            const prevSlide = slideEls[index - 2];
            const nextSlide = slideEls[index + 2];

            // Store side styles
            const originalSideStyles = {};

            if (prevSlide) {
              const comp = window.getComputedStyle(prevSlide);
              originalSideStyles.prev = {
                width: prevSlide.offsetWidth + "px",
                height: prevSlide.offsetHeight + "px",
                marginLeft: comp.marginLeft,
                marginRight: comp.marginRight,
              };
            }

            if (nextSlide) {
              const comp = window.getComputedStyle(nextSlide);
              originalSideStyles.next = {
                width: nextSlide.offsetWidth + "px",
                height: nextSlide.offsetHeight + "px",
                marginLeft: comp.marginLeft,
                marginRight: comp.marginRight,
              };
            }

            // Animate all three together
            const tl = gsap.timeline({
              onComplete: () => {
                const resetTl = gsap.timeline({
                  onComplete: () => {
                    animationRef.current.resume();
                    pausedRef.current = false;
                  },
                });

                // Reset center
                resetTl.to(slide, {
                  ...originalCenterStyles,
                  duration: 1,
                  delay: 1.5,
                  ease: "power2.inOut",
                });

                // Reset sides
                if (prevSlide && originalSideStyles.prev) {
                  resetTl.to(
                    prevSlide,
                    {
                      ...originalSideStyles.prev,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "<"
                  );
                }

                if (nextSlide && originalSideStyles.next) {
                  resetTl.to(
                    nextSlide,
                    {
                      ...originalSideStyles.next,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "<"
                  );
                }
              },
            });

            // Animate center
            if (window.innerWidth > 768) {
              tl.to(slide, {
                width: "45vw",
                height: "60vh",
                duration: 1,
                ease: "power2.inOut",
              });
            } else {
              tl.to(slide, {
                width: "92vw",
                height: "60vh",
                duration: 1,
                ease: "power2.inOut",
              });
            }
            if (window.innerWidth > 768) {
              // Animate sides
              if (prevSlide) {
                tl.to(
                  prevSlide,
                  {
                    width: "15vw",
                    height: "60vh",
                    duration: 1,
                    ease: "power2.inOut",
                  },
                  "<"
                ); // parallel
              }
            }
            if (window.innerWidth > 768) {
              if (nextSlide) {
                tl.to(
                  nextSlide,
                  {
                    width: "15vw",
                    height: "60vh",
                    duration: 1,
                    ease: "power2.inOut",
                  },
                  "<"
                ); // parallel
              }
            }
          }
        });

        requestAnimationFrame(checkCenter);
      };

      requestAnimationFrame(checkCenter);
    }, 0);
  }, []);

  return (
    <div className="w-full h-fit z-90 bg-[#F5F3EA]">
      <SectionTitle textData={"Heritage Refined for the Modern Era"} />

      {/* Desc */}
      <div className="w-full h-fit max-w-[600px] m-auto flex justify-center items-center mt-[50px]">
        <p className=" capitalize text-center text-[1.2rem] leading-[1.2rem] CFF">
          Designed by leading architects, Ananta embodies a rare architectural
          balance— honouring the region’s heritage while embracing modern
          refinement. Its façade reflects a refined interplay of textures and
          light,
        </p>
      </div>

      <div className="w-full my-10 md:my-0 h-[50vh] md:h-screen  flex items-center justify-center overflow-hidden">
        <div
          ref={sliderContainer}
          className="flex gap-5 center will-change-transform"
        >
          {allSlides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${slide.color} relative shrink-0 w-[50vw] md:w-[20vw] h-[60vh] center overflow-hidden`}
            >
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt=""
              />
              <div className="absolute bottom-5 z-2 left-5">
                <p className="text-5xl uppercase w-32 CFF text-white">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default SliderSection;
