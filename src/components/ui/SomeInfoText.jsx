import React from "react";

const SomeInfoText = ({t1, t2}) => {
  return (
    <div className="w-full h-fit justify-between items-center flex py-[20px] px-[4px] border-b-[1px] border-white select-none">
      <p className="leading-[18px] CFF capitalize text-[18px]">{t1}</p>
      <p className="text-[1rem] leading-[1rem] STF tracking-tight">
        {t2}
      </p>
    </div>
  );
};

export default SomeInfoText;
