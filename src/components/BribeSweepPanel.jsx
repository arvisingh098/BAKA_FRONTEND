import React from "react";
import UserDetailCard from "./UserDetailsCard";
import Token from "./Token";
import eth from "../assets/images/eth.png";
import HeadingCard from "./HeadingCard";
import honey from "../assets/images/honey.png";
import CancelButton from "./CancelButton";
import BribeEpisodeCard from "./BribeEpisodeCard";

const dummyNFTs = Array(12).fill({
  name: "Baka Bears #00000",
  price: "0.00009",
});

const bribeEpisode = [
    {episode: "1"},
    {episode: "2"},
    {episode: "3"},
]

const BribeSweepPanel = ({activeTab, windowSize}) => {
  return (
    <div className="max-h-[80vh] pb-4  rounded-xl  text-white font-sans">
      <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left text-white/70 lg:text-sm text-[6px] sm:text-[10px] lg:py-2 lg:px-4 sm:py-1 sm:px-2 py-[1px] px-[4px] rounded-xl mb-1">
        Players pay other players to take full control over a certain number of
        their NFTs in the game.
      </div>

      {activeTab === "tab" ? (
        <div className="relative">
          <div className=" gradient-bg pb-5 sm:pb-10 sm:py-2 rounded-xl ">
            <div className="grid grid-cols-6 max-h-[100px] sm:max-h-[250px] lg:max-h-[340px] gap-2 lg:gap-8  overflow-y-auto p-3 pt-2 pb-2 custom-scrollbar2">
              {dummyNFTs.map((nft, i) => (
                <UserDetailCard
                  bgColor={"bg-[#083837]"}
                  imageBgColor={"bg-white"}
                  
                   imageSize={windowSize?.width < 640
          ? "30px 30px"
          : windowSize?.width < 1024
          ? "60px 60px"
          : "95px 95px"}
                   height={"h-[40px] sm:h-[70px] lg:h-28"}
                    width={"w-[40px] sm:w-[70px] lg:w-28"}
                    textColor={"!text-[7px] sm:!text-[9px] lg:!text-[11px] text-white"}
                  rounded={"!rounded-[10px] lg:!rounded-xl"}
                  gradientWidth={"w-fit"}
                  title={"BAKA BEARS #00000"}
                  gradientBorder={"p-[2px] lg:p-[4px]"}
                  noWidth
                  
                  extraclasses={"flex flex-col justify-center items-center p-[4px] px-4 lg:py-2 lg:pl-4 "}
                  description={
                    <div className="flex items-center gap-1">
                      <Token
                        image={eth}
                        height={"h-4 sm:h-6"}
                        width={"w-4 sm:w-6"}
                        bgPosition={"center"}
                        bgSize={"35px 35px"}
                        border={"p-[2px]"}
                      />{" "}
                      <div className="font-light text-[6px] sm:text-[8px] lg:text-[10px]">0.00009</div>{" "}
                    </div>
                  }
                />
              ))}
            </div>
          </div>

          <div className="mt-4 px-6 sm:px-10 lg:px-20 absolute -bottom-4 w-full">
            <div className="flex items-center justify-between gap-6">
              <div
                className="flex items-center gap-4 lg:gap-10 mt-2  px-6 py-2 rounded-full flex-1 shadow-2xl"
                style={{
                      background: `
      linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.6)),
      linear-gradient(to right, #3b82f6, #3b82f6)
    `,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                    }}
              >
                <div className="text-[6px] sm:text-[12px] font-bold">SWEEP</div>
                <input type="range" className="custom-slider-mobile lg:custom-slider  w-full" />
                <div className="text-[6px] lg:text-[12px]">1</div>
              </div>
              <HeadingCard
                rounded={"rounded-xl "}
                noPadding
                heading={
                  <div className="text-[6px] sm:text-[12px] py-1 font-bold px-3">
                    Sweep <span className="px-2">|</span> 20 BAKA NFT
                  </div>
                }
                width={"w-fit"}
                bgColor={"bg-blue-800"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" gradient-bg pb-2 rounded-t-xl ">
            <div className="grid grid-cols-6 max-h-[50px] sm:max-h-[150px] gap-2 lg:gap-8  overflow-y-auto p-3 pt-2 pb-2 lg:pt-6 lg:pb-6 custom-scrollbar2">
              {dummyNFTs.map((nft, i) => (
                <UserDetailCard
                  bgColor={"bg-[#083837]"}
                  imageBgColor={"bg-white"}
                   imageSize={windowSize?.width < 640
          ? "30px 30px"
          : windowSize?.width < 1024
          ? "60px 60px"
          : "95px 95px"}
                   height={"h-[40px] sm:h-[70px] lg:h-28"}
                    width={"w-[40px] sm:w-[70px] lg:w-28"}
                    textColor={"!text-[7px] sm:!text-[9px] lg:!text-[11px] lg:pt-2 text-white"}
                  rounded={"!rounded-[10px] lg:rounded-xl"}
                  gradientWidth={"w-fit"}
                  title={"BAKA BEARS #00000"}
                  gradientBorder={"p-[2px] lg:p-[4px]"}
                  noWidth
                  
                  extraclasses={"flex flex-col justify-center items-center p-[4px] px-4  lg:py-2 lg:pl-4"}
                  description={
                    <div className="flex items-center gap-1">
                      <Token
                        image={eth}
                        height={"h-4 sm:h-6"}
                        width={"w-4 sm:w-6"}
                        bgPosition={"center"}
                        bgSize={"35px 35px"}
                        border={"p-[2px]"}
                      />{" "}
                      <div className="font-light text-[6px] sm:text-[10px]">0.00009</div>{" "}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-6 pt-1 lg:pt-2">
            {bribeEpisode.map((bribe) => {
              return <BribeEpisodeCard episode={bribe.episode} />;
            })}
          </div>
        </div>
      )}

      <div className={` px-20 lg:px-64  ${activeTab === "tab" ? "pt-1 sm:pt-4 lg:pt-6" : ""}`}>
        <div
          className={`p-[1.5px] bg-gradient-to-r sm:mt-6  ${activeTab === "tab" ? "mt-6" : "mt-2"} !rounded-xl text-black flex items-center justify-between text-sm shadow-inner gradient-border`}
        >
          <div
            className="bg-white h-5 sm:h-8 lg:h-full w-full rounded-xl flex justify-between gap-6"
            style={{
              background:
                "linear-gradient(to right, #e0e0e0, #ffffff, #e0e0e0)",
              boxShadow:
                "inset 0 1px 3px rgba(0,0,0,0.1), inset 0 -1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center gap-2 w-full ml-10 ">
              <img src={honey} alt="coin" className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px]" />
              <div className="font-semibold text-[8px] sm:text-[14px]">Honey-Coin</div>
            </div>
            <div className="h-5 w-[3px] bg-gray-300" />
            <div className="flex justify-between items-center w-full mr-6 text-[8px] sm:text-[12px]">
              <div className="font-bold">5.555</div>
              <div className="text-gray-500 ">10$</div>
            </div>
          </div>
        </div>

        <div className="w-full mb-1 lg:mt-2 lg:mb-6 ">
          <input type="range" className="custom-slider-mobile lg:custom-slider w-full" />

          <div className="flex justify-between text-[6px] lg:text-[10px] text-white/70 mt-1">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      <div className={` flex justify-center  ${activeTab === "tab" ? "sm:py-4 lg:py-0" : ""}`}>
        <CancelButton
          color={"bg-green-600"}
          extraClasess={"px-4 py-[1px] sm:py-1 lg:px-10"}
          label={
            <span
              className="relative z-10 font-bold text-[6px] sm:text-[14px]"
              style={{
                color: "white",
                WebkitTextStroke: ".1px black",
                textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
              }}
            >
              ACTION
            </span>
          }
        />
      </div>
    </div>
  );
};

export default BribeSweepPanel;
