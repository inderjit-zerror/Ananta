import Image from 'next/image'
import React from 'react'

const ContentDisplay = ({width, url}) => {
  return (
    <>
      <div style={{ width }}  className={` h-[600px] flex justify-center items-center overflow-hidden shrink-0 whitespace-nowrap`}>
        <Image
          className='w-full h-full object-cover object-center '
          src={url}
          width={1000}
          height={1000}
          alt='Contect Display'
        />
      </div>
    </>
  )
}

export default ContentDisplay
