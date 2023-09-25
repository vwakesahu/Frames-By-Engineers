import React, { useState } from "react";
import Loader from "../components/Loader";
import { LuSubtitles } from "react-icons/lu";
import { categories, frameColors } from "../utils/data";

const CreateItem = () => {
  const [title, settitle] = useState("");
  const [category, setCategory] = useState(null);
  const [frameColor, setFrameColor] = useState(null);

  return (
    <div className=" ">
      <div className=" w-full  md:w-[90%] border mt-16 p-4 font-medium md:p-12">
        <div className=" w-full">
          {/* <p>Add Title:</p> */}
          <div className="w-full py-2 border-b border-gray-300 flex gap-2 ">
            <LuSubtitles className=" text-xl text-gray-700" />
            <input
              type="text"
              value={title}
              placeholder="Give me a title..."
              onChange={(e) => settitle(e.target.value)}
              className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400"
            />
          </div>

          {/* Select Category */}
          <div className=" w-full h-full mt-6">
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="others" className=" bg-white w-full ">
                Select Category
              </option>
              {categories &&
                categories.map((item) => (
                  <option key={item.id} value={item.urlParamName}>
                    {item.name}
                  </option>
                ))}
            </select>
            <select onChange={(e) => setFrameColor(e.target.value)}>
              <option value="others" className=" bg-white w-full ">
                Select Category
              </option>
              {frameColors &&
                frameColors.map((item) => (
                  <option key={item.id} value={item.urlParamName}>
                    {/* {console.log(item.color)} */}
                    {item.color}
                  </option>
                ))}
            </select>
          </div>
          <select>
            <option></option>
          </select>
          {/* Loader   */}
          <div>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
