import React, { useState } from "react";
import App from "../App.css";
const FetchFrames = ({ data }) => {
  return (
    <div className="  flex flex-wrap gap-10 items-center justify-center">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className=" w-[350px] flex flex-col  ">
            <div className=" flex">
              <div
                className="border-[15px] border-black p-20 py-28 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
 "
              >
                <img
                  src={item.imageURL}
                  alt="frame1"
                  className=" h-52 object-cover"
                />
              </div>
            </div>
            <p className=" text-center mt-4">{item.title}</p>
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
