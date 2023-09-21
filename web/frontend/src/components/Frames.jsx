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

    <div className="md:w-[20%] border-[15px] border-black p-2 shadow-xl">
      <img src={image} alt="frame1" />
    </div>
  );
};

export default Frames;
