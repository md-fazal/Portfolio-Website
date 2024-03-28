import React from "react";
import blob from "../assets/blob.svg";
import AboutMeBanner from "./AboutMeBanner";
import { useState, useCallback } from "react";

const Banner = () => {
  const [hovered, sethovered] = useState(false);
  const toggleHovered = useCallback(() => {
    sethovered((prevHovered) => !prevHovered);
  }, []);

  return (
    <div
      className="lg:pl-28 lg:pr-28 h-[1000px] w-full"
      style={{
        backgroundImage: "url('/banner-stacked-waves-haikei.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row h-full">
        <div
          className="basis-3/5 ml-[15%] -mt-[15%] flex flex-col justify-center w-fit "
          onMouseEnter={() => sethovered(true)}
          onMouseLeave={() => sethovered(false)}
        >
          {/* { hovered ? <AboutMeBanner styling='mr-[30%] p-4'/> :<> */}
          <h2 className="text-stone-800 text-6xl font-bold">
            Hello!{" "}
            <img
              className="float-end w-32 mr-44"
              src="/pixel-speech-bubble.gif"
              alt=""
            />
          </h2>
          <h1 className="text-9xl font-semibold text-white">
            I'm Fazal
            <br /> Mohammad
          </h1>
          <h3 className="text-stone-800 text-2xl font-medium">
            Software Engineer
          </h3>
          {/* </> */}
          {/* } */}
        </div>

        <div className="basis-2/5 mt-[15%] flex ml-1">
          <AboutMeBanner
            styling={`flex-end h-fit p-4 w-full hover:ml-0 border-r-[1rem] border-white ${
              hovered
                ? "transition ease-in-out duration-300 scale-100"
                : "transition ease-in-out duration-300  scale-0"
            }`}
          />{" "}
        </div>
      </div>

      <div className="border-t w-full -mt-24 border-gray-900 opacity-10"></div>
    </div>
  );
};

export default Banner;
