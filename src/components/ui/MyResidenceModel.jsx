import { useGLTF } from "@react-three/drei";
import React from "react";


const MyResidenceModel = () => {
  const { scene } = useGLTF("/model/apartment.glb");
  
  return (
    <group  rotation={[0.2, Math.PI / 2, 0]} scale={0.5}>
      <primitive object={scene}  />
    </group>
  );
};

export default MyResidenceModel;
