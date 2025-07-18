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

export default function BattleModal({ onClose, isOpen, battleStatus }) {
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
            className="absolute z-20 -top-16 left-2 transform -translate-x-1/2 w-[100px]"
          />
        )}
        <div
          className=" rounded-2xl m-1.5  "
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
              <div className="relative pb-1 rounded-2xl h-80 flex flex-col justify-center items-center overflow-hidden">
                {/* Background Layer */}
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

                {/* Content Layer */}
                <div className="relative z-10 text-white flex flex-col items-center ">
                  <h1
                    className="text-[48px] text-center font-extrabold italic leading-none"
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

                  <div className="flex justify-between items-center mt-4 px-4 gap-6">
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
                            className={`w-${idx === 0 ? 24 : 28} h-${
                              idx === 0 ? 24 : 28
                            } border-white rounded-[10px] bg-center bg-cover bg-no-repeat`}
                            style={{ backgroundImage: `url(${ep1})` }}
                          />
                        </div>
                        <p
                          className={`text-[${idx === 0 ? 12 : 14}px]  ${
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

          <div className="px-10 pt-4 pb-2 text-center flex flex-col justify-center items-center gap-2 ">
            <div className="text-[10px] text-white/80 font-bold">
              TOTAL HONEY STACKED IN MATCH
            </div>
            <div className="bg-gradient-to-r from-[#245dba] to-transparent text-left text-white text-sm  rounded-full flex justify-start items-center ">
              <img src={honey} className="w-8 h-8 mt-1" />{" "}
              <div className="px-8">9.9999%</div>
            </div>
            <div className="text-[10px] font-bold text-white/80 mb-3">
              NFT ELIMINATED
            </div>
          </div>

          <div className=" px-10 pb-2 text-center ">
            <div className="grid grid-cols-4 gap-2">
              {dummyNFTs.map((nft, i) => (
                <UserDetailCard2
                  bgColor={"bg-black/80"}
                  imageBgColor={"bg-white"}
                  imageSize={"65px 65px"}
                  width={"w-20"}
                  height={"h-20"}
                  rounded={"!rounded-[15px]"}
                  gradientWidth={"w-fit"}
                  title={"BAKA BEARS #00000"}
                  noWidth={true}
                  extraclasses={
                    "flex flex-col justify-center items-center p-1.5 pb-2 "
                  }
                  textColor={" !text-[8px] pt-2 text-white"}
                  description={
                    <div className="flex items-center gap-1">
                      <Token
                        image={eth}
                        height={"h-4"}
                        width={"w-4"}
                        bgPosition={"center"}
                        bgSize={"35px 35px"}
                        border={"p-[2px]"}
                      />{" "}
                      <div className="font-light text-[10px]">0.00009</div>{" "}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-6 px-10 py-3 pb-5">
            <CancelButton
              label={"NEXT"}
              color={"bg-red-500"}
              extraClasess={"w-full"}
              rounded={"!rounded-[10px] w-full"}
            //   onClick={handleNext}
            />
            <CancelButton
              label={"SHARE"}
              color={"bg-green-700"}
              extraClasess={"w-full"}
              rounded={"!rounded-[10px] w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
