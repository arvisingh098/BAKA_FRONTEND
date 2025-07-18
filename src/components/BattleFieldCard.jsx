import React from "react";
import episodePlay from "../assets/images/episodePlay.png";
import grid from "../assets/images/grid.png";
import vs1 from "../assets/images/vs1.png";
import ep1 from "../assets/images/episode1.png";
import VsBattleText from "./VsBattleText";
import CountDiv from "./CountDiv";

const BattleFieldCard = ({windowSize}) => {
  return (
    <div
      className="flex max-w-5xl lg:h-20 sm:h-15 h-10 lg:mx-auto rounded-[10px] shadow-xl relative lg:w-[28vw] sm:w-[35vh] w-[28vh]"
      style={{
        background: `url('${vs1}'), linear-gradient(to bottom, white 10%, #8E8689 95%)`,
        // backgroundSize: "100px 100px , 100% 100%",
        backgroundSize: windowSize.width < 1024 ?  "60px 60px , 100% 100%" : "100px 100px , 100% 100%" ,
        backgroundPosition: "left, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="w-1/2 p-8  flex flex-col justify-center rounded-l-[10px]"></div>
      <div className="lg:w-[25vw] sm:w-[30vh] w-[22vh] absolute right-0 -top-[0px]">
        <div className="custom-border !pt-[2px] !pr-[2px] !pb-[2px] !pl-[4px] !rounded-r-[10px] custom-clip2 relative z-0">
          <div
            className="bg-[#3967e6]/80 lg:h-20 sm:h-15 h-10 rounded-r-[10px] custom-clip2 relative z-10 overflow-hidden"
            style={{
              boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: `url(${grid})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "200% 300%",
                opacity: 0.3,
              }}
            />
            <div className="flex justify-between items-center pl-2 pr-4">
              <div className="flex justify-start items-center gap-4">
                <svg
        width={ windowSize.width < 640 ? "40" : windowSize.width < 1024 ?  "70": "80"}
        height={ windowSize.width < 640 ? "60" : windowSize.width < 1024 ?  "70": "100"}
                  viewBox="0 0 80 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="strokeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ff4d6d" />
                      <stop offset="100%" stopColor="#4fc3f7" />
                    </linearGradient>
                    <linearGradient
                      id="fillGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="white" />
                      <stop offset="100%" stopColor="#e0f7ff" />
                    </linearGradient>
                  </defs>

                  {/* "V" behind */}
                  <text
                    x="5"
                    // y="42"
                    y={ windowSize.width > 1024 ? "55" : "42"}
                    fontSize="60"
                    fontWeight="900"
                    fontStyle="italic"
                    fill="url(#fillGradient)"
                    stroke="url(#strokeGradient)"
                    strokeWidth="2"
                    opacity="1"
                  >
                    V
                  </text>

                  {/* "S" on top, overlapping */}
                  <text
                    x="25"
                    y={ windowSize.width > 1024 ? "77" : "67"}
                    fontSize="60"
                    fontWeight="900"
                    fontStyle="italic"
                    fill="url(#fillGradient)"
                    stroke="url(#strokeGradient)"
                    strokeWidth="2"
                  >
                    S
                  </text>
                </svg>

                <div className="p-[1px] gradient-border lg:!rounded-[10px] !rounded-[4px] sm:mt-1.5 lg:mt-0 mb-4">
                  <div
                    className="lg:w-16 lg:h-16 sm:h-10 sm:w-10 w-6 h-6 border-white lg:rounded-[10px] rounded-[4px] bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${ep1})`,
                    }}
                  />
                </div>
              </div>
              <button className="bg-white lg:py-2 lg:px-6 px-2 py-1 rounded-[10px] lg:rounded-2xl cursor-pointer lg:text-sm sm:text-[8px] text-[6px] lg:mb-4 mb-4 sm:mb-2 ">
                Defend yourself
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-4 sm:-bottom-2  -bottom-1 pointer-events-none z-20">
        <CountDiv
          width={"lg:w-8 sm:w-5 w-3"}
          height={"lg:h-8 sm:h-5 h-3"}
          count={"999"}
          countClass={"lg:text-[10px] sm:text-[7px]  text-[4px]"}
          extraClasses={"!bg-black lg:!min-w-20 sm:!min-w-11 !min-w-6 !py-[2px] "}
          rounded={"rounded-[4px]"}
          border={"p-[1px]"}
        />
      </div>
    </div>
  );
};

export default BattleFieldCard;
