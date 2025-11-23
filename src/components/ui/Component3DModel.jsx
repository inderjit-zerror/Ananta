"use client";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyResidenceModel from "./MyResidenceModel";

const Component3DModel = () => {
  return (
    <div className="w-full h-screen ">
      <Canvas className="w-full h-screen flex">
        <Environment preset="studio" />

        <OrbitControls enableZoom={false} />
        <Center>
          <MyResidenceModel />
        </Center>
      </Canvas>
    </div>
  );
};

export default Component3DModel;
