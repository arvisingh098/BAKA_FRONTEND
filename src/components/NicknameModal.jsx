import React, { useEffect, useState } from "react";
import user2 from "../assets/images/user2.png";
import UserCard from "./UserCard";
import grid from "../assets/images/grid.png";
import CountDiv from "./CountDiv";
import rank from "../assets/images/1st.png";
import HeadingCard from "./HeadingCard";
import Token from "./Token";
import Polygon from "./Polygon";
import UserDetailCard from "./UserDetailsCard";
import count from "../assets/images/count.png"

const NicknameModal = ({ isOpen, onClose, user, tokens, items, nfts }) => {
  if(!isOpen) return null

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


      const sizeSmall = <div
        className="relative rounded-xl shadow-lg w-[65vh] sm:w-[80vh] sm:h-[65vw]  h-[80vw] p-4 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, 
      #FFFFFF 0%, 
      #FEFCF8 11%, 
      #FEF5E7 26%, 
      #FDE9CB 100%)`,
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>
        <div className="flex h-full sm:py-2 sm:px-6">
          <div className="w-1/2  border-r  pl-2  border-white/40">
            <div className="flex items-center gap-6">
              <UserCard
                image={user2}
                bgColor={"bg-[#00563f]"}
                bgImage={grid}
                outerShadow
                height={"h-16 sm:h-28"}
                width={"w-16 sm:w-28"}
                imageSize={ windowSize?.width < 620 ? "48px 48px": "85px 85px"}
              />
              <div className="flex flex-col ">
                <div className="ml-auto flex items-center gap-2">
                  <CountDiv
                    count={"99999"}
                      width={"w-6 sm:w-11 "}

          height={"h-6 sm:h-11 "}
          countClass={" text-[10px] sm:text-[14px]"}
          rounded={"rounded-[6px]"}
          extraClasses={" !min-w-20 sm:!min-w-28 !py-[1px] sm:!py-[4px] "}
          
bgImageSize={ windowSize.width < 620 ? "16px 16px" :"25px 25px"}
                        backgroundPosition={ windowSize.width < 620 ? "5px 5px" :"10px 10px"}
                        image={count}

                  />
                  <div className="px-2 rounded-md text-xs">
                    <img
                      src={rank}
                      alt="1st"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[5px] sm:text-[12px] text-gray-500">123456009</p>
                  <h2 className="font-bold text-[8px] sm:text-[14px]">USER NICK NAME</h2>
                  <p className="text-[6px] sm:text-[10px] text-gray-600">Status Quo</p>
                </div>
              </div>
            </div>

            <div className="mt-1 sm:mt-5">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  image={grid}
                  bgColor={"bg-[#00563f]"}
                  heading={"Token"}
                  width={"w-20 sm:w-30 lg:w-56"}
                  textSize={"text-[12px] sm:text-[18px]"}
                />
                <div
                  className="flex justify-start gap-4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(32, 210, 201, 0.4) 30%, rgba(5, 142, 255, 0.4) 50%, rgba(32, 210, 201, 0.4) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  {tokens.map((token, idx) => {
                    return (
                      <div key={idx} className="text-center text-xs pt-[2px] pb-3 sm:pt-2 sm:pb-8 lg:pb-10 lg:pt-2">
                        <Token
                          image={token.image}
                          bgColor={token?.bgColor}
                          height={"h-4 sm:h-12 lg:h-12"}
                          width={"w-4 sm:w-12 lg:w-12"}
                          bgPosition={"center"}
                           bgSize={ windowSize?.width < 620 ? "22px 22px": "50px 50px"}
                          border={"p-[2px]"}
                        />
                        <div>
                          <p className="text-[8px] sm:text-[14px]">{token.name}</p>
                          <p className="text-[6px] sm:text-[12px]">{token.amount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-1 sm:mt-4 lg:mt-6">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  image={grid}
                  bgColor={"bg-[#00563f]"}
                  heading={"Item"}
                 width={"w-20 sm:w-30 lg:w-56"}
                  textSize={"text-[12px] sm:text-[18px]"}
                />
                <div
                  className="flex justify-start gap-2 pb-4 pt-[2px] sm:pt-3 sm:pb-10 lg:pb-10 lg:pt-2"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(32, 210, 201, 0.4) 30%, rgba(5, 142, 255, 0.4) 50%, rgba(32, 210, 201, 0.4) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  {tokens.map((token, idx) => {
                    return <Polygon width={"w-7 sm:w-15 lg:w-[75px]"} height={"h-6 sm:h-14 lg:h-16"} border={"inset-[1px] sm:inset-[3px] lg:inset-[6px]"} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" sm:py-4">
            <div className="w-fit px-4 py-3">
              <HeadingCard
                image={grid}
                bgColor={"bg-[#00563f]"}
                heading={"BAKA"}
                 width={"w-20 sm:w-30 lg:w-56"}
                  textSize={"text-[12px] sm:text-[18px]"}
              />
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-4 pr-2 pl-2 py-6 overflow-y-scroll h-full pb-40 custom-scrollbar2 rounded-2xl "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5, 217, 255, 0.1) 0%, rgba(5, 142, 255, 0.4) 20%, rgba(32, 210, 201, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              {nfts.map((nft, idx) => {
                return (
                  <UserDetailCard
                    title={`Baka Bears #${nft.id}`}
                    description={nft.description}
                    bgColor={"bg-[#083837]"}
                    imageBgColor={"bg-white"}
                    extraclasses={"flex flex-col justify-center items-center py-1 !px-2"}
                    height={"h-[60px] sm:h-20"}
                    width={"w-[60px] sm:w-20"}
                    textColor={"!text-[7px] sm:!text-[11px] text-white"}
                    imageSize={ windowSize?.width < 620 ? "57px 57px": "70px 70px"}
                    noWidth

                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      const sizeBig = <div
        className="relative rounded-xl shadow-lg w-[1080px] h-[600px] p-4 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, 
      #FFFFFF 0%, 
      #FEFCF8 11%, 
      #FEF5E7 26%, 
      #FDE9CB 100%)`,
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>
        <div className="flex h-full">
          <div className="w-1/2  border-r py-10 pl-6  border-white/40">
            <div className="flex items-center gap-6">
              <UserCard
                image={user2}
                bgColor={"bg-[#00563f]"}
                bgImage={grid}
                outerShadow
                height={"h-32"}
                width={"w-32"}
                imageSize={"110px 110px"}
                
              />
              <div className="flex flex-col gap-4">
                <div className="ml-auto flex items-center gap-2">
                  <CountDiv
                    count={"99999"}
                    height={"h-12"}
                    width={"w-12"}
                    extraClasses={"!py-1 !min-w-36"}
                    bgImageSize={ windowSize.width < 620 ? "8px 8px" :"30px 30px"}
                        backgroundPosition={ windowSize.width < 620 ? "2px 2px" :"10px 10px"}
                        image={count}
                  />
                  <div className="px-2 py-1 rounded-md text-xs">
                    <img
                      src={rank}
                      alt="1st"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">123456009</p>
                  <h2 className="font-bold text-xl">USER NICK NAME</h2>
                  <p className="text-sm text-gray-600">Status Quo</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  image={grid}
                  bgColor={"bg-[#00563f]"}
                  heading={"Token"}
                  width={"w-56"}
                />
                <div
                  className="flex justify-start gap-4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(32, 210, 201, 0.4) 30%, rgba(5, 142, 255, 0.4) 50%, rgba(32, 210, 201, 0.4) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  {tokens.map((token, idx) => {
                    return (
                      <div key={idx} className="text-center text-xs pb-10 pt-2">
                        <Token
                          image={token.image}
                          bgColor={token?.bgColor}
                          height={"h-12"}
                          width={"w-12"}
                          bgPosition={"center"}
                        />
                        <div>
                          <p>{token.name}</p>
                          <p>{token.amount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-col items-start gap-2 mb-2">
                <HeadingCard
                  image={grid}
                  bgColor={"bg-[#00563f]"}
                  heading={"Item"}
                  width={"w-56"}
                />
                <div
                  className="flex justify-start gap-2 pb-10 pt-2"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(32, 210, 201, 0.4) 30%, rgba(5, 142, 255, 0.4) 50%, rgba(32, 210, 201, 0.4) 70%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  {tokens.map((token, idx) => {
                    return <Polygon />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" py-8">
            <div className="w-fit px-4 py-3">
              <HeadingCard
                image={grid}
                bgColor={"bg-[#00563f]"}
                heading={"BAKA"}
                width={"w-56"}
              />
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 pr-12 pl-4 py-6 overflow-y-scroll h-full pb-40 custom-scrollbar2 rounded-2xl "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(5, 217, 255, 0.1) 0%, rgba(5, 142, 255, 0.4) 20%, rgba(32, 210, 201, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              {nfts.map((nft, idx) => {
                return (
                  <UserDetailCard
                    title={`Baka Bears #${nft.id}`}
                    description={nft.description}
                    bgColor={"bg-[#083837]"}
                    imageBgColor={"bg-white"}
                    extraclasses={"flex flex-col justify-center items-center py-3 !px-6"}
                    textColor={"px-1 text-white"}
                    
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
     
      {windowSize?.width < 1024
          ? sizeSmall
          : sizeBig}
    </div>
  );
};

export default NicknameModal;


