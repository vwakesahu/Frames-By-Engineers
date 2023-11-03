import React, { useState } from "react";
import App from "../App.css";
const FetchFrames = ({ data }) => {
  return (
    <div className="  flex flex-wrap gap-10 items-center justify-center relative">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="w-[350px] flex flex-col relative cursor-pointer group">
            <div className="relative">
              <div className="border-[15px] border-black p-20 py-28 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] group-hover:shadow-md relative">
                <img
                  src={item.imageURL}
                  alt="frame1"
                  className="h-52 object-cover"
                />
              </div>

              <div className="w-full h-full group-hover:block hidden bg-black bg-opacity-20 absolute top-0 right-0 left-0 bottom-0">
                <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2 pl-[35%] mt-[60%] hover:bg-black">
                  Buy Now
                </p>
              </div>
            </div>
            <p className="text-center mt-4">{item.title}</p>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          {/* <img src={NotFound} className="h-340" /> */}
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default FetchFrames;
