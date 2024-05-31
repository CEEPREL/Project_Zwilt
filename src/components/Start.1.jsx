import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import black from "../assets/withBlack.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import immg from "../assets/immg.png";
import tick from "../assets/yellowtick.png";
import green from "../assets/green.png";
import yellowring from "../assets/yellowring.png";
import yellow1 from "../assets/yellow1.png";
import standing from "../assets/standing.png";
import purple from "../assets/purple.png";
import x from "../assets/10x.png";

export function Start() {
  return (
    <>
      <div id="aboutus" className=" relative top-80">
        <h1 className="text-5xl mt-32 font-bold text-center py-10 z-10">
          Start your journey today.
        </h1>
        <div className="relative mb-10 flexflex-col pt-14">
          {" "}
          <div className="absolute w-full h-full -skew-y-2 bg-pro top-0" />
          <div className="flex flex-row">
            <div className="relative items-center  w-96 flex flex-col space-y-8">
              <div className="flex flex-row">
                <div className="flex pl-8 item-center">
                  <img src={one} />
                </div>
                <h2 className="text-4xl pl-4 z-10">
                  Find your next star performer.
                </h2>
              </div>
              <p className="text-sm pl-20 z-10">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10">
                <div className="flex left-20 relative items-center flex-row">
                  <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                    <img
                      src={black}
                      alt="image"
                      className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                    />
                  </div>
                  <h1>Explore More</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-end absolute  top-[-8px] right-60 justify-between z-10 h-full space-y-10">
                <div className="bg-white rounded-b-xl w-40 h-48 relative">
                  <div className="bg-peach -skew-y-2 h-28 w-40 rounded-bl-xl absolute top-0"></div>
                  <div className="flex items-center justify-center relative mt-3 ">
                    <img
                      src={img2}
                      alt="Description"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                  <p className="text-sm font-medium pt-2 z-10 pl-4">
                    Ruby Developer
                  </p>
                  <p className="text-xs pt-2 h-4 z-10 pl-4">
                    Redwood City, California 7 years experience
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-purple-200 -skew-y-2 h-16 w-40 rounded-t-xl"></div>
                  <div className="flex items-center w-28 h-16 justify-center top-0 absolute ">
                    <img
                      src={immg}
                      alt="Description"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end absolute  top-[-15px] right-10 justify-between z-10 h-full space-y-10">
                <div className="bg-white rounded-b-xl w-40 h-40 relative">
                  <div className="bg-green-200 -skew-y-2 h-16 w-40 rounded-bl-xl absolute top-0"></div>
                  <div className="flex items-center justify-center relative ">
                    <img
                      src={img3}
                      alt="Description"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                  <p className="text-sm font-medium pt-2 z-10 pl-4">
                    System ops engineer
                  </p>
                  <p className="text-xs pt-2 h-4 z-10 pl-4">
                    Abu Dhabi, UAE 5 years experience
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-yellow-200 -skew-y-2 h-28 w-40 rounded-t-xl"></div>
                  <div className="flex items-center top-2 justify-center absolute ">
                    <img
                      src={img4}
                      alt="Description"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* sencond view */}
          </div>
        </div>
        <div className="relative mb-10 flexflex-col pt-14">
          {" "}
          <div className="absolute w-full h-full -skew-y-2 bg-yellow-100 top-0" />
          <div className="flex flex-row">
            <div className="relative items-center  w-96 flex flex-col space-y-8">
              <div className="flex flex-row">
                <div className="flex pl-8 item-center">
                  <img src={two} />
                </div>
                <h2 className="text-4xl pl-4 z-10">
                  Evaluate to your heart’s content.
                </h2>
              </div>
              <p className="text-sm pl-20 z-10">
                Assess the candidate through work history, transparent tests and
                video interviews.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10">
                <div className="flex left-20 relative items-center flex-row">
                  <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                    <img
                      src={black}
                      alt="image"
                      className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                    />
                  </div>
                  <h1>Browse More</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row items-end absolute  top-[-15px] right-10 justify-between z-10 h-full space-y-10">
                <div className="bg-white rounded-b-xl w-52 top-[-15px] rounded-lg right-[-30px] h-64  relative">
                  <div className="flex pl-10 pt-10 item-center">
                    <img src={tick} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex pl-10 top-[-40px] w-64 h-72 relative pt-10 item-center">
                    <img src={green} />
                  </div>
                  <div className="w-44 right-5 flex flex-row rounded-t-xl absolute bottom-0 h-14 bg-white">
                    <div className="flex w-10 h-10 bottom-0 relative item-center">
                      <img src={yellowring} />
                    </div>
                    <div className="flex pt-2 pl-2 flex-col">
                      <div className="w-10 h-3">
                        <img src={yellow1} />
                      </div>
                      <div className="w-14 h-3">
                        <img src={yellow1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third view */}
          </div>
        </div>
        <div className="relative flexflex-col mb-10 pt-14">
          {" "}
          <div className="absolute w-full h-full -skew-y-2 bg-gray-100 top-0" />
          <div className="flex flex-row">
            <div className="relative items-center  w-96 flex flex-col space-y-8">
              <div className="flex flex-row">
                <div className="flex pl-8 item-center">
                  <img src={three} />
                </div>
                <h2 className="text-4xl pl-4 z-10">
                  Start building your team.
                </h2>
              </div>
              <p className="text-sm pl-20 z-10">
                Onboard your candidate right away and start creating the next
                big thing.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10">
                <div className="flex left-20 relative items-center flex-row">
                  <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
                    <img
                      src={black}
                      alt="image"
                      className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                    />
                  </div>
                  <h1>Join Now</h1>
                </div>
              </div>
            </div>
            <div className="flex-col absolute top-[-20px] right-[-90px]">
              <div className="flex flex-row ">
                <div className="flex w-72 h-64 top-0 relative item-center">
                  <img src={purple} />
                </div>
                <div className="flex w-64 h-40  relative ">
                  <img src={standing} />
                </div>
              </div>
              <div className="flex w-[480px] top-[-80px] relative">
                <img src={x} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
