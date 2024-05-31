import React from "react";
import { Profile } from "../constants/Svgs";
import { Categories } from "../constants/Svgs";
import { Skill } from "../constants/Svgs";
import { companies1, companies2 } from "../constants";
import black from "../assets/withBlack.png";

const FindTalent = () => {
  return (
    <div id="findtalent" className="relative w-full h-[1100px]">
      <div className="absolute top-0 left-0 w-full h-full -skew-y-2 bg-pro"></div>
      <div className="absolute top-36 left-0 w-full h-full">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl sm:w-full lg:w-[60%]  font-semibold lg:text-4xl md:text-4xl sm:text-2xl text-center tracking-wide">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h1>
        </div>
        <div className="relative sm:flex-col lg:mt-20 flex flex-col sm:gap-12 lg:justify-between lg:flex-row items-center">
          <div
            className="relative  sm:w-full sm:ml-2 lg:mt-20 lg:w-[25%] lg:ml-24 flex
           flex-col"
          >
            <h1 className="sm:text-center lg:text-left lg:w-60 md:w-full md:text-2xl sm:text-xs lg:mb-6 lg:text-lg">
              Find Dev and IT FindTalent to scale your business.
            </h1>
            <div className="flex flex-col sm:mt-2 sm:text-[5px] gap-2 lg:text-sm w-full">
              <div className="flex sm:justify-center gap-10 flex-row">
                <div className="flex md:text-lg lg:w-full flex-row items-center sm:mb-2 lg:mb-0">
                  <Skill className="mr-2" />
                  <h3 className="inline lg:text-sm lg:w-full">989 Skills</h3>
                </div>
                <div className="flex md:text-lg lg:w-full flex-row items-center  sm:mb-2 lg:mb-0">
                  <Categories className="mr-2" />
                  <h3 className="inline lg:text-sm lg:w-full">
                    45 Sub-Categories
                  </h3>
                </div>
              </div>
              <div className="flex md:text-lg  lg:w-full justify-center flex-row sm:justify-center lg:justify-start items-center">
                <Profile className="mr-2" />
                <h3 className="inline lg:text-sm lg:w-full">1234 Profiles</h3>
              </div>
            </div>
          </div>
          <div className="bg-white text-sm md:h-36 relative sm:h-72 p-3 rounded-lg lg:h-40 lg:min-w-96 lg:w-[50%] px-5 sm:mr-0 lg:mr-24 mt-8 flex flex-row ">
            <div className="flex flex-col">
              <h1 className=" w-full h-3">IT & Development</h1>
              <div className="flex flex-wrap w-full gap-2 pt-5 justify-center">
                {companies1.map((company, index) => (
                  <div key={index} className="flex flex-col items-center ">
                    <div className="w-12 h-12">
                      <img
                        src={company.image}
                        alt={company.text}
                        className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                      />
                    </div>

                    <h3 className="text-center mt-2 w-[50%] text-xs">
                      {company.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative sm:flex-col lg:mt-20 flex flex-col sm:gap-12 lg:justify-between lg:flex-row items-center">
          <div
            className="relative  sm:w-full sm:ml-2 lg:mt-20 lg:w-[25%] lg:ml-24 flex
           flex-col"
          >
            <h1 className="sm:text-center lg:text-left lg:w-60 md:w-full md:text-2xl sm:text-xs lg:mb-6 lg:text-lg">
              Explore Creative individuals with a keen eye for detail.
            </h1>
            <div className="flex flex-col sm:mt-2 sm:text-[5px] gap-2 lg:text-sm w-full">
              <div className="flex sm:justify-center gap-10 flex-row">
                <div className="flex md:text-lg lg:w-full flex-row items-center sm:mb-2 lg:mb-0">
                  <Skill className="mr-2" />
                  <h3 className="inline lg:text-sm lg:w-full">989 Skills</h3>
                </div>
                <div className="flex md:text-lg lg:w-full flex-row items-center  sm:mb-2 lg:mb-0">
                  <Categories className="mr-2" />
                  <h3 className="inline lg:text-sm lg:w-full">
                    45 Sub-Categories
                  </h3>
                </div>
              </div>
              <div className="flex md:text-lg  lg:w-full justify-center flex-row sm:justify-center lg:justify-start items-center">
                <Profile className="mr-2" />
                <h3 className="inline lg:text-sm lg:w-full">1234 Profiles</h3>
              </div>
            </div>
          </div>
          <div className="bg-white text-sm md:h-36 relative sm:h-72 p-3 rounded-lg lg:h-40 lg:min-w-96 lg:w-[50%] px-5 sm:mr-0 lg:mr-24 flex flex-row ">
            <div className="flex flex-col">
              <h1 className=" w-full h-3">Design & Creative</h1>
              <div className="flex flex-wrap w-full gap-2 pt-5 justify-center">
                {companies2.map((company, index) => (
                  <div key={index} className="flex flex-col items-center ">
                    <div className="w-12 h-12">
                      <img
                        src={company.image}
                        alt={company.text}
                        className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
                      />
                    </div>
                    <h3 className="text-center mt-2 w-[50%] text-xs">
                      {company.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-5 flex items-center justify-between lg:gap-[335px] lg:justify-start flex-row">
          <div className="flex items-center flex-row">
            <div className="sm:w-12 lg:h16 lg:w-16 sm:h-12">
              <img
                src={black}
                alt="image"
                className="w-full h-full lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-7 sm:h-7 object-cover"
              />
            </div>
            <h1>Explore More</h1>
          </div>
          <h1>30 more to explore</h1>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
