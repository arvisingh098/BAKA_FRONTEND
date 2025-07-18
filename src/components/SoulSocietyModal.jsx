import React, { useEffect } from "react";
import pattern from "../assets/images/patern.png";
import HeadingCard from "./HeadingCard";
import Token from "./Token";
import UserDetailCard from "./UserDetailsCard";
import eth from "../assets/images/eth.png";
import CountDiv from "./CountDiv";
import CancelButton from "./CancelButton";
import coin1 from "../assets/images/coin1.png";
import honey from "../assets/images/honey.png";
import soulHead from "../assets/images/soulHead.png";

const dummyNFTs = Array(12).fill({
  name: "Baka Bears #00000",
  price: "0.00009",
});

const SoulSocietyModal = ({
  tab,
  notifications,
  setActiveTab,
  activeTab,
  open,
  setModal,
  windowSize
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="relative w-[450px] md:w-[550px] lg:w-[900px] max-h-[70vw] lg:max-h-[80vh] overflow-y-visible shadow-lg p-6 border-[4px] bg-[#23313a] border-yellow-50  rounded-none"
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
        <div className="flex justify-start absolute -left-1 lg:-top-10 -top-5">
          <div
            className="relative lg:w-[220px] w-[80px] h-[20px] lg:h-[40px] cursor-pointer"
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
              {tab}
            </div>
          </div>
        </div>

        <div className=" absolute lg:top-6 top-2 right-6 bg-gradient-to-r from-[#245dba] to-transparent text-left text-white lg:text-sm text-[6px]  rounded-[5px] flex justify-center items-center py-1 px-2  ">
          Reward Reset in 00:00:00
        </div>
        <div className=" absolute lg:-top-40 -top-20 lg:-left-13 -left-10 z-10 ">
          <img src={soulHead} className="lg:w-[200px] w-[80px] h-[80px] lg:h-[200px] mt-1" />
        </div>
        <div className="lg:mt-10 mt-0 flex flex-col gap-1 lg:gap-3 ">
          <div className="flex justify-between pb-4 relative ">
            <div className="flex flex-col">
              <div className="text-white font-medium lg:text-[16px] text-[8px] mb-2">
                TOTAL NFT STACKED
              </div>
              <CountDiv
                count={"9999"}
                width={"lg:w-14 w-8"}
                height={"lg:h-14 h-8"}
                extraClasses={"lg:!min-w-4 !min-w-2 "}
                countClass={"lg:text-xl text-[8px]"}
                image={coin1}
                rounded={"rounded-[4px]"}
                // bgImageSize={"68px 68px"}
                border={"p-[2px] lg:p-[3px]"}
                bgImageSize={"40px 40px"}
                backgroundPosition={"-2.7px -2.2px"}
              />
              <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left flex justify-center items-center text-white lg:text-sm text-[6px] lg:py-1 lg:px-4 py-[2px] px-[4px] rounded-xl mb-1 mt-4">
                APR <span className="px-8">9.9999%</span>
              </div>
            </div>
            <div className="flex justify-end items-end lg:gap-8 gap-4">
              <div className="flex flex-col lg:gap-2 gap-1">
                <div className="text-white lg:text-[10px] text-[6px]">
                  TOTAL HONEY COIN EARN
                </div>
                <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left text-white lg:text-sm text-[6px]  rounded-full flex justify-center items-center ">
                  <img src={honey} className="lg:w-8 lg:h-8 w-4 h-4 mt-1" />{" "}
                  <div className="px-8">9.9999%</div>
                </div>
                <div className="lg:mt-2 mt-1 flex justify-end">
                  <CancelButton
                    label={"CLAIM"}
                    color={"bg-green-800"}
                    extraClasess={" lg:!px-8 !px-4 lg:text-[12px] text-[6px]"}
                    labelClass={"lg:!text-[12px] !text-[6px]"}
                    rounded={"rounded-[4px] lg:rounded-full"}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:gap-2 gap-1 ">
                <div className="text-white lg:text-[10px] text-[6px]">
                  TOTAL YOUR STACK BAKA BEAR
                </div>
                <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left text-white lg:text-sm text-[6px]  rounded-full flex justify-center items-center ">
                  <img src={honey} className="lg:w-8 lg:h-8 w-4 h-4 mt-1" />{" "}
                  <div className="px-8">9.9999%</div>
                </div>
                <div className=" lg:mt-2 mt-1 flex justify-end">
                  <CancelButton
                    label={"UNSTAKE"}
                    color={"bg-green-800"}
                    extraClasess={"!py-[3px] px-4 lg:!px-4 !px-4  lg:text-[12px] text-[6px]"}
                    labelClass={"lg:!text-[12px] !text-[6px]"}
                    rounded={"rounded-[4px] lg:rounded-full"}
                  />
                </div>
                <div className=" absolute bottom-0 right-0 text-white/50 lg:text-[8px] text-[4px] pr-2">
                  LOCKED UNTIL THE END OF THE PHASE 2
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="gradient-bg  !rounded-xl ">
              <div className=" lg:p-3 lg:pt-6 pt-2 p-1  rounded-xl flex flex-col ">
                <div
                  className="lg:text-[10px]  text-[5px] font-medium p-2 text-white rounded-[10px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, black, rgba(0,0,0,0))",
                  }}
                >
                  Choose your NFT Baka bear for stake
                </div>
                <div className="flex overflow-x-auto gap-2 lg:py-4 py-1 custom-scrollbar ">
                  {dummyNFTs.map((nft, i) => (
                    <UserDetailCard
                  bgColor={"bg-black/70"}
                      imageBgColor={"bg-white"}
                  
                   imageSize={windowSize?.width < 640
          ? "16px 16px"
          : windowSize?.width < 1024
          ? "60px 60px"
          : "95px 95px"}
                   height={"h-[20px] sm:h-[70px] lg:h-28"}
                    width={"w-[20px] sm:w-[70px] lg:w-28"}
                    textColor={"!text-[3px] sm:!text-[9px] lg:!text-[11px] text-white"}
                  rounded={"!rounded-[6px] lg:!rounded-xl"}
                  gradientWidth={"w-fit"}
                  title={"BAKA BEARS #00000"}
                  gradientBorder={"p-[1px] lg:p-[4px]"}
                  noWidth
                  extraclasses={"flex flex-col justify-center items-center p-[4px] px-1 lg:py-2 lg:pl-4 "}
                  description={
                    <div className="flex items-center gap-[1px] ">
                      <Token
                        image={eth}
                        height={"h-2 sm:h-6"}
                        width={"w-2 sm:w-6"}
                        bgPosition={"center"}
                        bgSize={"15px 15px"}
                        border={" p-[1px] lg:p-[2px]"}
                      />{" "}
                      <div className="font-light text-[4px] sm:text-[8px] lg:text-[10px]">0.00009</div>{" "}
                    </div>
                  }
                />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 mt-6">
                  <div
                    className="flex items-center gap-10   px-6 py-2 rounded-full flex-1 shadow-2xl"
                    style={{
                      background: `
      linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.6)),
      linear-gradient(to right, #3b82f6, #3b82f6)
    `,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <div className="text-[12px] font-bold text-white">
                      SWEEP
                    </div>
                    <input type="range" className="custom-slider w-full" />
                    <div className="text-[12px] text-white">1</div>
                  </div>
                  <HeadingCard
                    rounded={"!rounded-[8px] "}
                    noPadding
                    heading={
                      <div className="text-[12px] py-[1.5px] font-bold px-3">
                        Sweep <span className="px-2">|</span>20 Honey coin
                      </div>
                    }
                    width={"w-fit"}
                    bgColor={"bg-blue-900"}
                  />
                  <HeadingCard
                    rounded={"!rounded-[8px] "}
                    noPadding
                    heading={
                      <div className="text-[12px] py-[1.5px] font-bold px-12">
                        Stake
                      </div>
                    }
                    width={"w-fit"}
                    bgColor={"bg-blue-900"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulSocietyModal;
