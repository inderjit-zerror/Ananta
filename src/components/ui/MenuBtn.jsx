import React from 'react'

const MenuBtn = ({item,menu}) => {
  return (
     <div className={`w-fit h-fit FSB text-[1rem] relative transition-all duration-300  overflow-hidden group max-sm:text-[2rem] max-sm:leading-[2rem] font-light select-none cursor-pointer text-[#9c6b25]  max-[1030]:text-[0.8rem] flex max-sm:translate-y-[300%] max-sm:text-[#9c6b25] max-sm:opacity-0 ${menu}`}>
        <p>{item}</p>
        <div className=" group-hover:w-full transition-all duration-300 absolute w-0 bg-[#9c6b25]  h-[1px] bottom-0"></div>
     </div>

  )
}

export default MenuBtn


