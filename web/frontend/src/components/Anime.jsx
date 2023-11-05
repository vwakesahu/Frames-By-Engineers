import React from 'react'

import FetchFrames from "../components/FetchFrames";
import { useStateValue } from "../context/StateProvider";
const Anime = () => {
    const [{ setFrame, cartShow }, dispatch] = useStateValue();
    return (
      <div className=" w-full h-full">
        <h1 className=" mt-8 text-xl font-semibold mb-10">Anime Frames:</h1>
        <FetchFrames
          data={setFrame?.filter((item) => item.category === "anime")}
        />
      </div>
    );
  };

export default Anime