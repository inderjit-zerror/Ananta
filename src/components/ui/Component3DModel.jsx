"use client";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyResidenceModel from "./MyResidenceModel";
import { Md360 } from "react-icons/md";

const Component3DModel = () => {
  return (
    <div className="w-full h-screen relative ">

      {/* 3D Mention */}

      <div className="w-fit h-[50px] bg-white absolute top-[40%] left-[20%] px-[20px] z-90 flex gap-[10px] justify-center items-center  pointer-events-none">
        <Md360 className="text-[30px]" />
        <p>Drag to spin</p>
      </div>
      
      {/* 3D Canvas */}
      <Canvas className="w-full h-full flex z-[80] ">
        <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3} // camera kitna neeche jaa sakta hai
          maxPolarAngle={Math.PI / 1.8}
          // X-axis limit
          minAzimuthAngle={-Math.PI / 4} // left  (-45°)
          maxAzimuthAngle={Math.PI / 4} // right (+45°)
          target={[0, 0, 0]}
        />
        <Center alignTop>
          <MyResidenceModel  />
        </Center>
      </Canvas>
    </div>
  );
};

export default Component3DModel;
