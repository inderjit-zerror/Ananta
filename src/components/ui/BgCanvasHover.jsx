 "use client"
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import SceneBgHoverCanvas from './SceneBgHoverCanvas'
import { PerspectiveCamera } from '@react-three/drei'

const BgCanvasHover = () => {
  const distance = 200;
  const [Fov, SetFov] = useState(75);


   //---------------------------------- Functions
 
   //✅ Dynamic FOV Calculate 
   const DynamicFovCalculate = (height) => {
    return 2 * Math.atan((height / 2) / distance) * (180 / Math.PI);
   }
   
    const HandelReSize = () => {
        SetFov(DynamicFovCalculate(window.innerHeight))
    }


   //---------------------------------- Call
   useEffect(()=>{
    // Run once initially
    HandelReSize()

    window.addEventListener('resize',HandelReSize);
    return () => window.removeEventListener('resize',HandelReSize);
   },[])   


  return (
    <>
      <Canvas className='w-full h-full '
       gl={{ antialias: true, alpha: true }}
       orthographic={false}
       >
        <PerspectiveCamera makeDefault fov={Fov} position={[0,0,distance]} />
        <SceneBgHoverCanvas />
      </Canvas>
    </>
  )
}

export default BgCanvasHover
