import React, { useState } from "react";
import Button from "../components/Button";
import BackGround2 from "../components/Background2";
import Header from "../components/Header";
import you from "../assets/images/you.png";
import opponent from "../assets/images/opponent.png";
import BattleControlTabs from "../components/BattleControlTabs";
import pattern from "../assets/images/patern.png";
import Token from "../components/Token";
import UserDetailCard from "../components/UserDetailsCard";
import eth from "../assets/images/eth.png";
import GlowingStar from "../components/GlowingStar";
import BattleCrousel from "../components/BattleCrousel";
import BattleModal from "../components/BattleModal";

const dummyNFTs = Array(3).fill({
  name: "Baka Bears #00000",
  price: "0.00009",
});

export default function BattleGround() {
  const [activeTab, setActiveTab] = useState("defender");
  const [modal, setModal] = useState(false)
  console.log(modal);

  const nftsCrousel = [
    {
      id: 1,
      title: "Baka Bears #1",
      description:
        " Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum Lorem ipsum",
      //   image: video,
      amount: 99999,
    },
    {
      id: 2,
      title: "Baka Bears #2",
      description: "More ipsum...",
      //   image: video,
      amount: 99999,
    },
    {
      id: 3,
      title: "Baka Bears #3",
      description: "Again ipsum...",
      //   image: video,
      amount: 99999,
    },
  ];

  return (
    <BackGround2>
      <Header />
      <div className="flex gap-4 px-20 relative">
        <div className="absolute top-40 left-1/2 -translate-x-[50%]">
          <GlowingStar />
        </div>
        <div className="relative w-full h-full">
          <div className=" absolute right-18 w-1/2">
            <BattleCrousel nfts={nftsCrousel} />
            
            <div className="battleOpponentBorder battleOpponent relative z-0 p-2">
              <div
                className="opponent-background h-60  battleOpponent relative z-10 overflow-hidden"
                style={{
                  boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 200%",
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${opponent})`,
                    backgroundPosition: "27% 40%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "47%",
                    opacity: 1,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-end justify-center z-20 mr-10">
                  <h1
                    className="text-[60px] font-extrabold italic leading-none"
                    style={{
                      //   background: "linear-gradient(to bottom, #fff7b2, #ffbd60)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: `
            0px -4px 0 #fff7b2,    /* red left bottom */
            2px -4px 0 #ff004f,    /* red left bottom */
            -2px -4px 0 #00ff95,  /* green top right */
            6px 4px 8px rgba(0,0,0,0.9) /* black drop shadow */
          `,
                    }}
                  >
                    OPPONENT
                  </h1>
                  <div className="flex gap-2 py-4  ">
                    {dummyNFTs.map((nft, i) => (
                      <UserDetailCard
                      onClick={setModal}
                      ableClick={true}
                        bgColor={"bg-blue-500/60"}
                        imageBgColor={"bg-white"}
                        imageSize={"65px 65px"}
                        width={"w-18"}
                        height={"h-18"}
                        rounded={"!rounded-[15px]"}
                        gradientWidth={"w-fit"}
                        title={"BAKA BEARS #00000"}
                        noWidth={true}
                        extraclasses={
                          "flex flex-col justify-center items-center p-2 "
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
                            <div className="font-light text-[10px]">
                              0.00009
                            </div>{" "}
                          </div>
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
              <div className="h-3 mt-1  battleOpponent2 battleOpponent2Border" ></div>
          </div>
          <div className=" absolute left-18 w-1/2 mt-28">
          <div className="h-3 mb-1 battleYou2 battleYou2Border" ></div>
            <div className="battleYouBorder battleYou relative z-0 p-2 ">
              <div
                className="you-background h-60  battleYou relative z-10 overflow-hidden"
                style={{
                  boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    backgroundImage: ` url(${pattern})`,
                    backgroundPosition: "bottom, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: " cover",
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${you})`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "60%",
                    opacity: 1,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center ml-10 z-20">
                  <h1
                    className="text-[60px] font-extrabold italic leading-none"
                    style={{
                      //   background: "linear-gradient(to bottom, #fff7b2, #ffbd60)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: `
            0px -4px 0 #fff7b2,    /* red left bottom */
            2px -4px 0 #ff004f,    /* red left bottom */
            -2px -4px 0 #00ff95,  /* green top right */
            6px 4px 8px rgba(0,0,0,0.9) /* black drop shadow */
          `,
                    }}
                  >
                    YOU
                  </h1>
                  <div className="flex gap-2 py-4  ">
                    {dummyNFTs.map((nft, i) => (
                      <UserDetailCard
                        bgColor={"bg-blue-500/60"}
                        imageBgColor={"bg-white"}
                        imageSize={"65px 65px"}
                        width={"w-18"}
                        height={"h-18"}
                        rounded={"!rounded-[15px]"}
                        gradientWidth={"w-fit"}
                        title={"BAKA BEARS #00000"}
                        noWidth={true}
                        extraclasses={
                          "flex flex-col justify-center items-center p-2 "
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
                            <div className="font-light text-[10px]">
                              0.00009
                            </div>{" "}
                          </div>
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3 ml-[150px]">
              <BattleControlTabs
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
      <BattleModal onClose={setModal} isOpen={modal} />
    </BackGround2>
  );
}
