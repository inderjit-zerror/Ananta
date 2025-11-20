import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { vertexShader, fragmentShader } from "@/shaders/BgWhiteHoverShader.js";
import * as THREE from "three";

const SceneBgHoverCanvas = () => {
  const meshRef = useRef();
  const { viewport, size } = useThree();
  const mousePos = useRef(new THREE.Vector2(-10, -10)); 

  const [PlaneSize, SetPlaneSize] = useState({
    width: viewport.width,
    height: viewport.height,
  });

  // Uniforms initial values
  const uniforms = useRef({
    uMouse: { value: new THREE.Vector2(-10, -10) },
    uRadius: { value: 200 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  });

  // ------------------------------- Functions
  // Mouse move handler
  const handlePointerMove = (event) => {


    const x = event.uv.x * size.width;
    const y = event.uv.y * size.height;
    
    mousePos.current.set(x, y);
    
    if (meshRef.current) {
      meshRef.current.material.uniforms.uMouse.value.copy(mousePos.current);
    }
  };

  // Mouse leave handler - reset to off-screen position
  const handlePointerLeave = () => {
    mousePos.current.set(-600, -600);
    if (meshRef.current) {
      meshRef.current.material.uniforms.uMouse.value.copy(mousePos.current);
    }
  };

  
  // Update resolution on resize
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  // -------------------------------- Call

  useEffect(() => {
    SetPlaneSize({
      width: viewport.width,
      height: viewport.height,
    });
  }, [viewport.width, viewport.height]);

  return (
    <>
      <mesh ref={meshRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      >
        <planeGeometry args={[PlaneSize.width, PlaneSize.height]} />
        <shaderMaterial
          uniforms={uniforms.current}
          transparent={true}
          depthWrite={false}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </>
  );
};

export default SceneBgHoverCanvas;
