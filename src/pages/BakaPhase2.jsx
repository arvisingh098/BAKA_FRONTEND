import BackGround2 from "../components/Background2";
import Header from "../components/Header";
import VsBattleCard from "../components/VsBattleCard";
import soulSociety from "../assets/images/soulSociety.png";
import BattleFieldCard from "../components/BattleFieldCard";
import PlayerStatusCard from "../components/PlayerStatusCard";
import LeaderBoardBar from "../components/LeaderBoardBar";
import { useEffect, useState } from "react";
import SoulSocietyModal from "../components/SoulSocietyModal";
import LiveBattleModal from "../components/LiveBattleModal";
import LeaderboardModal from "../components/LeaderBoardModal";

const BakaPhase2 = () => {
  const playerList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [modal, setModal] = useState(false)
  const [liveModal, setLiveModal] = useState(false)
  const [leaderBoardModal, setLeaderBoardModal] = useState(false)
  
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
      <div className="w-full lg:h-[calc(100vh-230px)] h-[calc(100vw-25vw)]  flex flex-col">
        <div className="flex-1 flex justify-between items-center">
          <div className="h-[100%] flex  gap-6">
            <div className="w-fit pl-10">
                <LeaderBoardBar setModal={setLeaderBoardModal} />
            </div>
            <div className="flex flex-col sm:gap-6 gap-3">
              <div className=" flex flex-col  sm:gap-4 gap-2">
                <div
                  className="lg:text-[12px] sm:text-[9px] text-[4px] font-medium sm:p-2 p-[2px] text-white rounded-[10px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, black, rgba(0,0,0,0))",
                  }}
                >
                  MY ACTIVE BATTLEFIELD
                </div>
                <BattleFieldCard windowSize={windowSize} />
                <BattleFieldCard windowSize={windowSize} />
                <BattleFieldCard windowSize={windowSize} />
              </div>
              <div className=" flex flex-col lg:gap-4 gap-2">
                <div
                  className="lg:text-[12px] sm:text-[9px] text-[4px] font-medium sm:p-2 p-[2px] text-white rounded-[10px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, black, rgba(0,0,0,0))",
                  }}
                >
                  Player List
                </div>
                <div
                  className="p-[1.5px] rounded-lg bg-gradient-to-r gradient-border w-[50%]"
                  style={{
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, .3)",
                  }}
                >
                  <div
                    className=" lg:h-4 h-2 sm:h-3 rounded-lg relative overflow-hidden bg-white flex items-center justify-center"
                    style={{
                      boxShadow:
                        "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.5), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <input
                      className="w-full h-full lg:text-[10px] sm:text-[8px] text-[4px] text-black bg-transparent border-none outline-none px-2"
                      placeholder="Type..."
                    />
                  </div>
                </div>
                <div className={`lg:h-40 ${windowSize.width < 400 ? "h-8" : windowSize.width < 750 ?  "h-[12vw]" : "h-[21vw]" } overflow-scroll lg:custom-scrollbar2 custom-scrollbar2-mobile flex flex-col gap-2 w-full`}>
                  {playerList.map((player) => {
                    return <PlayerStatusCard />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 lg:h-80 sm:h-55 h-35 relative cursor-pointer"
            style={{
              backgroundImage: `url('${soulSociety}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
            }}
            onClick={()=>{
                setModal(true)
            }}
          ></div>
        </div>

        <div className="relative overflow-visible flex justify-center items-center gap-4 px-4 py-4">
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          <VsBattleCard setModal={setLiveModal} windowSize={windowSize} />
          
        </div>
        <SoulSocietyModal open={modal} setModal={setModal} tab={""} windowSize={windowSize}/>
        <LiveBattleModal open={liveModal}  setModal={setLiveModal} tab={"Active Battle"} windowSize={windowSize}/>
        <LeaderboardModal isOpen={leaderBoardModal} setModal={setLeaderBoardModal}  />
      </div>
    </BackGround2>
  );
};

export default BakaPhase2;
