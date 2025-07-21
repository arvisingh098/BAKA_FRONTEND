import React from "react";
import pattern from "../assets/images/patern.png";
import CountDiv from "./CountDiv";
import UserCard from "./UserCard";
import user2 from "../assets/images/user2.png";
import rank from "../assets/images/rank.png";
import ep1 from "../assets/images/episode1.png";
import rank1 from "../assets/images/1st.png";
import rank2 from "../assets/images/2nd.png";
import rank3 from "../assets/images/3rd.png";
import crown from "../assets/images/crown.png";
import count from "../assets/images/count.png"

const users = [
  {
    rank: 1,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 999,
  },
  {
    rank: 2,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 993,
  },
  {
    rank: 3,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 993,
  },
];

const rest = [
  {
    rank: 4,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 999,
  },
  {
    rank: 5,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 999,
  },
  {
    rank: 6,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 999,
  },
  {
    rank: 7,
    name: "USER NICKNAME",
    stats: { win: 10, lose: 10, draw: 10 },
    battle: 30,
    score: 999,
  },
];

export default function LeaderboardModal({
  tab,
  setModal,
  setActiveTab,
  isOpen,
  windowSize
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="relative w-[550px] sm:w-[700px] lg:w-[900px] max-h-[70vw] lg:max-h-[80vh] overflow-y-visible shadow-lg  border-[4px] bg-[#23313a] border-yellow-50 mt-8 lg:mt-0  rounded-none"
        style={{
          boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <button
          onClick={() => {
            setModal(false);
          }}
          className="absolute -top-10 right-0 text-white bg-red-600 rounded-full  cursor-pointer w-6 h-6 flex items-center justify-center text-xs"
          style={{
            boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          }}
        >
          ✕
        </button>
        <div className="flex justify-start absolute -left-1 sm:-top-7.5 lg:-top-10 -top-5">
          <div
            className="relative lg:w-[220px] sm:w-[140px] sm:h-[30px] w-[80px] h-[20px] lg:h-[40px] cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            <div
              className={`absolute inset-0 z-0  bg-yellow-50 tab1-border tab1`}
            ></div>
            <div
              className={`absolute z-10 top-[3px] right-[4px] -bottom-[1px] left-[4px] text-[6px] sm:text-[10px] lg:text-[14px] tab1 bg-[#23313a] text-white flex items-center justify-start px-3 sm:px-5`}
              style={{
                boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
                backgroundImage: `url(${pattern})`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "top left, bottom right",
                backgroundSize: "400%, 200%",
                backgroundBlendMode: "multiply",
              }}
            >
              LEADER BOARD
            </div>
          </div>
        </div>

        <div className={`lg:mt-10 sm:mt-2 flex flex-col gap-3 lg:h-[60vh] h-[60vw]  overflow-y-auto ${windowSize.width < 1024 ? "custom-scrollbar-mobile" : "custom-scrollbar"} p-6 text-white font-sans`}>
          <div className="flex justify-center items-end gap-2 mb-4 sm:mb-10">
            <div
              className="relative lg:w-44 sm:w-36 w-20 rounded-xl sm:p-3 p-1 border-2 sm:border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95] -mb-6 z-0"
              style={{
                background: `linear-gradient(
      to right,
      #0d0d0d 0%,
      #181818 8%,
      #333333 20%,
      #3a3a3a 33%,
      #4e4e4e 55%,
      #565656 69%,
      #515151 76%,
      #444444 83%,
      #2f2f2f 91%,
      #111111 99%,
      #0d0d0d 100%
    )`,
              }}
            >
              <p className=" font-semibold lg:text-sm sm:text-[10px] text-[6px] py-0.5 sm:py-1">
                {users[1].name}
              </p>
              <p className="lg:text-[8px] sm:text-[7px] text-[4px] pb-1 sm:pb-2  ">
                Status quo
              </p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[10px] sm:!rounded-[30px] relative">
                  <div
                    className="lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-14 h-14 border-white rounded-[2px] sm:rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                      backgroundSize:  windowSize.width < 640 ? "57px 57px" : "",
                    }}
                  ></div>
                </div>

                <img
                  src={rank2}
                  className="absolute -bottom-4 lg:-left-6 sm:-left-5 -left-2 lg:w-[58px] lg:h-[68px] sm:w-[42px] sm:h-[50px] w-[26px] h-[32px]"
                />
              </div>

              <div className="flex !justify-end py-1 sm:py-2">
                <CountDiv
                  width={"lg:w-6 sm:w-4 w-3"}
                  height={"lg:h-6 sm:h-4 h-3"}
                  count={"999"}
                  countClass={"lg:text-[8px] sm:text-[6px] text-[4px]"}
                  extraClasses={
                    "!bg-black lg:!min-w-12 sm:!min-w-8 !min-w-5 !py-[2px] !px-1  "
                  }
                  rounded={"rounded-[4px]"}
                  border={"lg:p-[2px] p-[1px]"}
                   bgImageSize={ windowSize.width < 620 ? "8px 8px":  windowSize.width < 1024 ? "10px 10px":"16px 16px"}
                            backgroundPosition={ windowSize.width < 620 ? "2px 2px" :  windowSize.width < 1024 ? "3px 3px" :"4px 4px"}
                            image={count}
                />
              </div>
              <div className="lg:text-xs sm:text-[8px] text-[5px]  text-center flex justify-center items-center gap-1 sm:gap-2 py-1">
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2  font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>

            <div
              className="relative lg:w-44 sm:w-36 w-20 rounded-xl sm:p-3 p-1 border-2 sm:border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95]  z-0 "
              style={{
                background: `linear-gradient(
      to right,
      #7E1716 0%,
      #861F18 4%,
      #9F351E 18%,
      #B04623 33%,
      #BA4F26 50%,
      #BE5327 69%,
      #7E1716 100%
    
    )`,
              }}
            >
              <img
                src={crown}
                alt="Crown"
                className="absolute -top-6 sm:-top-10 left-1 sm:left-2 transform -translate-x-1/2 w-[36px] sm:w-[60px]"
              />
              <p className=" font-semibold lg:text-sm sm:text-[10px] text-[6px] py-0.5 sm:py-1">
                {users[1].name}
              </p>
              <p className="lg:text-[8px] sm:text-[7px] text-[4px] pb-1 sm:pb-2  ">
                Status quo
              </p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[10px] sm:!rounded-[30px] relative">
                  <div
                    className="lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-14 h-14 border-white rounded-[2px] sm:rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                       backgroundSize:  windowSize.width < 640 ? "57px 57px" : "",
                    }}
                  ></div>
                </div>

                <img
                  src={rank1}
                  className="absolute -bottom-4 lg:-left-6 sm:-left-5 -left-2 lg:w-[58px] lg:h-[68px] sm:w-[42px] sm:h-[50px] w-[26px] h-[32px]"
                />
              </div>

              <div className="flex !justify-end py-1 sm:py-2">
                <CountDiv
                  width={"lg:w-6 sm:w-4 w-3"}
                  height={"lg:h-6 sm:h-4 h-3"}
                  count={"999"}
                  countClass={"lg:text-[8px] sm:text-[6px] text-[4px]"}
                  extraClasses={
                    "!bg-black lg:!min-w-12 sm:!min-w-8 !min-w-5 !py-[2px] !px-1  "
                  }
                  rounded={"rounded-[4px]"}
                  border={"lg:p-[2px] p-[1px]"}
                  bgImageSize={ windowSize.width < 620 ? "8px 8px":  windowSize.width < 1024 ? "10px 10px":"16px 16px"}
                            backgroundPosition={ windowSize.width < 620 ? "2px 2px" :  windowSize.width < 1024 ? "3px 3px" :"4px 4px"}
                            image={count}
                />
              </div>
              <div className="lg:text-xs sm:text-[8px] text-[5px]  text-center flex justify-center items-center gap-1 sm:gap-2 py-1">
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2  font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>

            <div
              className="relative lg:w-44 sm:w-36 w-20 rounded-xl sm:p-3 p-1 border-2 sm:border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95] -mb-6 z-0"
              style={{
                background: `linear-gradient(
      to right,
      #5A3815 0%,
      #734A1C 18%,
      #845721 35%,
      #8F5E24 54%,
      #936126 76%,
      #8E5D24 82%,
      #815420 88%,
      #6B4419 95%,
      #533412 100%
    )`,
              }}
            >
              <p className=" font-semibold lg:text-sm sm:text-[10px] text-[6px] py-0.5 sm:py-1">
                {users[1].name}
              </p>
              <p className="lg:text-[8px] sm:text-[7px] text-[4px] pb-1 sm:pb-2  ">
                Status quo
              </p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[10px] sm:!rounded-[30px] relative">
                  <div
                    className="lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-14 h-14 border-white rounded-[2px] sm:rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                      backgroundSize:  windowSize.width < 640 ? "57px 57px" : "",
                    }}
                  ></div>
                </div>

                <img
                  src={rank3}
                  className="absolute -bottom-4 lg:-left-6 sm:-left-5 -left-2 lg:w-[58px] lg:h-[68px] sm:w-[42px] sm:h-[50px] w-[26px] h-[32px]"
                />
              </div>

              <div className="flex !justify-end py-1 sm:py-2">
                <CountDiv
                  width={"lg:w-6 sm:w-4 w-3"}
                  height={"lg:h-6 sm:h-4 h-3"}
                  count={"999"}
                  countClass={"lg:text-[8px] sm:text-[6px] text-[4px]"}
                  extraClasses={
                    "!bg-black lg:!min-w-12 sm:!min-w-8 !min-w-5 !py-[2px] !px-1  "
                  }
                  rounded={"rounded-[4px]"}
                  border={"lg:p-[2px] p-[1px]"}
                  bgImageSize={ windowSize.width < 620 ? "8px 8px":  windowSize.width < 1024 ? "10px 10px":"16px 16px"}
                            backgroundPosition={ windowSize.width < 620 ? "2px 2px" :  windowSize.width < 1024 ? "3px 3px" :"4px 4px"}
                            image={count}
                />
              </div>
              <div className="lg:text-xs sm:text-[8px] text-[5px]  text-center flex justify-center items-center gap-1 sm:gap-2 py-1">
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2 ">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 sm:gap-2  font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {rest.map((user) => (
              <div className="flex justify-center items-center flex-1">
                <div className="lg:w-28 lg:h-16 sm:w-22 sm:h-14 w-16 h-8  mt-1">
                  <div className="relative w-full h-full">
                    <img
                      src={rank}
                      alt="Badge"
                      className="absolute inset-0 lg:w-28 lg:h-16 sm:w-22 sm:h-14 w-16 h-8 object-cover z-0"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="px-3 py-1 sm:text-sm text-[6px] font-bold text-yellow-300 shadow-md">
                        {user.rank}ᵗʰ
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  key={user.rank}
                  className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-500 px-3 py-1 rounded-lg shadow-md border-[1px] border-white w-full"
                >
                  <div className="flex items-center gap-4">
                    <UserCard
                      gradientBorder={"!p-[2px]"}
                      height={"lg:h-10 sm:h-8 h-4 "}
                      width={"lg:w-10 sm:w-8 w-4"}
                      image={user2}
                      bgColor={"bg-blue-600"}
                      rounded={"!rounded-[4px]"}
                      imageSize={ windowSize > 640 ? "12px 12px" : windowSize >1024 ? "26px 26px" : "36px 36px" }
                    />
                    <div>
                      <p className="lg:text-sm sm:text-[10px] text-[5px] ">
                        {user.name}
                      </p>
                      <p className="lg:text-xs sm:text-[8px] text-[3px] text-gray-300">
                        Staking data
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 lg:text-sm sm:text-[10px] text-[5px] font-medium text-white items-center">
                    <div className="text-center">
                      <p className="lg:text-[8px] sm:text-[6px] text-[4px]">
                        WIN
                      </p>
                      <p>{user.stats.win}</p>
                    </div>
                    <div className="text-center">
                      <p className="lg:text-[8px] sm:text-[6px] text-[4px]">
                        LOSE
                      </p>
                      <p>{user.stats.lose}</p>
                    </div>
                    <div className="text-center">
                      <p className="lg:text-[8px] sm:text-[6px] text-[4px]">
                        DRAW
                      </p>
                      <p>{user.stats.draw}</p>
                    </div>
                    <div className="text-center">
                      <p className="lg:text-[8px] sm:text-[6px] text-[4px]">
                        BATTLE
                      </p>
                      <p>{user.battle}</p>
                    </div>
                    <div className="lg:ml-30 sm:ml-10">
                      <CountDiv
                        width={"lg:w-6 sm:w-4 w-3"}
                        height={"lg:h-6 sm:h-4 h-3"}
                        count={"999"}
                        countClass={"lg:text-[8px] sm:text-[6px] text-[4px]"}
                        extraClasses={
                          "!bg-black lg:!min-w-12 sm:!min-w-8 !min-w-5 !py-[2px] !px-1  "
                        }
                        rounded={"rounded-[4px]"}
                        border={"lg:p-[2px] p-[1px]"}
                        bgImageSize={ windowSize.width < 620 ? "8px 8px":  windowSize.width < 1024 ? "10px 10px":"16px 16px"}
                            backgroundPosition={ windowSize.width < 620 ? "2px 2px" :  windowSize.width < 1024 ? "3px 3px" :"4px 4px"}
                                  image={count}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
