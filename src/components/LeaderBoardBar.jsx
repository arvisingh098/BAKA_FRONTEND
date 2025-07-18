import React from "react";
// import crown from "./crown.png";
// import avatar from "./avatar.png";]
import crown from "../assets/images/crown.png";
import ep1 from "../assets/images/episode1.png";
import rank1 from "../assets/images/1rank.png";
import rank2 from "../assets/images/2rank.png";
import rank3 from "../assets/images/3rank.png";

const players = [
  { rank: 1, icon: "bg-[#F59E0B]", text: "1" },
  { rank: 2, icon: "bg-[#6B7280]", text: "2" },
  { rank: 3, icon: "bg-[#D97706]", text: "3" },
  { rank: 4 },
  { rank: 5 },
  { rank: 6 },
];

const LeaderBoardBar = ({setModal}) => {

  return (
    <div className="relative  gradient-border !w-fit lg:!rounded-[20px] !rounded-[7px]  lg:p-1 sm:p-[3px] p-[2px]">
      <img
        src={crown}
        alt="Crown"
        className="absolute lg:-top-10 sm:-top-8  -top-6 left-2 transform -translate-x-1/2 lg:w-[60px] sm:w-[50px] w-[40px]"
      />
   <div className="bg-black lg:!rounded-[20px] !rounded-[7px]  p-3">
  {players.map((player, idx) => (
    <div
      key={idx}
      className="relative w-full flex items-center justify-center lg:mb-6 lg:last:mb-0 mb-2 last:mb-0"
    >
      <div className="p-[1px] gradient-border lg:!rounded-[10px] !rounded-[4px] relative">
       
        <div
          className="lg:w-12 lg:h-12 sm:h-10 sm:w-10 w-6 h-6 border-white lg:rounded-[10px] rounded-[4px] bg-center bg-cover bg-no-repeat relative overflow-hidden cursor-pointer"
          onClick={()=>{setModal(true)}}
          style={{
            backgroundImage: `url(${ep1})`,
          }}
        >
          
          {player.rank > 3 && (
            <div className="absolute inset-0 bg-black opacity-60 lg:rounded-[10px] rounded-[4px]" />
          )}
        </div>
      </div>

     
      {player.rank <= 3 && (
        <img
          src={
            player.rank === 1 ? rank1 : player.rank === 2 ? rank2 : rank3
          }
          alt={`Rank ${player.rank}`}
          className="absolute lg:-bottom-4 -bottom-1 left-0 lg:w-[30px] lg:h-[32px] sm:h-[20px] sm:w-[16px] w-[16px] h-[16px]"
        />
      )}
    </div>
  ))}
</div>


    </div>
  );
};

export default LeaderBoardBar;
