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
        className="relative w-[900px] max-h-[80vh] overflow-y-visible shadow-lg  border-[4px] bg-[#23313a] border-yellow-50  rounded-none"
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
          <div
            className="relative w-[220px] h-[40px] cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            <div
              className={`absolute inset-0 z-0  bg-yellow-50 tab1-border tab1`}
            ></div>
            <div
              className={`absolute z-10 top-[3px] right-[4px] -bottom-[1px] left-[4px] tab1 bg-[#23313a] text-white flex items-center justify-start px-5`}
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

        <button
          onClick={() => {
            setModal(false);
          }}
          className="absolute -top-10 right-0 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
          style={{
            boxShadow: "0 0 12px 2px rgba(254, 252, 232, 0.55)",
          }}
        >
          ✕
        </button>

        <div className="mt-10 flex flex-col gap-3 h-[60vh] overflow-y-auto custom-scrollbar p-6">
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
