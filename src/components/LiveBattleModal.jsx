import pattern from "../assets/images/patern.png";
import VsBattleCard from "./VsBattleCard";

const dummyNFTs = Array(12).fill({
  name: "Baka Bears #00000",
  price: "0.00009",
});

const Battles = ({windowSize}) => {
  return (
    <div className="relative">
      <div className=" mb-4 w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-10 "></div>

      <div className="flex gap-4 relative z-20">
        <VsBattleCard windowSize={windowSize} />
        <VsBattleCard windowSize={windowSize} />
        <VsBattleCard windowSize={windowSize} />
        
      </div>
      <div className=" mt-10 w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-10 "></div>
    </div>
  );
};

const LiveBattleModal = ({
  tab,
  notifications,
  setActiveTab,
  activeTab,
  open,
  setModal,
  windowSize
}) => {
  if (!open) return null;

  return (
    
    
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div
        className="relative w-[550px] md:w-[550px] lg:w-[900px] max-h-[70vw] lg:max-h-[80vh] overflow-y-visible shadow-lg p-6 border-[4px] bg-[#23313a] border-yellow-50 mt-8 lg:mt-0  rounded-none"
        style={{
          boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <button
          onClick={() => {
            setModal(false);
          }}
          className="absolute -top-10 right-0 text-white bg-red-600 rounded-full  cursor-pointer w-6 h-6 flex items-center justify-center text-xs"
          style={{
            boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          }}
        >
          ✕
        </button>
        <div className="flex justify-start absolute -left-1 sm:-top-7.5 lg:-top-10 -top-5">
          <div
            className="relative lg:w-[220px] sm:w-[140px] sm:h-[30px] w-[80px] h-[20px] lg:h-[40px] cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            <div
              className={`absolute inset-0 z-0  bg-yellow-50 tab1-border tab1`}
            ></div>
            <div
              className={`absolute z-10 top-[3px] right-[4px] -bottom-[1px] left-[4px] text-[6px] sm:text-[10px] lg:text-[14px] tab1 bg-[#23313a] text-white flex items-center justify-start px-3 sm:px-5`}
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
        </div>
        
         
          <div className={`lg:mt-10 mt-0 flex flex-col gap-3 lg:h-[60vh] h-[60vw] overflow-y-auto ${windowSize.width < 1024 ? "custom-scrollbar-mobile" : "custom-scrollbar"} p-6`}>
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          <Battles windowSize={windowSize} />
          

        </div>
       
      </div>
    </div>
  );
};

export default LiveBattleModal;
