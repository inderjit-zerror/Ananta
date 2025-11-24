"use client";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyResidenceModel from "./MyResidenceModel";

const Component3DModel = () => {
  return (
    <div className="w-full h-screen ">
      <Canvas className="w-full h-screen flex ">
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
