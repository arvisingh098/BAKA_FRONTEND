import grid from "../assets/images/grid.png";
import CountDiv from "./CountDiv";
import honey from "../assets/images/honey.png";
import CancelButton from "./CancelButton";
import Polygon from "./Polygon";
import Select from "./Select";
import { useState } from "react";

const tokens = [1,2,3,4,5]



const Tab1 = ({windowSize}) => {
  const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col gap-1 lg:w-[330px] sm:w-[170px] w-16 z-100 ">
      <h3
        className="lg:text-[14px] sm:text-[9px] text-[4px] font-extrabold text-center "
        style={{
          background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MATCH REQUIRED STAKE
      </h3>
      <CountDiv
        image={honey}
        height={"lg:h-8 sm:h-5 h-2.5 "}
        // bgImageSize={"38px 38px"}
        // bgImageSize={"25px 25px"}
        // backgroundPosition={"-1.5px -1px"}
         bgImageSize={ windowSize.width < 640 ? "13px 13px" : windowSize.width < 1024 ? "25px 25px" : "38px 38px" }
        backgroundPosition={ windowSize.width < 1024 ? "-3px 0px" : "-1.5px -1px" }
        width={"lg:w-8 sm:w-5 w-2.5"}
        count={`${value}`}
        countClass={"lg:text-[10px] sm:text-[8px] text-[3px]"}
        extraClasses={"!bg-black sm:!min-w-20 !min-w-15 !py-[2px] "}
        rounded={"rounded-[15px]"}
        border={"p-[1px]"}
      />
      { windowSize.width > 1024 ? <div className="pl-6 pr-4  ">
        <input type="range" className="custom-slider2 w-full  " min={1}
        max={10000} 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} />
      </div>
       :<input type="range" className="custom-slider2-mobile w-full  " min={1}
        max={10000} 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} />}
      <div className="flex justify-end sm:gap-4  gap-1 mt-1">
        <CancelButton
          noInset
          label={"Confirm"}
          color={"bg-green-500"}
           labelClass={"lg:!text-[10px] sm:!text-[6px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px]"}
          rounded={"!rounded-[15px]"}
        />
        <CancelButton
          noInset
          label={"Cancel"}
          color={"bg-red-500"}
          labelClass={"lg:!text-[10px] sm:!text-[6px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px]"}
          rounded={"!rounded-[15px]"}
        />
      </div>
    </div>
  );
};
const Tab2 = ({windowSize}) => {

   const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col lg:w-[330px] sm:w-[170px] w-18 gap-[2px] sm:gap-1 lg:gap-0  z-100  ">
      <h3
        className="lg:text-[14px] sm:text-[9px] text-[4px] font-extrabold text-center "
        style={{
          background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        EXTEND STAKE
      </h3>
      <Select />
     <CountDiv
        image={honey}
        height={"lg:h-8 sm:h-5 h-2.5 "}
        // bgImageSize={"38px 38px"}
        // bgImageSize={"25px 25px"}
        // backgroundPosition={"-1.5px -1px"}
       bgImageSize={ windowSize.width < 640 ? "13px 13px" : windowSize.width < 1024 ? "25px 25px" : "38px 38px" }
        backgroundPosition={ windowSize.width < 1024 ? "-3px 0px" : "-1.5px -1px" }
        width={"lg:w-8 sm:w-5 w-2.5"}
        count={`${value}`}
        countClass={"lg:text-[10px] sm:text-[8px] text-[3px]"}
        extraClasses={"!bg-black sm:!min-w-20 !min-w-15 !py-[2px] "}
        rounded={"rounded-[15px]"}
        border={"p-[1px]"}
      />
     { windowSize.width > 1024 ? <div className="pl-6 pr-4  ">
        <input type="range" className="custom-slider2 w-full  " min={1}
        max={10000} 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} />
      </div>
       :<input type="range" className="custom-slider2-mobile w-full  " min={1}
        max={10000} 
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} />}
    
      <div className="flex justify-end gap-4 mt-1 ">
        <CancelButton
          noInset
          label={"Execute"}
          color={"bg-green-500"}
          labelClass={"lg:!text-[10px] sm:!text-[6px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px]"}
          rounded={"!rounded-[15px]"}
        />
      </div>
    </div>
  );
};
const Tab3 = ({windowSize}) => {
  return <div className="flex flex-col lg:w-[330px] sm:w-[170px] w-20 gap-[2px] lg:gap-0 sm:gap-1  z-100  ">
      <h3
       className="lg:text-[14px] sm:text-[9px] text-[4px] font-extrabold text-start "
        style={{
          background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CHOOSE ITEM
      </h3>
      <div className="flex lg:justify-center items-center gap-1 sm:gap-2 w-full ">
                  {tokens.map((token, idx) => {
                    return (
                      <Polygon
                        width={"lg:w-28  w-8"}
                        height={"lg:h-12 sm:h-7 h-3"}
                        bgColor={"bg-blue-900"}
                        border={" inset-[1px]  sm:inset-[2px] lg:inset-[3px]"}
                        
                      />
                    );
                  })}
                </div>
      <div className="flex justify-end gap-4  mt-1">
        <CancelButton
          noInset
          label={"Use Item!"}
           color={"bg-green-500"}
          labelClass={"lg:!text-[10px] sm:!text-[6px] !text-[4px] font-semibold"}
          extraClasess={"lg:!text-[10px] sm:!text-[6px] font-semibold sm:!px-3 sm:!py-1 !px-2 !py-[2px]"}
          rounded={"!rounded-[15px]"}
        />
      
      </div>
    </div>;
};

const BattleControlTabs = ({ activeTab, setActiveTab, windowSize }) => {

  

  return (
    <div className="relative">
      <div className="battleControlBorder battleControl z-0 lg:p-2 p-1 lg:w-[440px] sm:w-[250px] w-[150px]">
        <div
          className="bg-[#197E94] lg:h-36 sm:h-26 h-14 battleControl relative z-10 overflow-hidden"
          style={{
            boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `url(${grid})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              opacity: 0.3,
            }}
          />
        </div>
        <div className="absolute  inset-0 flex items-start justify-center z-20 flex-col gap-2 pl-10 ">
          {activeTab === "defender" ? <Tab1 windowSize={windowSize} /> : activeTab === "counter" ? <Tab2 windowSize={windowSize} /> : <Tab3 windowSize={windowSize} />}
        </div>
      </div>
      <div className="absolute lg:-left-[85px] sm:-left-[43px] -left-[22px] inset-0 flex items-center justify-center z-20 flex-col sm:gap-2 gap-1 w-fit">
        <div
          className={`${
            activeTab === "defender"
              ? "battleTabsBorder lg:pl-2 lg:py-2 py-1 pl-1 pr-0 rounded-bl-[13px] sm:rounded-bl-[25px] absolute -left-[8px] sm:-left-[14px] "
              : "battleInactiveTabsBorder p-[1px] lg:p-[3px] rounded-bl-[20px]"
          } battleTabs relative z-0  rounded-[6px] rounded-tl-[8px]  cursor-pointer  `}
          onClick={() => setActiveTab("defender")}>
        
          <div
            className={`bg-[#197E94]  battleTabsInside relative z-10 overflow-hidden ${activeTab === "defender" ? "" : "rounded-[6px]"} rounded-tl-[8px] rounded-bl-[17px] `}
            style={{
              boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: `url(${grid})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                opacity: 0.3,
              }}
            />
            <div className={`lg:px-3 lg:pl-4 py-0.5 px-1 pl-1.5  font-extrabold lg:text-[12px] sm:text-[8px] text-[3px] italic relative  ${ activeTab=== "defender" ? "text-center"  : "flex flex-col items-end"} `}>
              <div
                style={{
                  background: "linear-gradient(to right, #E1A61E, #FFFCF1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DEFFENDER
              </div>
              <div
                className=" sm:h-[2px] h-[1px] "
                style={{
                  background: "linear-gradient(to left, #FFFCF1, #e1a61e52)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            activeTab === "counter"
              ? "battleTabsBorder lg:pl-2 lg:py-2 py-1 pl-1 pr-0 rounded-bl-[13px] lg:rounded-bl-[25px] absolute -left-[10.5px] sm:-left-[17px] lg:-left-[13px] "
              : "battleInactiveTabsBorder lg:p-[3px] p-[1px] rounded-bl-[20px]"
          } battleTabs relative z-0  rounded-[6px] rounded-tl-[8px]  cursor-pointer  `}
          onClick={() => setActiveTab("counter")}>
          <div
            className={`bg-[#197E94]  battleTabsInside relative z-10 overflow-hidden ${activeTab === "counter" ? "" : "rounded-[6px]"} rounded-tl-[8px] rounded-bl-[17px] w-8 sm:w-[60px] lg:w-24`}
            style={{
              boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: `url(${grid})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                opacity: 0.3,
              }}
            />
            <div className={`lg:px-3 lg:pl-4 py-0.5 px-1 pl-1.5  font-extrabold lg:text-[12px] sm:text-[8px] text-[3px] italic relative  ${ activeTab=== "counter" ? "text-center"  : "flex flex-col items-end"} `}>
              <div
                style={{
                  background: "linear-gradient(to right, #E1A61E, #FFFCF1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                COUNTER
              </div>
              <div
                className=" sm:h-[2px] h-[1px] "
                style={{
                  background: "linear-gradient(to left, #FFFCF1, #e1a61e52)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            activeTab === "item"
              ? "battleTabsBorder lg:pl-2 lg:py-2 py-1 pl-1 pr-0 rounded-bl-[13px] lg:rounded-bl-[25px] absolute -left-[13.5px]  sm:-left-[15px] lg:-left-[16px] "
              : "battleInactiveTabsBorder lg:p-[3px] p-[1px] rounded-bl-[20px]"
          } battleTabs relative z-0  rounded-[6px] rounded-tl-[8px] ml-2  cursor-pointer`}
          onClick={() => setActiveTab("item")}
        >
          <div
            className={`bg-[#197E94]  battleTabsInside relative z-10 overflow-hidden ${activeTab === "item" ? "" : "rounded-[6px]"} rounded-tl-[8px] rounded-bl-[17px] w-7 sm:w-[50px] lg:w-[85px]`}
            style={{
              boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: `url(${grid})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                opacity: 0.3,
              }}
            />
            <div className={`lg:px-3 lg:pl-4 py-0.5 px-1 pl-1.5  font-extrabold lg:text-[12px] sm:text-[8px] text-[3px] italic relative  ${ activeTab=== "item" ? "text-center"  : "flex flex-col items-end"} `}>
              <div
                style={{
                  background: "linear-gradient(to right, #E1A61E, #FFFCF1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ITEM
              </div>
              <div
                className=" sm:h-[2px] h-[1px] "
                style={{
                  background: "linear-gradient(to left, #FFFCF1, #e1a61e52)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleControlTabs;
