import { motion } from "framer-motion";
import { useState } from "react";
import swordIcon from "../assets/images/battleSheild.png";
import shieldIcon from "../assets/images/sheild.png";

export default function BattleCarousel({ nfts, windowSize }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = nfts.length;

  const getPosition = (i) => {
    if (i === activeIndex) return "center";
    if ((i + 1) % total === activeIndex) return "left";
    if ((i - 1 + total) % total === activeIndex) return "right";
    return "hidden";
  };

  const cardVariantsLarge = {
    center: { x: 0, scale: 1, opacity: 1, zIndex: 20 },
    left: { x: -120, scale: 0.85, opacity: 0.5, zIndex: 10 },
    right: { x: 120, scale: 0.85, opacity: 0.5, zIndex: 10 },
    hidden: { x: 500, scale: 0.6, opacity: 0, zIndex: 0 },
  };
  const cardVariantsSmall = {
    center: { x: 0, scale: 1, opacity: 1, zIndex: 20 },
    left: { x: -60, scale: 0.85, opacity: 0.5, zIndex: 10 },
    right: { x: 60, scale: 0.85, opacity: 0.5, zIndex: 10 },
    hidden: { x: 500, scale: 0.6, opacity: 0, zIndex: 0 },
  };

  return (
    <div className="relative w-full lg:h-[150px] sm:h-[100px] h-[60px] lg:max-w-[420px] sm:max-w-[200px] max-w-[100px] mx-auto overflow-visible flex flex-col items-center justify-center  sm:gap-4 mb-6">
      <div
        className="w-full flex justify-start text-[6px] sm:text-[10px] lg:text-[16px]  rounded-2xl px-2 py-1"
        style={{
          background: "linear-gradient(to right, #0d266b 2%, transparent 70%)",
        }}
      >
        <div
          className="w-full font-extrabold italic "
          style={{
            background: "linear-gradient(to top, #E1A61E, #FFFFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ON GOING FIGHT
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        {nfts.map((nft, i) => {
          const position = getPosition(i);
          const isActive = position === "center";

          return (
            <motion.div
              key={nft.id}
              animate={windowSize.width < 640 ? cardVariantsSmall[position] : cardVariantsLarge[position]}
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute lg:w-[180px] w-[10px]  cursor-pointer"
              style={{ zIndex: windowSize.width < 640 ? cardVariantsSmall[position].zIndex : cardVariantsLarge[position].zIndex }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="relative w-full h-full">
                <div className="absolute lg:left-[30px] lg:top-[25px] sm:top-[25px] sm:left[25px] top-[20px] left-[20px] lg:w-[75px] lg:h-[75px] sm:w-[55px] sm:h-[55px] w-[35px] h-[35px] rounded-[6px] border border-yellow-300 shadow-lg bg-gradient-to-br from-[#FF447F]/40 to-[#FF447F]/60 z-10 ">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-contain rounded-2xl"
                    style={{
                      backgroundImage: `url(${shieldIcon})`,
                      backgroundSize: "120% 120%", // Scale icon down to 70%
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left top",
                    }}
                  ></div>
                </div>
                <div className="absolute lg:w-[75px] lg:h-[75px] sm:w-[55px] sm:h-[55px] w-[35px] h-[35px] rounded-[6px] border border-yellow-300 shadow-2xl bg-gradient-to-br from-cyan-700/40 to-teal-400/40 z-20">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-contain rounded-2xl"
                    style={{
                      backgroundImage: `url(${swordIcon})`,
                      backgroundSize: "120% 120%", // Scale icon down to 70%
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Overlay Effects */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/60 rounded-[6px] z-10 pointer-events-none" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="lg:mt-24 flex gap-2 z-30 absolute top-25 sm:top-40 lg:relative lg:top-0">
        {nfts.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`lg:w-[8px] lg:h-[8px] sm:w-[6px] sm:h-[6px] w-[4px] h-[4px] rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-[#ffffff]/80" : "bg-[#414141]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
