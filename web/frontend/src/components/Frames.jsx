import React from "react";

const Frames = ({
  innerHeight,
  innerWidth,
  outterHeight,
  outterHeightMobile,
  outterWidth,
  outterWidthMobile,
  image,
}) => {
  return (
    // <div className='mt-3'>
    //     <div className={`border-[15px] border-black md:w-${outterWidth} md:h-${outterHeight} h-${outterHeightMobile} w-${outterWidthMobile} drop-shadow-xl flex items-center justify-center`}>
    //         <div className={`border-2 border-black w-${innerWidth} h-${innerHeight} } overflow-hidden flex items-center justify-center`}>
    //             <img src={image} alt="wallpaper-1" className=''/>
    //         </div>
    //     </div>
    // </div>

    <div className=" flex">
      <div
        className="border-[15px] border-black p-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
 "
      >
        <img src={image} alt="frame1" className=" max-h-450 object-cover" />
      </div>
    </div>
  );
};

export default Frames;
