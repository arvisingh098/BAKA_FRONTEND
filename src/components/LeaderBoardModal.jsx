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

export default function LeaderboardModal({ tab, setModal, setActiveTab, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="relative w-[900px] max-h-[80vh] overflow-y-visible shadow-lg  border-[4px] bg-[#23313a] border-yellow-50  rounded-none"
        style={{
          boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex justify-start absolute -left-1 -top-10">
          <div
            className="relative w-[220px] h-[40px] cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            <div
              className={`absolute inset-0 z-0  bg-yellow-50 tab1-border tab1`}
            ></div>
            <div
              className={`absolute z-10 top-[3px] right-[4px] -bottom-[1px] left-[4px] tab1 bg-[#23313a] text-white flex items-center justify-start px-5`}
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

        <button
          onClick={() => {
            setModal(false);
          }}
          className="absolute -top-10 right-0 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
          style={{
            boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          }}
        >
          ✕
        </button>

        <div className="mt-10 flex flex-col gap-3 h-[60vh] overflow-y-auto custom-scrollbar p-6 text-white font-sans">
          <div className="flex justify-center items-end gap-6 mb-10">
            <div
              className="relative w-44 rounded-xl p-3 border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95] -mb-6 z-0"
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
              <p className=" font-semibold text-sm py-1">{users[1].name}</p>
              <p className="text-[8px] pb-2  ">Status quo</p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[30px] relative">
                  <div
                    className="w-40 h-40 border-white rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                    }}
                  ></div>
                </div>

                <img
                  src={rank2}
                  className="absolute -bottom-4 -left-6 w-[58px] h-[68px]"
                />
              </div>

              <div className="flex !justify-end py-2">
                <CountDiv
                  width={"w-6"}
                  height={"h-6"}
                  count={"999"}
                  countClass={"text-[8px]"}
                  extraClasses={"!bg-black !min-w-12 !py-[2px] !px-1  "}
                  rounded={"rounded-[4px]"}
                  border={"p-[2px]"}
                />
              </div>
              <div className="text-xs text-center flex justify-center items-center gap-2 py-1">
                <div className="flex flex-col justify-between gap-2">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>

           <div
              className="relative w-44 rounded-xl p-3 border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95]  z-0 "
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
                        className="absolute -top-10 left-2 transform -translate-x-1/2 w-[60px]"
                      />
              <p className=" font-semibold text-sm py-1">{users[1].name}</p>
              <p className="text-[8px] pb-2  ">Status quo</p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[30px] relative">
                  <div
                    className="w-40 h-40 border-white rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                    }}
                  ></div>
                </div>

                <img
                  src={rank1}
                  className="absolute -bottom-4 -left-6 w-[58px] h-[68px]"
                />
              </div>

              <div className="flex !justify-end py-2">
                <CountDiv
                  width={"w-6"}
                  height={"h-6"}
                  count={"999"}
                  countClass={"text-[8px]"}
                  extraClasses={"!bg-black !min-w-12 !py-[2px] !px-1  "}
                  rounded={"rounded-[4px]"}
                  border={"p-[2px]"}
                />
              </div>
              <div className="text-xs text-center flex justify-center items-center gap-2 py-1">
                <div className="flex flex-col justify-between gap-2">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>

            <div
              className="relative w-44 rounded-xl p-3 border-4 text-white border-white flex flex-col  shadow-lg scale-[0.95] -mb-6 z-0"
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
    )`
  }}
            >
              <p className=" font-semibold text-sm py-1">{users[1].name}</p>
              <p className="text-[8px] pb-2  ">Status quo</p>

              <div className="relative w-full flex items-center justify-center ">
                <div className="p-[1px] gradient-border !rounded-[30px] relative">
                  <div
                    className="w-40 h-40 border-white rounded-[10px] bg-center bg-cover bg-no-repeat relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${ep1})`,
                    }}
                  ></div>
                </div>

                <img
                  src={rank3}
                  className="absolute -bottom-4 -left-6 w-[58px] h-[68px]"
                />
              </div>

              <div className="flex !justify-end py-2">
                <CountDiv
                  width={"w-6"}
                  height={"h-6"}
                  count={"999"}
                  countClass={"text-[8px]"}
                  extraClasses={"!bg-black !min-w-12 !py-[2px] !px-1  "}
                  rounded={"rounded-[4px]"}
                  border={"p-[2px]"}
                />
              </div>
              <div className="text-xs text-center flex justify-center items-center gap-2 py-1">
                <div className="flex flex-col justify-between gap-2">
                  <span>WIN</span>
                  <span>{users[1].stats.win}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>LOSE</span>
                  <span>{users[1].stats.lose}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span>DRAW</span>
                  <span>{users[1].stats.draw}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 font-bold ">
                  <span>BATTLE</span>
                  <span>{users[1].battle}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {rest.map((user) => (
              <div className="flex justify-center items-center flex-1">
                <div className="w-28 h-16 mt-1">
                  <div className="relative w-full h-full">
                    <img
                      src={rank}
                      alt="Badge"
                      className="absolute inset-0 w-28 h-16 object-cover z-0"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="px-3 py-1 text-sm font-bold text-yellow-300 shadow-md">
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
                      height={"h-10"}
                      width={"w-10"}
                      image={user2}
                      bgColor={"bg-blue-600"}
                      rounded={"!rounded-[4px]"}
                      imageSize={"36px 36px"}
                    />
                    <div>
                      <p className="text-sm ">{user.name}</p>
                      <p className="text-xs text-gray-300">Staking data</p>
                    </div>
                  </div>
                  <div className="flex gap-10 text-sm font-medium text-white items-center">
                    <div className="text-center">
                      <p className="text-[8px]">WIN</p>
                      <p>{user.stats.win}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px]">LOSE</p>
                      <p>{user.stats.lose}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px]">DRAW</p>
                      <p>{user.stats.draw}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px]">BATTLE</p>
                      <p>{user.battle}</p>
                    </div>
                    <div className="ml-30">
                    <CountDiv
                      width={"w-6"}
                      height={"h-6"}
                      count={"999"}
                      countClass={"text-[8px]"}
                      extraClasses={"!bg-black !min-w-16 !py-[2px] !px-1  "}
                      rounded={"rounded-[4px]"}
                      border={"p-[2px]"}
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
