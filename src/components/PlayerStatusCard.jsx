import React from "react";
import CountDiv from "./CountDiv";
import ep1 from "../assets/images/episode1.png";

const PlayerStatusCard = () => {
  return (
    <div className="w-full max-w-3xl table-row shadow-lg pr-6 ">
      <div className="table-cell align-middle pr-1 sm:pr-3">
        <div className="p-[1px] gradient-border !rounded-[6px] sm:!rounded-[10px]">
        <div
          className="sm:w-12 w-8 h-8 sm:h-12 border-white!rounded-[6px] sm:!rounded-[10px] bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${ep1})`,
          }}
        />
        </div>
      </div>
      <div className="table-cell align-middle w-full">
        <div className="flex items-center border-2 border-blue-500 rounded-[6px] sm:rounded-2xl sm:p-2 p-1 w-full">
          <div className="text-white font-semibold text-[6px] lg:text-[10px] sm:mr-4">
            PLAYER <span className="text-white">“NICKNAME”</span>
          </div>

          <div className="flex items-center sm:gap-6 gap-1 text-white font-medium">
            <div className="border-l border-r border-white px-4 flex justify-center items-center text-center">
              <div className="pr-2 text-[6px] lg:text-[10px]">Battle</div>
              <div className="font-normal text-[6px] lg:text-[10px]">50</div>
            </div>
            <div className="text-center text-[6px] lg:text-[10px]">
              <span className="text-white/80">win </span>10{" "}
              <span className="text-white/80 ml-2">Lose </span>10{" "}
              <span className="text-white/80 ml-2">Draw </span>10
            </div>
          </div>

          <div className="flex items-center gap-2 pl-3 py-1 ml-auto">
            <CountDiv
              width={"lg:w-8 w-3"}
              height={"lg:h-8 h-3"}
              bgImageSize={"14px 14px"}
              count={"9999"}
              extraClasses={"lg:!min-w-20 !min-w-4 !py-[1px]"}
              countClass={"lg:!text-[11px] !text-[3px] flex justify-end"}
              border={"p-[2px]"}
              rounded={"rounded-[6px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatusCard;
