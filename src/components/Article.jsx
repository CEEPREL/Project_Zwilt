import React from "react";
import atro from "../assets/atro.png";
import img1 from "../assets/Img1.png";
import groove from "../assets/groove.png";
import groove1 from "../assets/groove1.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import { screening } from "../constants";

function Article() {
  return (
    <>
      <div
        id="article"
        className="relative mt-10 w-full px-2 lg:px-0 lg:mt-0 flex flex-col lg:flex-row lg:h-[650px] sm:flex-col "
      >
        <div className="absolute w-full h-full -skew-y-2 bg-slate-950"></div>
        <div className="absolute right-0 top-0 flex justify-end">
          <img src={atro} alt="img" />
        </div>
        <div className="m-2 relative flex flex-col lg:flex-row w-full items-center">
          <div className="relative m-6 lg:m-14 mt-6 flex flex-col w-full lg:w-1/2">
            <h1 className="text-2xl font-bold lg:w-[70%] text-left text-white sm:text-xl lg:text-5xl tracking-wide">
              How it worked for Jason
              <span className="inline-block align-middle ml-2">
                <img
                  className="inline-block align-middle h-10 w-10"
                  src={img1}
                  alt="img1"
                />
              </span>{" "}
              at
              <span className="align-middle ml-2">
                <img
                  className="block align-middle h-14 w-36"
                  src={groove}
                  alt="groove"
                />
              </span>{" "}
            </h1>
            <p className="mt-5 lg:w-[55%] text-white text-left text-base lg:text-sm">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="mt-6 flex flex-row gap-2">
              <span className="align-middle">
                <img
                  className="inline-block align-middle h-8 w-8"
                  src={right}
                  alt="right"
                />
              </span>{" "}
              <span className="align-middle">
                <img
                  className="inline-block align-middle h-8 w-8"
                  src={left}
                  alt="left"
                />
              </span>{" "}
            </div>
          </div>
          <div className="relative flex flex-col lg:mt-0 mt-6 w-full lg:w-1/2 lg:pl-14">
            <div className="flex flex-row gap-2 items-center">
              <span className="align-middle">
                <img
                  className="inline-block align-middle h-16 w-16"
                  src={groove1}
                  alt="groove1"
                />
              </span>{" "}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white">Jason Makki</h1>
                <p className="text-xs text-white">Engineer at GROOVE</p>
                <p className="text-xs text-white">San Francisco</p>
              </div>
            </div>
            <p className="mt-5 lg:w-[65%] text-sm text-white">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since. Zwilt enabled us
              to deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-14">
        <h1 className="w-full text-4xl font-bold">
          How we ensure you’re in good hands.
        </h1>
        <p className="my-8 w-full text-lg">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div className="relative flex flex-col gap-14 lg:mt-40">
          {screening.map((item, index) => (
            <div
              key={index}
              className="border p-4 w-full lg:w-1/2 gap-2 shadow-lg"
            >
              <div className="flex flex-row">
                <div className="w-14 h-14">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="ml-4 text-sm text-black flex-1">{item.text}</h3>
              </div>
              <h3 className="mt-5 text-sm text-black">{item.des}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Article;
