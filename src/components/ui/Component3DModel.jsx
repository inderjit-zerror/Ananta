"use client";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import MyResidenceModel from "./MyResidenceModel";
import { Md360 } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Component3DModel = () => {


  return (
    <div className="w-full h-screen relative canvasCont max-[1030px]:h-[80dvh] ">
      {/* 3D Mention */}
      <div className="w-fit h-[40px] bg-white absolute top-[95%] left-[46%] translate-y-[-50%] px-[17px] z-90 flex gap-[10px] justify-center items-center  pointer-events-none">
        <Md360 className="text-[20px]" />
        <p className="text-[14px]">Drag to spin</p>
      </div>

      {/* 3D Canvas */}
      <Canvas className="w-full h-full flex z-[80] ">
        <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3} // camera kitna neeche jaa sakta hai
          maxPolarAngle={Math.PI / 1.8}
          // X-axis limit
          // minAzimuthAngle={-Math.PI / 4} // left  (-45°)
          // maxAzimuthAngle={Math.PI / 4} // right (+45°)
          target={[0, 0, 0]}
        />
        <Center alignTop>
          <MyResidenceModel />
        </Center>
      </Canvas>
    </div>
  );
};

export default Component3DModel;
