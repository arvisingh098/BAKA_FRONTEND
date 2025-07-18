import BackGround1 from "../components/Background1";
import BackGround2 from "../components/Background2";
import Header from "../components/Header";
import HeadingCard from "../components/HeadingCard";
import NotificationModal from "../components/NotificationModal";
import Polygon from "../components/Polygon";
import Token from "../components/Token";
import UserCard from "../components/UserCard";
import BribeComponent from "./BribeComponent";
import user2 from "../assets/images/user2.png";
import rank from "../assets/images/rank.png";
import PlayerList from "../components/PlayerList.jsx";
import PlayerStatusCard from "../components/PlayerStatusCard.jsx";
import { useEffect, useState } from "react";
import BribeSweepPanel from "../components/BribeSweepPanel.jsx";

const BribeProfile = ({
  tokens = [1, 2, 3, 4, 5],
  playerList = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [activeTab, setActiveTab] = useState("tab");

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

  return (
    <BackGround2>
      <Header />
      <div className="flex gap-4 lg:px-28 sm:px-12 px-8 ">
        <p className="text-white text-[10px]">back</p>
        <div className="border-1 border-white rounded-2xl bg-black/30 backdrop-blur-lg sm:w-[50vw] w-[40vh] ">
          <div className=" border-r sm:pt-10 pt-2 pl-6 ">
            <div className="flex items-center gap-6 relative">
              <UserCard
                image={user2}
                bgColor={"bg-black"}
                // bgImage={grid}
                outerShadow
                height={"lg:h-32 sm:h-22 h-12"}
                width={" lg:w-32 sm:w-22 w-12"}
                imageSize={windowSize?.width < 640
          ? "40px 40px"
          : windowSize?.width < 1024
          ? "80px 80px"
          : "110px 110px"}
                rounded={"!rounded-[12px]"}
                gradientBorder={"p-[1.5px] sm:p-[4px]"}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <p className="lg:text-sm sm:text-[14px] text-[6px] text-white mb-[2px] sm:mb-2">123456009</p>
                  <h2 className="font-bold lg:text-3xl sm:text-[18px] text-[10px] text-white">
                    USER NICK NAME
                  </h2>
                  <p className="lg:text-normal sm:text-[12px] text-[8px] text-white mt-2 sm:mt-4">Status Quo</p>
                </div>
              </div>
              <div className="absolute top-0 lg:-right-6 sm:-right-3 right-2 lg:w-40 sm:w-22 sm:h-18 w-14 lg:h-32 h-10">
                <div className="relative w-full h-full">
                  <img
                    src={rank}
                    alt="Badge"
                    className="absolute inset-0 lg:w-40 sm:w-22 sm:h-18 w-14 lg:h-32 h-10 object-cover z-0"
                  />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-transparent lg:text-2xl sm:text-[14px] text-[10px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100 bg-clip-text font-bold  drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]">
                      4<span className="lg:text-lg sm:text-[12px] text-[8px]">th</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mt-6 mt-2">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  //   image={grid}
                  bgColor={"bg-black"}
                  heading={"OPPONENT ITEM NFT"}
                   width={"w-30 sm:w-40 lg:w-56"}
                  textSize={"text-[8px] sm:text-[14px] lg:text-[18px]"}
                />
                <div
                  className="flex justify-start gap-2 sm:pb-6 pb-3 sm:pt-2 pt-1 pr-4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(32, 210, 201, 0.4) 30%, rgba(5, 142, 255, 0.4) 50%, rgba(32, 210, 201, 0.4) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  {tokens.map((token, idx) => {
                    return (
                      <Polygon
                        width={"w-7 sm:w-15 lg:w-[75px]"} height={"h-6 sm:h-14 lg:h-16"} border={"inset-[1px] sm:inset-[3px] lg:inset-[6px]"}
                        bgColor={"bg-black"}
                        noBg
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  //   image={grid}
                  bgColor={"bg-black"}
                  heading={"PLAYER LIST"}
                   width={"w-30 sm:w-40 lg:w-56"}
                  textSize={"text-[8px] sm:text-[14px] lg:text-[18px]"}
                />
                <div
                  className="p-[1.5px] rounded-lg bg-gradient-to-r gradient-border"
                  style={{
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, .3)",
                  }}
                >
                  <div
                    className=" h-3 sm:h-4 rounded-lg relative overflow-hidden bg-white flex items-center justify-center"
                    style={{
                      boxShadow:
                        "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.5), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <input
                      className="w-full h-full text-[6px] sm:text-[10px] text-black bg-transparent border-none outline-none px-2"
                      placeholder="Type..."
                    />
                  </div>
                </div>
                <div className="sm:h-52 lg:h-55 h-24 overflow-scroll custom-scrollbar2 w-full flex flex-col gap-1">
                  {playerList.map((player) => {
                    return <PlayerStatusCard />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 w-full sm:h-full h-[78vw]">
          <BribeComponent
            pannel={<BribeSweepPanel activeTab={activeTab} windowSize= {windowSize} />}
            
            tab={
              <HeadingCard
                heading={"CORRUPTION BRIBE"}
                bgColor={"bg-black"}
                width={"lg:w-54 w-20 !pl-0"}
                textSize={"lg:text-[12px] text-[6px] text-center"}
                border={"p-[1.5px]"}
              />
            }
            tab2={
              <HeadingCard
                heading={"VOTING DIRECTION BRIBE"}
                bgColor={"bg-black"}
                textSize={"lg:text-[12px] text-[6px] text-center"}
               width={"lg:w-54 w-20 !pl-0"}
                border={"p-[1.5px]"}
                
              />
            }
            tab2Id={"tab2"}
            tabId={"tab"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </BackGround2>
  );
};

export default BribeProfile;
