import { useEffect, useState } from "react";
import swordIcon from "../assets/images/battleSheild.png";
import honey from "../assets/images/honey.png";
import UserDetailCard from "./UserDetailsCard";
import eth from "../assets/images/eth.png";
import Token from "./Token";
import CancelButton from "./CancelButton";
import ep1 from "../assets/images/episode1.png";
import UserDetailCard2 from "./UserCardDetail2";
import grid from "../assets/images/grid.png";
import crown from "../assets/images/crown2.png";

const dummyNFTs = new Array(4).fill({
  name: "Baka Bears #00000",
  value: "0.00009",
});

export default function BattleModal({ onClose, isOpen, battleStatus = true, windowSize }) {
//   const [battleStatus, setBattleStatus] = useState(false);

  if (!isOpen) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

//   const handleNext = () => {
//     setBattleStatus(!battleStatus);
//   }

  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div className=" battleModalBorder relative rounded-2xl ">
        {battleStatus && (
          <img
            src={crown}
            alt="Crown"
            className="absolute z-20 sm:-top-16 -top-8 left-2 transform -translate-x-1/2 lg:w-[100px] sm:w-[100px] w-[60px]"
          />
        )}
        <div
          className=" rounded-2xl m-1.5 h-[80vw] lg:h-full "
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
          <div className=" battleModalBorder relative rounded-2xl pb-1.5">
            <div
              className="rounded-2xl"
              style={{
                background:
                  "linear-gradient(to left, #4483FF 31%, #294F99 86%)",
              }}
            >
              <div className="relative pb-1 rounded-2xl lg:h-80 h-[38vw] flex flex-col justify-center items-center overflow-hidden">
              
                <div
                  className="absolute inset-0 z-0 rounded-2xl"
                  style={{
                    backgroundImage: `
        url(${grid}),
        linear-gradient(to left, #4483FF 31%, #294F99 86%)
      `,
                    backgroundPosition: "bottom, bottom",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "250% 200%, 200% 200%",
                    opacity: 0.3,
                  }}
                />

                <div className="relative z-10 text-white flex flex-col items-center ">
                  <h1
                    className="lg:text-[48px] sm:text-[32px] text-[20px] text-center font-extrabold italic leading-none"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: `
          0px -4px 0 #fff7b2,
          2px -4px 0 #ff004f,
          -2px -4px 0 #00ff95,
          6px 4px 8px rgba(0,0,0,0.9)
        `,
                    }}
                  >
                    {battleStatus ? "YOU WIN" : "DEFEAT"}
                  </h1>

                  <div className="flex justify-between items-center sm:mt-4 mt-2 px-4 gap-6">
                    {[1, 2].map((_, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start items-center"
                      >
                        <div className="p-[1px] gradient-border !rounded-[20px] mb-4 relative">
                          {battleStatus && (
                            <div className="w-full h-full bg-black/40 absolute top-0 rounded-2xl"></div>
                          )}
                          <div
                            className={`lg:w-${idx === 0 ? 24 : 28} lg:h-${
                              idx === 0 ? 24 : 28
                            } w-${idx === 0 ? 14 : 16} h-${
                              idx === 0 ? 14 : 16
                            } sm:w-${idx === 0 ? 20 : 24} sm:h-${
                              idx === 0 ? 20 : 24
                            } border-white rounded-[10px] bg-center bg-cover bg-no-repeat`}
                            style={{ backgroundImage: `url(${ep1})` }}
                          />
                        </div>
                        <p
                          className={`lg:text-[${idx === 0 ? 12 : 14}px] sm:text-[${idx === 0 ? 10 : 12}px] text-[${idx === 0 ? 5 : 7}px]   ${
                            idx === 1
                              ? "font-bold text-white/90 "
                              : "text-white/60"
                          }  `}
                        >
                          USER NICKNAME
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 sm:pt-4 sm:pb-2 pt-1.5 pb-0.5 text-center flex flex-col justify-center items-center gap-2 ">
            <div className="lg:text-[10px] sm:text-[8px] text-[5px] text-white/80 font-bold">
              TOTAL HONEY STACKED IN MATCH
            </div>
            <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left text-white lg:text-sm text-[7px] sm:text-[10px]   rounded-full flex justify-start items-center ">
              <img src={honey} className="lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-4 h-4 mt-1" />{" "}
              <div className="px-8">9.9999%</div>
            </div>
            <div className="lg:text-[10px] text-[5px] sm:text-[8px] font-bold text-white/80 lg:mb-3 mb-1">
              NFT ELIMINATED
            </div>
          </div>

          <div className=" px-10 lg:pb-2 pb-1 text-center ">
            <div className="grid grid-cols-4 gap-2">
              {dummyNFTs.map((nft, i) => (
                <UserDetailCard2
                  bgColor={"bg-black/80"}
                  imageBgColor={"bg-white"}
                  imageSize={
                          windowSize?.width < 640
                            ? "22px 22px"
                            : windowSize?.width < 1024
                            ? "50px 50px"
                            : "65px 65px"
                        }
                        height={"h-[28px] sm:h-[60px] lg:h-20"}
                        width={"w-[28px] sm:w-[60px] lg:w-20"}
                        textColor={
                          "!text-[4px] sm:!text-[6px] lg:!text-[9px] w-8 sm:w-10 lg:w-full text-white"
                        }
                        rounded={"!rounded-[4px] lg:!rounded-xl"}
                        gradientWidth={"w-fit"}
                        title={"BAKA BEARS #00000"}
                        gradientBorder={"p-[2px] lg:p-[4px]"}
                        noWidth
                        extraclasses={
                          "flex flex-col justify-center items-center p-[4px] lg:px-2 lg:py-2 lg:pl-2 "
                        }
                        description={
                          <div className="flex items-center gap-1">
                            <Token
                              image={eth}
                              height={"h-2 sm:h-4 lg::h-4"}
                              width={"w-2 sm:w-4 lg:w-4"}
                              bgPosition={"center"}
                              bgSize={
                                windowSize?.width < 640
                                  ? "12px 12px"
                                  : "35px 35px"
                              }
                              border={"p-[1px] sm:p-[2px]"}
                            />{" "}
                            <div className="font-light text-[6px] sm:text-[8px] lg:text-[10px]">
                              0.00009
                            </div>{" "}
                          </div>
                        }
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-6 px-10 sm:py-3 py-1 lg:pb-5">
            <CancelButton
              label={"NEXT"}
              color={"bg-red-500"}
              labelClass={"lg:!text-[10px] sm:!text-[10px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px]"}
          rounded={"!rounded-[10px] w-full"}
            //   onClick={handleNext}
            />
            <CancelButton
              label={"SHARE"}
              color={"bg-green-700"}
               labelClass={"lg:!text-[10px] sm:!text-[10px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px] "}
          rounded={"!rounded-[10px] w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
