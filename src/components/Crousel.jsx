import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountDiv from "./CountDiv";
import count from "../assets/images/count.png"


export default function Carousel({ nfts }) {
  const [activeIndex, setActiveIndex] = useState(1); 

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

  const total = nfts.length;

  const handleSwipe = (dir) => {
    if (dir === "up") {
      setActiveIndex((prev) => (prev + 1) % total);
    } else if (dir === "down") {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.y < -100) handleSwipe("up");
    else if (info.offset.y > 100) handleSwipe("down");
  };

  const getPosition = (i) => {
    if (i === activeIndex) return "center";
    if ((i + 1) % total === activeIndex) return "top";
    if ((i - 1 + total) % total === activeIndex) return "bottom";
    return "hidden";
  };

  const sizeSmall = <div className="relative w-full max-w-[540px] h-[220px] mx-auto overflow-hidden flex items-center justify-center">
      {nfts.map((nft, i) => {
        const position = getPosition(i);
        const isActive = position === "center";

        const cardStyles = {
          center: {
            y: 0,
            x: 10,
            scale: 1,
            opacity: 1,
            zIndex: 30,
          },
          top: {
            y: -50,
            x: -10,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 10,
          },
          bottom: {
            y: 40,
            x: -10,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 10,
          },
          hidden: {
            y: 1000,
            scale: 0.8,
            opacity: 0,
            zIndex: 0,
          },
        }[position];

        return (
          <motion.div
            key={nft.id}
            drag={isActive ? "y" : false}
            onDragEnd={isActive ? handleDragEnd : undefined}
            animate={cardStyles}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute w-[90%] max-w-[600px]"
            style={{ zIndex: cardStyles.zIndex }}
          >
            <div className="relative z-10 w-full max-w-4xl p-[2px] !rounded-xl gradient-border">
             <div
  className="w-full h-full rounded-xl bg-[#4483ff] p-1 relative overflow-hidden"
  style={{
    boxShadow:
      "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.7), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.7)",
  }}
>
 
  {!isActive && (
    <div className="absolute inset-0 bg-black/70 z-10 rounded-xl pointer-events-none" />
  )}

  
  <div className="flex gap-4 items-center relative z-20">
    <div
      className="w-[100px] h-16 bg-white rounded-xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${nft.image})` }}
    />
    <div className="flex flex-col justify-between ">
      <p className="text-blue-100 text-[10px] mt-2">{nft.description}</p>
      <div className="w-fit">
        <p className="text-[8px] text-white pb-2">Allocated your Baka Nft</p>
        <CountDiv
          width={"w-4"}
          height={"h-4"}
          extraClasses={"!py-1 !min-w-4 !text-[6px]"}
          count={"9999"}
          rounded={"rounded-[6px]"}
          bgImageSize={ windowSize.width < 620 ? "8px 8px" :"20px 20px"}
                        backgroundPosition={ windowSize.width < 620 ? "4px 4px" :"6px 6px"}
                        image={count}
        />
      </div>
    </div>
  </div>
</div>

            </div>
          </motion.div>
        );
      })}
    </div>

    const SizeBig =  <div className="relative w-full max-w-xl h-[400px] mx-auto overflow-hidden flex items-center justify-center">
      {nfts.map((nft, i) => {
        const position = getPosition(i);
        const isActive = position === "center";

        const cardStyles = {
          center: {
            y: 0,
            x: 20,
            scale: 1,
            opacity: 1,
            zIndex: 30,
          },
          top: {
            y: -80,
            x: -50,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 10,
          },
          bottom: {
            y: 80,
            x: -50,
            scale: 0.9,
            opacity: 0.5,
            zIndex: 10,
          },
          hidden: {
            y: 1000,
            scale: 0.8,
            opacity: 0,
            zIndex: 0,
          },
        }[position];

        return (
          <motion.div
            key={nft.id}
            drag={isActive ? "y" : false}
            onDragEnd={isActive ? handleDragEnd : undefined}
            animate={cardStyles}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute w-[90%] max-w-[600px]"
            style={{ zIndex: cardStyles.zIndex }}
          >
            <div className="relative z-10 w-full max-w-4xl p-[6px] !rounded-4xl gradient-border">
             <div
  className="w-full h-full rounded-4xl bg-[#4483ff] p-3 relative overflow-hidden"
  style={{
    boxShadow:
      "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.7), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.7)",
  }}
>
 
  {!isActive && (
    <div className="absolute inset-0 bg-black/70 z-10 rounded-4xl pointer-events-none" />
  )}

  
  <div className="flex gap-4 items-center relative z-20">
    <div
      className="w-[220px] h-32 bg-white rounded-3xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${nft.image})` }}
    />
    <div className="flex flex-col justify-between h-30">
      <p className="text-blue-100 text-[10px] mt-2">{nft.description}</p>
      <div className="w-fit">
        <p className="text-[8px] text-white pb-2">Allocated your Baka Nft</p>
        <CountDiv
          width={"w-8"}
          height={"h-8"}
          extraClasses={"!py-1 !min-w-20 !text-[10px]"}
          count={"9999"}
          rounded={"rounded-[6px]"}
           bgImageSize={ windowSize.width < 620 ? "8px 8px" :"20px 20px"}
                        backgroundPosition={ windowSize.width < 620 ? "2px 2px" :"6px 6px"}
                        image={count}
        />
      </div>
    </div>
  </div>
</div>

            </div>
          </motion.div>
        );
      })}
    </div>

  return (
  <>{
windowSize.width < 640 ? sizeSmall : SizeBig
  }
  </>
    
  );
}
