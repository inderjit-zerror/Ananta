import React from 'react'

const MenuBtn = ({item}) => {
  return (
     <div className='w-fit h-fit FSB text-[1rem] font-light select-none cursor-pointer hover:text-[#926320]'>
        <p>{item}</p>
     </div>
  )
}

export default MenuBtn
