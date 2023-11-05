import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";

import F1 from "../img/pictures/Frame 6.png";
import F2 from "../img/pictures/Frame 1.png";

import F3 from "../img/pictures/Frame 7.png";

import F4 from "../img/pictures/Frame 8.png";

import Frames from "../components/Frames";
import { useStateValue } from "../context/StateProvider";
import FetchFrames from "../components/FetchFrames";
import CartContainer from "../components/CartContainer";

const HomePage = () => {
  const [{ setFrame, cartShow }, dispatch] = useStateValue();

  useEffect(() => {}, [cartShow]);

  return (
    <div>
      <HeroSection />

      <div className="">
        <div className="flex items-center justify-center flex-col gap-10">
          <p className=" text-2xl font-semibold hover:underline cursor-pointer">
            Vertical Frames
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-6  ">
            {/* Frames */}
            <Frames image={F1} />
            <Frames image={F2} />
            <Frames image={F3} />
            <Frames image={F4} />
            {/* <Frames image={F4} />
            <Frames image={F3} />
            <Frames image={F2} />
            <Frames image={F1} /> */}
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mt-12 h-auto">
          <p className=" text-2xl font-semibold hover:underline cursor-pointer mb-12 ">
            Recent Frames
          </p>

          {/* Frames */}
          <FetchFrames
            data={setFrame?.slice(0, 3)}
          />

          {/* <Frames image={F4} />
            <Frames image={F3} />
            <Frames image={F2} />
            <Frames image={F1} /> */}
        </div>
      </div>

      {cartShow && <CartContainer />}
    </div>
  );
};

export default HomePage;
