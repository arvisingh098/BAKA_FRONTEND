import React, { useEffect, useState } from "react";
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
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const dummyNFTs = Array(3).fill({
  name: "Baka Bears #00000",
  price: "0.00009",
});

export default function BattleGround() {
  const [activeTab, setActiveTab] = useState("defender");
  const [modal, setModal] = useState(false);

  const navigate = useNavigate()

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <p className="text-white text-[10px] cursor-pointer z-10" onClick={()=>{navigate("/phase-2")}}><FaArrowLeft size={windowSize.width < 640 ? 20 : 30} /></p>
        <div className="relative w-full h-full">
          <div className=" absolute lg:right-18 sm:right-12  right-2 w-1/2">
            <BattleCrousel nfts={nftsCrousel} windowSize={windowSize} />

            <div className="battleOpponentBorder battleOpponent relative z-0 p-1 mt-12 sm:mt-20 lg:mt-0  sm:p-2">
              <div
                className="opponent-background lg:h-60 sm:h-50 h-26  battleOpponent relative z-10 overflow-hidden"
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
                    className="lg:text-[60px] sm:text-[40px] text-[20px] font-extrabold italic leading-none"
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
                   <div className="flex sm:gap-2 gap-1 py-1 sm:py-4  ">
                    {dummyNFTs.map((nft, i) => (
                        <UserDetailCard
                         onClick={setModal}
                      ableClick={true}
                        bgColor={"bg-blue-500/60"}
                        imageBgColor={"bg-white"}
                        imageSize={
                          windowSize?.width < 640
                            ? "22px 22px"
                            : windowSize?.width < 1024
                            ? "50px 50px"
                            : "65px 65px"
                        }
                        height={"h-[28px] sm:h-[60px] lg:h-18"}
                        width={"w-[28px] sm:w-[60px] lg:w-18"}
                        textColor={
                          "!text-[4px] sm:!text-[6px] lg:!text-[9px] lg:!text-[11px] w-8 sm:w-10 lg:w-20 text-white"
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
                              height={"h-2 sm:h-4 lg:h-6"}
                              width={"w-2 sm:w-4 lg:w-6"}
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
              </div>
            </div>
            <div className="lg:h-3 sm:h-1.5 h-1 mt-1  battleOpponent2 battleOpponent2Border"></div>
          </div>
          <div className=" absolute left-10  sm:left-7 lg:left-18 w-1/2 mt-20 sm:mt-34 lg:mt-28">
            <div className="lg:h-3 sm:h-1.5 h-1 mb-1 battleYou2 battleYou2Border"></div>
            <div className="battleYouBorder battleYou relative z-0 p-1 sm:p-2 ">
              <div
                className="you-background lg:h-60 sm:h-50 h-26  battleYou relative z-10 overflow-hidden"
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
                    className="lg:text-[60px] sm:text-[40px] text-[20px] font-extrabold italic leading-none"
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
                  <div className="flex sm:gap-2 gap-1 py-1 sm:py-4  ">
                    {dummyNFTs.map((nft, i) => (
                      <UserDetailCard
                        bgColor={"bg-blue-500/60"}
                        imageBgColor={"bg-white"}
                        imageSize={
                          windowSize?.width < 640
                            ? "22px 22px"
                            : windowSize?.width < 1024
                            ? "50px 50px"
                            : "65px 65px"
                        }
                        height={"h-[28px] sm:h-[60px] lg:h-18"}
                        width={"w-[28px] sm:w-[60px] lg:w-18"}
                        textColor={
                          "!text-[4px] sm:!text-[6px] lg:!text-[9px] lg:!text-[11px] w-8 sm:w-10 lg:w-20 text-white"
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
                              height={"h-2 sm:h-4 lg:h-6"}
                              width={"w-2 sm:w-4 lg:w-6"}
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
              </div>
            </div>
            <div className="flex justify-end sm:mt-3 mt-1 mr-13 sm:mr-22  lg:mr-36">
              <BattleControlTabs
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                windowSize={windowSize}
              />
            </div>
          </div>
        </div>
      </div>
      <BattleModal onClose={setModal} isOpen={modal} windowSize={windowSize} />
    </BackGround2>
  );
}
