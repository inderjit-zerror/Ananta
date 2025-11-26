import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const MyResidenceModel = () => {
  const { scene } = useGLTF("/model/apartment.glb");
  
  // const refModel = useRef();

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".canvasCont",
  //       start: "top bottom",
  //       end: "bottom bottom",
  //       // scrub: true,
  //       markers: true,
  //     },
  //   });

  //   // tl.from(refModel.current.rotation, {
  //   //   x: 0,
  //   //   y: 0,
  //   //   z: 0,
  //   //   duration: 1,
  //   //   ease: "none",
  //   // });

  //   // Animate ONLY X rotation
  //   tl.fromTo(
  //     refModel.current.rotation,
  //     { y: Math.PI / 1.6 }, // starting value (your current rotation)
  //     {
  //       y: Math.PI / 2, // <<< END ROTATION VALUE (customize here)
  //       duration: 1,
  //       ease: "none",
  //     }
  //   );
  // }, []);

  //    return <primitive object={scene} scale={0.5} rotation={[Math.PI / 2, 0, 0]} />;

  return (
    <group  rotation={[0.3, Math.PI / 2, 0]} scale={0.5}>
      <primitive object={scene} />
    </group>
  );
};

export default MyResidenceModel;
