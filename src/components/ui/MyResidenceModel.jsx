import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const MyResidenceModel = () => {
  const { scene } = useGLTF("/model/apartment.glb");


  return (
    <group rotation={[0.2, Math.PI / 2, 0]} scale={0.5}>
      <primitive object={scene} />
    </group>
  );
};

export default MyResidenceModel;
