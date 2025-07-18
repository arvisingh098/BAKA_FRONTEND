import React, { useEffect, useState } from "react";
import episodePlay from "../assets/images/episodePlay.png";
import grid from "../assets/images/grid.png";

const EpisodeCard = () => {

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

  const sizeMobile = <div
      className="flex max-w-5xl mx-auto rounded-[20px]  shadow-xl  relative w-[45vh]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="w-1/2 p-2 h-19 px-4 flex flex-col justify-center rounded-l-[20px]">
        <h2
          className="text-transparent bg-clip-text font-extrabold text-[10px] leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
          }}
        >
          Last <br /> Episode
        </h2>
        <p className="text-[6px] leading-2 w-32 pt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rhoncus pharetra lorem, et semper nibh tristique a.
        </p>
      </div>
      <div className="w-[45vw] absolute right-0 -top-[2px]">
        <div className="custom-border !p-1 rounded-r-[20px] custom-clip relative z-0">
          <div
            className="bg-[#3967e6] h-18 rounded-r-[17px] custom-clip relative z-10 overflow-hidden"
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
                backgroundSize: "200% 200%",
                opacity: 0.3,
              }}
            />

            <img
              src={episodePlay}
              alt="Episode"
              className="relative z-10 object-contain w-full h-20"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1f1c4e] to-[#fc2872] flex items-center justify-center shadow-lg">
                <svg
                  className="w-20 h-20 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

const sizeDesktop = <div
      className="flex max-w-5xl mx-auto rounded-[20px]  shadow-xl  relative w-[45vw]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="w-1/2 p-8  flex flex-col justify-center rounded-l-[20px]">
        <h2
          className="text-transparent bg-clip-text font-extrabold text-[28px] leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
          }}
        >
          Last <br /> Episode
        </h2>
        <p className="text-sm leading-4 w-52 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rhoncus pharetra lorem, et semper nibh tristique a.
        </p>
      </div>
      <div className="w-[30vw] absolute right-0 -top-[10px]">
        <div className="custom-border rounded-r-[20px] custom-clip relative z-0">
          <div
            className="bg-[#3967e6] h-52 rounded-r-[17px] custom-clip relative z-10 overflow-hidden"
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
                backgroundSize: "200% 200%",
                opacity: 0.3,
              }}
            />

            <img
              src={episodePlay}
              alt="Episode"
              className="relative z-10 object-contain w-full h-56"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1f1c4e] to-[#fc2872] flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    const sizeTab = <div
      className="flex max-w-5xl mx-auto mt-10 ml-10 rounded-[20px]  shadow-xl  relative w-[50vh]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="w-1/2 p-8 h-40 flex flex-col justify-center rounded-l-[20px]">
        <h2
          className="text-transparent bg-clip-text font-extrabold text-[24px] leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
          }}
        >
          Last <br /> Episode
        </h2>
        <p className="text-[12px] leading-4 w-52 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rhoncus pharetra lorem, et semper nibh tristique a.
        </p>
      </div>
      <div className="w-[30vh] absolute right-0 -top-[10px]">
        <div className="custom-border p-2 rounded-r-[20px] custom-clip relative z-0">
          <div
            className="bg-[#3967e6] h-41 rounded-r-[17px] custom-clip relative z-10 overflow-hidden"
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
                backgroundSize: "200% 200%",
                opacity: 0.3,
              }}
            />

            <img
              src={episodePlay}
              alt="Episode"
              className="relative z-10 object-contain w-full h-42"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1f1c4e] to-[#fc2872] flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    const sizeBigDesktop = <div
      className="flex max-w-5xl mx-auto rounded-[20px]  shadow-xl  relative w-[45vw]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="w-1/2 p-8  flex flex-col justify-center rounded-l-[20px]">
        <h2
          className="text-transparent bg-clip-text font-extrabold text-[28px] leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
          }}
        >
          Last <br /> Episode
        </h2>
        <p className="text-sm leading-4 w-52 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rhoncus pharetra lorem, et semper nibh tristique a.
        </p>
      </div>
      <div className="w-[30vw] absolute right-0 -top-[10px]">
        <div className="custom-border rounded-r-[20px] custom-clip relative z-0">
          <div
            className="bg-[#3967e6] h-52 rounded-r-[17px] custom-clip relative z-10 overflow-hidden"
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
                backgroundSize: "200% 200%",
                opacity: 0.3,
              }}
            />

            <img
              src={episodePlay}
              alt="Episode"
              className="relative z-10 object-contain w-full h-56"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1f1c4e] to-[#fc2872] flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  return (
    <>
    {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          :windowSize?.width < 2080 ? sizeDesktop : sizeBigDesktop}</>
  );
};

export default EpisodeCard;
