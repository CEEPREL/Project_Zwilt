import React, { useEffect, useRef, useState } from "react";
import indigo from "../assets/indigo.png";
import black from "../assets/withBlack.png";
import marie from "../assets/marie.png";
import chatbar from "../assets/Chatbar.png";
import yellow from "../assets/yellow2.png";
import green1 from "../assets/green1.png";
import track from "../assets/track.png";

function Slider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sliderElement = sliderRef.current;
      if (sliderElement) {
        const rect = sliderElement.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elementTop = rect.top;
        const elementVisible = elementTop >= viewportHeight * 0.05;
        if (elementVisible && !isPaused) {
          sliderElement.classList.add("animate-translateX");
        } else {
          sliderElement.classList.remove("animate-translateX");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused]);

  const handleMouseDown = () => {
    setIsPaused(true);
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const computedStyle = window.getComputedStyle(sliderElement);
      const matrix = new DOMMatrix(computedStyle.transform);
      setTranslateX(matrix.m41);
      sliderElement.style.animationPlayState = "paused";
      sliderElement.style.transform = `translateX(${matrix.m41}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsPaused(false);
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.style.animation = "none";
      sliderElement.style.transform = `translateX(${translateX}px)`;
      setTimeout(() => {
        sliderElement.style.animation = "";
        sliderElement.classList.add("animate-translateX");
      }, 0);
    }
  };

  //   <div className="relative flex mt-80 items-center bg-gradient-to-t pl-5 from-indigo-50 to-white w-full h-[800px] overflow-">
  //       <div className="relative animate-translateX translate-x-[-0000px]">
  //         <div className="flex justify-start items-center flex-row"></div>
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative flex mt-80 items-center bg-gradient-to-t pl-5 from-indigo-50 to-white w-full h-[800px] overflow-hidden"
    >
      <div
        ref={sliderRef}
        className={`relative ${isPaused ? "" : "animate-translateX"}`}
      >
        <div className="flex justify-start items-center flex-row">
          <div className="flex items-center justify-center w-[300px] flex-col">
            <h1 className="text-4xl w-[90%] font-bold ">Why choose Zwilt?</h1>
            <p className=" w-[90%] text-lg mt-6">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div className="bg-white translate-x-[180px]  rounded-lg p-5 h-[600px] w-[1500px] items-center flex flex-row">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl w-[60%] font-bold ">
                Onboard without the risk.
              </h1>
              <p className=" text-lg mt-6">
                <span className="inline-block mr-2">
                  <img src={indigo} />
                </span>
                We pick the best for you to select.
              </p>
              <p className=" text-lg">
                <span className="inline-block mr-2">
                  <img src={indigo} />
                </span>
                Thousands of vetted candidates in dozens of categories.
              </p>
              <p className=" text-lg ">
                <span className="inline-block mr-2">
                  <img src={indigo} />
                </span>
                Risk-free resource swapping for the best fit.
              </p>
              <div className="flex mt-6 relative items-center flex-row">
                <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                  <img
                    src={black}
                    alt="image"
                    className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                  />
                </div>
                <h1>Learn More</h1>
              </div>
            </div>
            <div className="w-[1500px]">
              <img src={marie} alt="image" className="" />
            </div>
          </div>
          <div className="bg-white translate-x-[380px]  rounded-lg p-5 h-[600px] w-[1500px] items-center flex flex-row">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl w-[40%] font-bold ">An open book.</h1>
              <p className=" text-lg mt-6">
                <span className="inline-block mr-2">
                  <img src={yellow} />
                </span>
                Easy and transparent one-to-one chat with candidates.
              </p>
              <p className=" text-lg">
                <span className="inline-block mr-2">
                  <img src={yellow} />
                </span>
                Simple and convenient payment methods.
              </p>
              <p className=" text-lg ">
                <span className="inline-block mr-2">
                  <img src={yellow} />
                </span>
                Review past ratings.
              </p>
              <div className="flex mt-6 relative items-center flex-row">
                <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                  <img
                    src={black}
                    alt="image"
                    className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                  />
                </div>
                <h1>Learn More</h1>
              </div>
            </div>
            <div className="w-[1500px]">
              <img src={chatbar} alt="image" className="" />
            </div>
          </div>
          <div className="bg-white translate-x-[380px]  rounded-lg p-5 h-[600px] w-[1500px] items-center flex flex-row">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl w-[40%] font-bold ">Stay in the loop.</h1>
              <p className=" text-lg mt-6">
                <span className="inline-block mr-2">
                  <img src={green1} />
                </span>
                Track your staff activity down to every minute with screenshots.
              </p>
              <p className=" text-lg">
                <span className="inline-block mr-2">
                  <img src={green1} />
                </span>
                Comprehensive timesheet data to process payments.
              </p>
              <p className=" text-lg ">
                <span className="inline-block mr-2">
                  <img src={green1} />
                </span>
                Create projects to organize and assign tasks more effectively.
              </p>
              <div className="flex mt-6 relative items-center flex-row">
                <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                  <img
                    src={black}
                    alt="image"
                    className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                  />
                </div>
                <h1>Learn More</h1>
              </div>
            </div>
            <div className="w-[1500px] right-0">
              <img src={track} alt="image" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
