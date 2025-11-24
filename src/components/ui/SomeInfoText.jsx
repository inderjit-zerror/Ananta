import React from "react";

const SomeInfoText = ({t1, t2}) => {
  return (
    <div className="w-full h-fit justify-between items-center flex py-[20px] px-[4px] border-b-[1px] border-[#171717] select-none">
      <p className="text-[1rem] leading-[1rem] capitalize">{t1}</p>
      <p className="CFF text-[1rem] leading-[1rem] tracking-tight">
        {t2}
      </p>
    </div>
  );
};

export default SomeInfoText;
