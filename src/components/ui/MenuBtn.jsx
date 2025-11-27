import React from 'react'

const MenuBtn = ({item,menu}) => {
  return (
     <div className={`w-fit h-fit FSB text-[1rem] max-sm:text-[2rem] max-sm:leading-[2rem] font-light select-none cursor-pointer hover:text-[#926320]  max-[1030]:text-[0.8rem] flex max-sm:translate-y-[300%] max-sm:text-[#202020] max-sm:opacity-0 ${menu}`}>
        <p>{item}</p>
     </div>
  )
}

export default MenuBtn
