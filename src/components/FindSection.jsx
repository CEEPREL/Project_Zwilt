import React from "react";
import threeGifs from "../assets/threeGifs.gif";
import { Search } from "../constants/Svgs";
import { Paralelogram } from "../constants/Svgs";
import { skacks } from "../constants";

const FindSection = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[70%] sm:w-[90%] right-0 left-0 mx-auto items-center mt-6 lg:mt-20">
        <h1 className="text-2xl lg:w-[80%] sm:w-full font-semibold lg:text-5xl md:text-5xl sm:text-xl text-center tracking-wide">
          Finding the right fit{" "}
          <span className="inline-block align-middle">
            <img
              className="h-10 w-10 inline-block align-middle"
              src={threeGifs}
              alt="Logo"
            />
          </span>{" "}
          has never been easier.
        </h1>
        <p className="mt-5 lg:w-[55%] md:w-[55%] lg:text-lg md:text-lg sm:w-full  text-center text-gray-600 max-w-4xl">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <div className="flex justify-center relative my-5">
          <input
            placeholder="Looking for design |"
            className="placeholder:text-black h-14 lg:w-[450px] md:w-[450px] sm:w-[450px] focus:border-nav p-2 border border-gray-300 rounded-xl"
          />
          <button className="absolute right-0 bottom-0 top-0">
            <Search />
          </button>
        </div>
        <div className="flex px-6 items-center flex-col mt-5 sm:w-[100%] md:w-[90%] lg:w-[90%] sm:h-56 md:h-44 lg:h-44 bg-gray-100 rounded-xl justify-center">
          <div className="flex  sm:w-full lg:w-2/3 md:w-2/3 justify-center">
            <div className="p-2 w-full flex items-center justify-center sm:text-xs lg:text-sm rounded-lg bg-green-200">
              IT & Development
            </div>
            <span className="p-2  w-full flex items-center justify-center sm:text-xs lg:text-sm rounded-lg bg-gray-200 ">
              Design and Creative
            </span>
          </div>
          <div className="flex gap-2 align-top flex-wrap">
            {skacks.map((skack, index) => (
              <div
                key={index}
                className="sm:max-w-[10%] md:max-w-[30%] lg:w-[30%]"
              >
                <div className=" flex items-start">
                  <div className="ml-4">
                    <a
                      className={`text-xs text-neutral-500 ${
                        index === 6 || index === 11 ? "font-bold" : ""
                      }`}
                      href={skack.href}
                    >
                      {skack.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-[100%] mt-14 mb-1 h-3">
        <div className="absolute h-full w-full -skew-y-2 bg-gradient-to-r from-indigo-100 via-indigo-900 to-indigo-100 bg-pro"></div>
      </div>
      <div className="relative w-[100%] mb-1 h-[10px]">
        <div className="absolute h-full w-full -skew-y-2 bg-gradient-to-r from-indigo-100 via-indigo-900 to-indigo-100 bg-pro"></div>
      </div>
      <div className="relative w-[100%] mb-[6px] h-[8px]">
        <div className="absolute h-full w-full -skew-y-2 bg-gradient-to-r from-indigo-100 via-indigo-900 to-indigo-100 bg-pro"></div>
      </div>
      <div className="relative w-[100%] mb-[8px] h-[6px]">
        <div className="absolute h-full w-full -skew-y-2 bg-gradient-to-r from-indigo-100 via-indigo-900 to-indigo-100 bg-pro"></div>
      </div>
      <div className="relative w-[100%] mb-[10px] h-[4px]">
        <div className="absolute h-full w-full -skew-y-2 bg-gradient-to-r from-indigo-100 via-indigo-900 to-indigo-100 bg-pro"></div>
      </div>
    </>
  );
};

export default FindSection;
