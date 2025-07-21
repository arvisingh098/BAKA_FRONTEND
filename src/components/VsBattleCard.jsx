import React from "react";
import ep1 from "../assets/images/vs1.png";
import ep2 from "../assets/images/vs2.png";
import VsBattleText from "./VsBattleText";
import CountDiv from "./CountDiv";
import swords from "../assets/images/swords.png"
import count from "../assets/images/count.png"

const VsBattleCard = ({ setModal, windowSize }) => {
  return (
    <div
      className="relative w-full  cursor-pointer"
      onClick={() => {
        setModal(true);
      }}
    >
      <div className="relative w-full h-8  lg:h-16 lg:rounded-[15px] rounded-[6px] overflow-hidden flex bg-gradient-to-l from-[#188bf7] to-[#2991f8]">
        <div
          className="w-1/2 h-full bg-gradient-to-r from-[#dc5a71] to-[#f3becb] relative"
          style={{
            backgroundImage: `url('${ep2}'), linear-gradient(to right, #dc5a71, #f3becb)`,
            // backgroundSize: "140px auto, 100% 100%",
            backgroundSize: windowSize.width < 1024 ? "70px auto, 100% 100%" : "140px auto, 100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        />
        <div
          className="w-1/2 h-full relative"
          style={{
            backgroundImage: `url('${ep1}')`,
            // backgroundSize: "90px auto",
            backgroundSize: windowSize.width < 1024 ? "50px auto" : "90px auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        />
      </div>
      { !setModal && <div className="relative w-full  rounded-[15px] overflow-hidden flex items-center mt-1">
        <div className="w-1/2 h-full bg-gradient-to-r from-[#4483FF] to-[#4483FF] text-[8px] sm:text-[10px] lg:text-[12px] text-white text-left px-2 !py-[2px] flex items-center justify-start z-10">
          Nickname
        </div>

        <div className="w-1/2 h-full bg-gradient-to-l from-[#992929] to-[#992929] text-[8px] sm:text-[10px] lg:text-[12px] text-white text-right px-2 !py-[2px] flex items-center justify-end z-10">
          Nickname
        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[40px] bg-yellow-300/80 blur-sm z-20 pointer-events-none rounded-full"></div>

        <img
          src={swords}
          alt="VS"
          className="absolute left-1/2 -bottom-3 -translate-x-1/2 -translate-y-1/2 h-[19px] lg:h-[22px] z-30 pointer-events-none"
        />
      </div>
}
      <div className="absolute left-1/2 top-8 pointer-events-none z-20">
        <VsBattleText windowSize={windowSize} />
      </div>
      <div className={`absolute ${setModal ? "left-1/3 -bottom-6" : "left-1/2 -translate-x-[calc(50%-5px)] -bottom-5 lg:-bottom-7"} pointer-events-none z-20`}>
        {setModal ? 
        <CountDiv
          width={"lg:w-8 w-6"}
          height={"lg:h-8 h-6"}
          count={"999"}
          countClass={"lg:text-[10px] text-[8px]"}
          extraClasses={"!bg-black lg:!min-w-20 !min-w-14 !py-[2px] "}
          rounded={"rounded-[4px]"}
          border={"p-[2px]"}
           bgImageSize={ windowSize.width < 620 ? "16px 16px":  windowSize.width < 1024 ? "16px 16px":"20px 20px"}
          backgroundPosition={ windowSize.width < 620 ? "4px 4px" :  windowSize.width < 1024 ? "4px 4px" :"6px 6px"}
          image={count}

        /> :
        <CountDiv
          width={"lg:w-5 w-3"}
          height={"lg:h-5 h-3"}
          count={"99988"}
          countClass={"lg:text-[8px] text-[6px]"}
          extraClasses={"!bg-black lg:!min-w-12 !min-w-8  !py-[1px] !px-1 "}
          rounded={"rounded-[4px]"}
          border={"p-[1px]"}
           bgImageSize={ windowSize.width < 620 ? "8px 8px":  windowSize.width < 1024 ? "8px 8px":"12px 12px"}
          backgroundPosition={ windowSize.width < 620 ? "2px 2px" :  windowSize.width < 1024 ? "2px 2px" :"4px 4px"}
          image={count}
        />}
      </div>
    </div>
  );
};

export default VsBattleCard;
