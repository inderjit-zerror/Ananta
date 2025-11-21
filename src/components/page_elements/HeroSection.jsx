import React from 'react'

const HeroSection = () => {
  
  return (
    <div className='w-full h-screen z-90 relative'>

        {/* ☑️ Video Div */}
        <div className='w-full h-screen'>
            <video muted autoPlay loop className='w-full h-full object-cover' src={'/video/BgVideo1.mp4'}></video>
        </div>

    </div>
  )
}

export default HeroSection
