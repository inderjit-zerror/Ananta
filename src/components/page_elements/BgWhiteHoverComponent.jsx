import Image from 'next/image'
import BgCanvasHover from '../ui/BgCanvasHover'

const BgWhiteHoverComponent = () => {

  return (
    <div className='w-full h-screen bg-white flex fixed top-0 left-0 overflow-hidden'
    >

       {/* ✅ Background-Image */}
      <Image
       src={'/Img/BgImgPattren1.svg'}
       className='w-full h-full object-cover scale-[1.1]'
       width={1000}
       height={1000}
       alt='Background Pattren Image'
      />


      {/* ✅ White-Canvas-For-HOver-Effect-Container */}
      <div className='w-full h-screen absolute top-0 left-0'>
        <BgCanvasHover  />
      </div>

    </div>
  )
}

export default BgWhiteHoverComponent
