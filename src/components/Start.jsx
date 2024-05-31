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

function Start() {
  return (
    <>
      <div id="aboutus" className="relative pt-44">
        <h1 className="text-5xl font-bold text-center py-10 z-10">
          Start your journey today.
        </h1>
        <div className="relative mb-10 flex flex-col pt-14">
          <div className="absolute w-full h-full -skew-y-2 bg-pro top-0" />
          <div className="flex flex-col lg:flex-row">
            <div className="relative items-center w-full lg:w-1/2 flex flex-col space-y-8 p-4 lg:p-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center">
                  <img src={one} alt="Step 1" />
                </div>
                <h2 className="text-2xl lg:text-4xl pl-4 z-10">
                  Find your next star performer.
                </h2>
              </div>
              <p className="text-sm w-[60%] z-10">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10 items-center">
                <div className="lg:ml-24 flex items-center flex-row">
                  <div className="w-12 h-12 lg:w-16 lg:h-16">
                    <img
                      src={black}
                      alt="Explore More"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="pl-4">Explore More</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row w-full lg:w-1/2 p-4 lg:p-0">
              <div className="flex flex-col items-end justify-between z-10 h-full space-y-10">
                <div className="bg-white lg:ml-52 lg:top-[-64px] rounded-b-xl w-32 h-40 lg:w-40 lg:h-48 relative">
                  <div className="bg-peach -skew-y-2 h-20 w-32 lg:h-28 lg:w-40 rounded-bl-xl absolute top-0"></div>
                  <div className="flex items-center justify-center relative lg:mt-3">
                    <img
                      src={img2}
                      alt="Ruby Developer"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                  <p className="text-sm font-medium pl-2 lg:pt-2 z-10 lg:pl-4">
                    Ruby Developer
                  </p>
                  <p className="text-xs pt-2 h-4 z-10 pl-4">
                    Redwood City, California 7 years experience
                  </p>
                </div>
                <div className="relative bottom-[-35px] lg:top-[-12px]">
                  <div className="bg-purple-200  -skew-y-2 h-16 w-32 lg:w-40 rounded-t-xl"></div>
                  <div className="flex items-center w-28 h-16 justify-center top-0 absolute">
                    <img
                      src={immg}
                      alt="Image"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between z-10 h-full space-y-10">
                <div className="bg-white lg:ml-8 lg:top-[-72px] rounded-b-xl w-32 h-32 lg:w-40 lg:h-40 relative">
                  <div className="bg-green-200 -skew-y-2 h-[52px] w-[120px] lg:h-16 lg:w-40 rounded-bl-xl absolute top-0"></div>
                  <div className="flex items-center justify-center relative">
                    <img
                      src={img3}
                      alt="System ops engineer"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                  <p className="text-sm font-medium lg:pt-2 z-10 pl-4">
                    System ops engineer
                  </p>
                  <p className="text-xs lg:pt-2 h-4 z-10 pl-4">
                    Abu Dhabi, UAE 5 years experience
                  </p>
                </div>
                <div className="relative bottom-[-15px] lg:top-[-16px]">
                  <div className="bg-yellow-200 ml-5 lg:ml-0 -skew-y-2 h-28 w-32 lg:w-40 rounded-t-xl"></div>
                  <div className="flex items-center top-4 lg:top-2 justify-center absolute">
                    <img
                      src={img4}
                      alt="Image"
                      className="w-full h-full object-cover rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-10 flex flex-col pt-14">
          <div className="absolute w-full h-full -skew-y-2 bg-yellow-100 top-0" />
          <div className="flex flex-col lg:pl-10 lg:flex-row">
            <div className="relative items-center w-full lg:w-1/2 flex flex-col space-y-8 p-4 lg:p-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center">
                  <img src={two} alt="Step 2" />
                </div>
                <h2 className="text-2xl lg:text-4xl pl-4 z-10">
                  Evaluate to your heart’s content.
                </h2>
              </div>
              <p className="text-sm pl-8 lg:w-[60%] lg:pl-0 z-10">
                Assess the candidate through work history, transparent tests and
                video interviews.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10 items-center">
                <div className="flex items-center flex-row">
                  <div className="w-12 h-12 lg:w-16 lg:h-16">
                    <img
                      src={black}
                      alt="Browse More"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="pl-4">Browse More</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row w-full lg:w-1/2 p-4 lg:p-0">
              <div className="flex flex-col lg:flex-row items-end justify-between z-10 h-full space-y-10">
                <div className="bg-white rounded-b-xl w-52 h-64 relative">
                  <div className="flex pl-10 pt-10 item-center">
                    <img src={tick} alt="Tick" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex pl-10 top-[-40px] w-64 h-72 relative pt-10 item-center">
                    <img src={green} alt="Green" />
                  </div>
                  <div className="w-44 right-5 flex flex-row rounded-t-xl absolute bottom-0 h-14 bg-white">
                    <div className="flex w-10 h-10 bottom-0 relative item-center">
                      <img src={yellowring} alt="Yellow Ring" />
                    </div>
                    <div className="flex pt-2 pl-2 flex-col">
                      <div className="w-10 h-3">
                        <img src={yellow1} alt="Yellow 1" />
                      </div>
                      <div className="w-14 h-3">
                        <img src={yellow1} alt="Yellow 1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col mb-10 pt-14">
          <div className="absolute w-full h-full -skew-y-2 bg-gray-100 top-0" />
          <div className="flex flex-col lg:flex-row">
            <div className="relative items-center w-full lg:w-1/2 flex flex-col space-y-8 p-4 lg:p-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center">
                  <img src={three} alt="Step 3" />
                </div>
                <h2 className="text-2xl lg:text-4xl pl-4 z-10">
                  Start building your team.
                </h2>
              </div>
              <p className="text-sm pl-8 lg:pl-20 z-10">
                Onboard your candidate right away and start creating the next
                big thing.
              </p>
              <div className="relative w-full flex flex-col sm:flex-row z-10 mt-10 items-center">
                <div className="flex items-center flex-row">
                  <div className="w-12 h-12 lg:w-16 lg:h-16">
                    <img
                      src={black}
                      alt="Join Now"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="pl-4">Join Now</h1>
                </div>
              </div>
            </div>
            <div className="relative flex-col w-full lg:w-1/2 p-4 lg:p-0">
              <div className="flex flex-row items-center">
                <div className="flex w-72 h-64 relative">
                  <img src={purple} alt="Purple" />
                </div>
                <div className="flex w-64 h-40 relative">
                  <img src={standing} alt="Standing" />
                </div>
              </div>
              <div className="flex lg:w-[480px] relative top-[-60px] lg:-rotate-2 lg:top-[-10px]">
                <img src={x} alt="10x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
