


import React, { useEffect } from "react";
import grid from "../assets/images/grid.png";
import pattern from "../assets/images/patern.png";

const notifications = [
  {
    time: "3/11/2025 05:00",
    message: 'Incoming Bribe "nickname" 800 token "token name" and 9 NFT',
  },
  {
    time: "3/11/2025 05:00",
    message: "Discount 20%  All NFT",
  },
  {
    time: "3/11/2025 05:00",
    message: 'You Get Attacked by "NIKNAME"',
  },
  {
    time: "3/11/2025 05:00",
    message: 'Incoming Bribe "nickname" 800 token "token name" and 9 NFT',
  },
  {
    time: "3/11/2025 05:00",
    message: "Discount 20%  All NFT",
  },
  {
    time: "3/11/2025 05:00",
    message: 'You Get Attacked by "NIKNAME"',
  },
];

const NotificationModal = ({
  tab,
  tab2,
  notifications,
  setActiveTab,
  activeTab,
  open,
  setModal
}) => {
    if (!open) return null;

    console.log(activeTab)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="relative w-[450px] md:w-[550px] lg:w-[900px] max-h-[70vw] lg:max-h-[80vh] overflow-y-visible shadow-lg p-6 border-[4px] bg-[#23313a] border-yellow-50  rounded-none"
        style={{
          boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex justify-start absolute -left-1 -top-10">
          {tab && (
            <div
              className="relative w-[150px] lg:w-[220px] h-[40px] cursor-pointer"
              onClick={() => setActiveTab(tab)}
            >
              
              <div
                className={`absolute inset-0 z-0 ${
                  activeTab === tab ? "bg-yellow-50" : ""
                } tab1-border tab1`}
              ></div>

              
              {activeTab !== tab && (
                <div className="absolute top-[3px] right-[4px] bottom-[4px] left-[4px] z-20 bg-black/30 backdrop-blur-[.5px] tab1"></div>
              )}

             
              <div
                className={`absolute z-10 top-[3px] right-[4px] ${
                  activeTab === tab ? "-bottom-[1px]" : "bottom-[4px]"
                } left-[4px] tab1 bg-[#23313a] text-white flex items-center justify-start px-5`}
                style={{
                  boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
                  backgroundImage: `url(${pattern})`,
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundPosition: "top left, bottom right",
                  backgroundSize: "400%, 200%",
                  backgroundBlendMode: "multiply",
                }}
              >
                {tab}
              </div>
            </div>
          )}
          {tab2 && (
            <div
              className="relative w-[240px] h-[40px] cursor-pointer"
              onClick={() => setActiveTab(tab2)}
            >
              <div
                className={`absolute z-0 inset-0 ${
                  activeTab === tab2 ? "bg-yellow-50" : ""
                } tab2-border tab2`}
              ></div>

               {activeTab !== tab2 && (
                <div className="absolute top-[3px] right-[3px] bottom-[4px] left-[5px] z-20 bg-black/30 backdrop-blur-[.5px] tab2"></div>
              )}

              <div
                className={`absolute z-10 top-[3px] right-[5px] ${
                  activeTab === tab2 ? "-bottom-[1px]" : "bottom-[4px]"
                } left-[5px] tab2 bg-[#23313a] text-white flex items-center justify-center`}
                style={{
                  boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
                  backgroundImage: `url(${pattern})`,
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundPosition: "top left, bottom right",
                  backgroundSize: "420%, 200%",
                  backgroundBlendMode: "multiply",
                }}
              >
                {tab2}
              </div>
            </div>
          )}
        </div>

        <button onClick={()=>{setModal(false)}} className="absolute -top-10 right-0 text-white bg-red-600 rounded-full  cursor-pointer w-6 h-6 flex items-center justify-center text-xs" style={{
          boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          
        }}>
          ✕
        </button>
        <div className="mt-10 flex flex-col gap-1 max-h-[40vw] lg:max-h-[60vh] overflow-y-auto custom-scrollbar pr-6">{notifications}</div>
      </div>
    </div>
  );
};

export default NotificationModal;

