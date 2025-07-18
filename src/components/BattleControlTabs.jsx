import grid from "../assets/images/grid.png";
import CountDiv from "./CountDiv";
import honey from "../assets/images/honey.png";
import CancelButton from "./CancelButton";
import Polygon from "./Polygon";

const tokens = [1,2,3,4,5]

const Tab1 = () => {
  return (
    <div className="flex flex-col gap-1 w-[330px] z-100 ">
      <h3
        className="text-[14px] font-extrabold text-center "
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
        height={"h-8"}
        bgImageSize={"38px 38px"}
        backgroundPosition={"-3px 0px"}
        width={"w-8"}
        count={"5000"}
        countClass={"text-[10px]"}
        extraClasses={"!bg-black !min-w-20 !py-[2px] "}
        rounded={"rounded-[15px]"}
      />
      <div className="pl-6 pr-4 ">
        <input type="range" className="custom-slider2 w-full " />
      </div>
      <div className="flex justify-end gap-4 mt-1">
        <CancelButton
          noInset
          label={"Confirm"}
          color={"bg-green-500"}
          labelClass={"text-[10px] font-semibold"}
          extraClasess={" text-[12px] font-semibold !px-3 !py-1"}
          rounded={"!rounded-[15px]"}
        />
        <CancelButton
          noInset
          label={"Cancel"}
          color={"bg-red-500"}
          labelClass={"text-[10px] font-semibold"}
          extraClasess={" text-[12px] font-semibold !px-4 !py-1"}
          rounded={"!rounded-[15px]"}
        />
      </div>
    </div>
  );
};
const Tab2 = () => {
  return (
    <div className="flex flex-col w-[330px] z-100  ">
      <h3
        className="text-[14px] font-extrabold text-center "
        style={{
          background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        EXTEND STAKE
      </h3>
      <div className="relative w-[200px] h-5 ml-16 rounded-full overflow-hidden shadow-md text-[10px] font-bold my-1">
        <select
          className="appearance-none w-full h-full pl-4 pr-8  text-white bg-gradient-to-b from-[#1275db] to-[#005bbb] border-[#fff8dc] border-2 rounded-full font-bold italic focus:outline-none"
          defaultValue=""
        >
          <option value="" className="bg-black text-white" disabled>
            Available Token
          </option>
          <option value="token1" className="bg-black text-white">Token 1</option>
          <option value="token2" className="bg-black text-white">Token 2</option>
        </select>

        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[20px] flex items-center justify-center"
          style={{
            background: "linear-gradient(to bottom, #fff8dc, #d1a955)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="4"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <CountDiv
        image={honey}
        height={"h-8"}
        bgImageSize={"38px 38px"}
        backgroundPosition={"-3px 0px"}
        width={"w-8"}
        count={"5000"}
        countClass={"text-[10px]"}
        extraClasses={"!bg-black !min-w-20 !py-[2px] "}
        rounded={"rounded-[15px]"}
      />
      <div className="pl-6 pr-4 ">
        <input type="range" className="custom-slider2 w-full " />
      </div>
      <div className="flex justify-end gap-4 mt-1 ">
        <CancelButton
          noInset
          label={"Execute!"}
          color={"bg-red-500"}
          labelClass={"text-[10px] font-semibold"}
          extraClasess={" text-[12px] font-semibold !px-4 !py-1"}
          rounded={"!rounded-[15px]"}
        />
      </div>
    </div>
  );
};
const Tab3 = () => {
  return <div className="flex flex-col gap-1 w-[330px] z-100 c ">
      <h3
        className="text-[14px] font-extrabold text-left ml-3 "
        style={{
          background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CHOOSE ITEM
      </h3>
      <div className="flex justify-center items-center gap-2 w-full ">
                  {tokens.map((token, idx) => {
                    return (
                      <Polygon
                        width={"w-28"}
                        height={"h-12"}
                        bgColor={"bg-blue-900"}
                        border={"inset-[3px]"}
                        
                      />
                    );
                  })}
                </div>
      <div className="flex justify-end gap-4  mt-1">
        <CancelButton
          noInset
          label={"Use Item!"}
          color={"bg-green-500"}
          labelClass={"text-[10px] font-semibold"}
          extraClasess={" text-[12px] font-semibold !px-3 !py-1"}
          rounded={"!rounded-[15px]"}
        />
      
      </div>
    </div>;
};

const BattleControlTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="relative">
      <div className="battleControlBorder battleControl z-0 p-2 w-[440px]">
        <div
          className="bg-[#197E94] h-36 battleControl relative z-10 overflow-hidden"
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
          {activeTab === "defender" ? <Tab1 /> : activeTab === "counter" ? <Tab2 /> : <Tab3 />}
        </div>
      </div>
      <div className="absolute -left-[85px] inset-0 flex items-center justify-center z-20 flex-col gap-2 w-fit">
        <div
          className={`${
            activeTab === "defender"
              ? "battleTabsBorder pl-2 py-2 pr-0 rounded-bl-[25px] absolute -left-[14px] "
              : "battleInactiveTabsBorder p-[3px] rounded-bl-[20px]"
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
            <div className={`px-3 pl-4 py-1 font-extrabold text-[12px] italic relative  ${ activeTab=== "defender" ? "text-center"  : "flex flex-col items-end"} `}>
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
                className=" h-[2px] "
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
              ? "battleTabsBorder pl-2 py-2 rounded-bl-[25px] absolute -left-[13px] "
              : "battleInactiveTabsBorder p-[3px] rounded-bl-[20px]"
          } battleTabs relative z-0  rounded-[6px] rounded-tl-[8px]  cursor-pointer  `}
          onClick={() => setActiveTab("counter")}>
          <div
            className={`bg-[#197E94]  battleTabsInside relative z-10 overflow-hidden ${activeTab === "counter" ? "" : "rounded-[6px]"} rounded-tl-[8px] rounded-bl-[17px] w-24`}
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
            <div className={`px-3 pl-4 py-1 font-extrabold text-[12px] italic relative  ${ activeTab=== "counter" ? "text-center"  : "flex flex-col items-end"} `}>
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
                className=" h-[2px] "
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
              ? "battleTabsBorder pl-2 py-2 rounded-bl-[25px] absolute -left-[16px] "
              : "battleInactiveTabsBorder p-[3px] rounded-bl-[20px]"
          } battleTabs relative z-0  rounded-[6px] rounded-tl-[8px] ml-4  cursor-pointer`}
          onClick={() => setActiveTab("item")}
        >
          <div
            className={`bg-[#197E94]  battleTabsInside relative z-10 overflow-hidden ${activeTab === "item" ? "" : "rounded-[6px]"} rounded-tl-[8px] rounded-bl-[17px] w-[85px]`}
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
            <div className={`px-3 pl-4 py-1 font-extrabold text-[12px] italic relative  ${ activeTab=== "item" ? "text-center"  : "flex flex-col items-end"} `}>
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
                className=" h-[2px] "
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
