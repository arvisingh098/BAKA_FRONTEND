import video from "../assets/images/video.png";
import CountDiv from "./CountDiv";
import coin from "../assets/images/coin1.png";
import grid from "../assets/images/grid.png";

const BribeEpisodeCard = ({episode}) => {
  return (
    <div className="relative z-10 sm:!w-fit max-w-md !w-20 p-[2px] sm:p-[4px] sm:!rounded-4xl !rounded-[10px] gradient-border">
      <div
        className="w-full h-full sm:rounded-4xl rounded-[10px] bg-[#4483ff] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 12, 42, 0.7), rgba(151, 197, 249, 0.7))`,
          boxShadow:
            "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.7), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div
          className="text-white text-center text-[6px] sm:text-[10px] font-bold lg:text-xs sm:py-3 py-1"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(11, 97, 214, 0.7), rgba(79, 195, 247, 0.7)), url('${grid}')`,
            backgroundSize: "100% 100%, 400px 100px",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          EPISODE {episode}
        </div>

        <div className="flex flex-col  items-center relative z-20 ">
          <div
            className="lg:w-[190px] lg:h-28 sm:w-34 sm:h-20 w-20 h-8 bg-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${video})`,

              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
          <div className="flex flex-col justify-between w-full ">
            <div className="w-full bg-white/20 sm:px-2 px-[2px] sm:py-2 py-[2px] backdrop-blur-sm">
              <p className="sm:text-[8px] text-[4px] text-white sm:pb-2 pb-[2px] px-2">
                Allocated your Baka Nft
              </p>
              <div className="px-2 w-fit">
                <CountDiv
                  width={"sm:w-8 w-4"}
                  height={"sm:h-8 h-4"}
                  extraClasses={"sm:!py-1 py-[2px] sm:!min-w-20 !min-w-10 sm:!text-[10px] !text-[5px]"}
                  count={"-"}
                  rounded={"rounded-[6px]"}
                  border={"p-[2px]"}
                  image={coin}
                  bgImageSize={"35px 35px"}
                  backgroundPosition={"-0.2px 0.5px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BribeEpisodeCard;
