"use client";
import { Center, Environment, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import MyResidenceModel from "./MyResidenceModel";
import { Md360 } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SetCameraRef({ cameraRef }) {
  // grab camera from the fiber context and store it in parent ref
  const { camera } = useThree();
  useEffect(() => {
    if (cameraRef) cameraRef.current = camera;
  }, [camera, cameraRef]);
  return null;
}

const Component3DModel = () => {
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);


  const [canvasReady, setCanvasReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  // useProgress returns active=true while loaders are running, false when done
  function LoaderWatcher() {
    const { active } = useProgress();
    useEffect(() => {
      // when active becomes false -> loading finished
      if (!active) {
        setModelLoaded(true);
      }
    }, [active]);
    return null;
  }

  useEffect(() => {
    if (!canvasReady || !modelLoaded) return;

    const controls = controlsRef.current;
    const model = modelRef.current;
    if (!controls || !model) return;

    ScrollTrigger.refresh();

    // ORIGINAL angle
    const initialAngle = controls.getAzimuthalAngle();

    // Rotate camera immediately to initial + 180deg
    const startAngle = initialAngle + Math.PI;
    controls.setAzimuthalAngle(startAngle);
    controls.update();

    // Set initial scale to 0.5
    model.scale.set(0.5, 0.5, 0.5);

    // Proxy object for rotation
    const proxy = { angle: startAngle };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".canvasCont",
        start: "top 50%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // 1) Rotation animation
    tl.to(proxy, {
      angle: initialAngle,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        controls.setAzimuthalAngle(proxy.angle);
        controls.update();
      },
    });

    // 2) Scale animation
    tl.to(
      model.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "<" // sync with rotation start OR remove "<" to run after
    );

    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, [canvasReady, modelLoaded]);




  return (
    <div
      className={`w-full h-screen relative canvasCont max-[1030px]:h-[80dvh] ${isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >      <div className="w-fit h-[40px] bg-white absolute top-[95%] left-[46%] translate-y-[-50%] px-[17px] z-90 flex gap-[10px] justify-center items-center pointer-events-none">
        <Md360 className="text-[20px]" />
        <p className="text-[14px]">Drag to spin</p>
      </div>

      <Canvas
        className="w-full h-full flex z-[80]"
        onCreated={() => {
          // Canvas created (camera/scene available)
          setCanvasReady(true);
        }}
      >
        <SetCameraRef cameraRef={cameraRef} />
        <Environment preset="studio" />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          target={[0, 0, 0]}
        />

        {/* watch loader status */}
        <LoaderWatcher />

        {/* Render model inside Suspense in case it uses useGLTF */}
        <React.Suspense fallback={null}>
          <Center alignTop>
            <group ref={modelRef}>
              <MyResidenceModel />
            </group>
          </Center>
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Component3DModel;
