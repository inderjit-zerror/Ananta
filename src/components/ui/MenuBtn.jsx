import React from 'react'

const MenuBtn = ({item}) => {
  return (
     <div className='w-fit h-fit FSB text-[1rem] font-light select-none cursor-pointer'>
        <p>{item}</p>
     </div>
  )
}

export default MenuBtn
