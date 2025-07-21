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

  const sizeMobile = (
    <div
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
              <div className="w-6 h-6 rounded-full bg-black/60 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 45 64"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1149_34929)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9893 7.67829C11.9895 7.67838 11.9887 7.68059 11.9865 7.68463L11.9893 7.67829ZM11.9695 8.7224V46.7105L39.7492 27.8131C39.7543 27.7854 39.7576 27.7525 39.7576 27.7164C39.7576 27.6804 39.7543 27.6475 39.7492 27.6198L11.9695 8.7224ZM39.8765 27.7265L39.8754 27.7273L39.8765 27.7265ZM11.9893 47.7546C11.9892 47.7547 11.988 47.7526 11.9864 47.7481L11.9893 47.7546ZM7.40966 1.27231C9.59885 -0.194032 12.5896 -0.419805 15.1192 1.30098L44.36 21.1923C46.7303 22.8047 47.6971 25.4292 47.6971 27.7164C47.6971 30.0037 46.7303 32.6282 44.36 34.2406L15.1192 54.1319C12.5896 55.8527 9.59885 55.6269 7.40966 54.1606C5.29482 52.744 4.03003 50.2931 4.03003 47.6077V7.82516C4.03003 5.13982 5.29482 2.68884 7.40966 1.27231Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1149_34929"
                      x="0.0300293"
                      y="0.090332"
                      width="51.667"
                      height="63.2524"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1149_34929"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1149_34929"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sizeDesktop = (
    <div
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
              <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="24"
                  viewBox="0 0 45 64"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1149_34929)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9893 7.67829C11.9895 7.67838 11.9887 7.68059 11.9865 7.68463L11.9893 7.67829ZM11.9695 8.7224V46.7105L39.7492 27.8131C39.7543 27.7854 39.7576 27.7525 39.7576 27.7164C39.7576 27.6804 39.7543 27.6475 39.7492 27.6198L11.9695 8.7224ZM39.8765 27.7265L39.8754 27.7273L39.8765 27.7265ZM11.9893 47.7546C11.9892 47.7547 11.988 47.7526 11.9864 47.7481L11.9893 47.7546ZM7.40966 1.27231C9.59885 -0.194032 12.5896 -0.419805 15.1192 1.30098L44.36 21.1923C46.7303 22.8047 47.6971 25.4292 47.6971 27.7164C47.6971 30.0037 46.7303 32.6282 44.36 34.2406L15.1192 54.1319C12.5896 55.8527 9.59885 55.6269 7.40966 54.1606C5.29482 52.744 4.03003 50.2931 4.03003 47.6077V7.82516C4.03003 5.13982 5.29482 2.68884 7.40966 1.27231Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1149_34929"
                      x="0.0300293"
                      y="0.090332"
                      width="51.667"
                      height="63.2524"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1149_34929"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1149_34929"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sizeTab = (
    <div
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
              <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="24"
                  viewBox="0 0 45 64"
                  fill="none"
                >
                  <g filter="url(#filter0_d_1149_34929)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9893 7.67829C11.9895 7.67838 11.9887 7.68059 11.9865 7.68463L11.9893 7.67829ZM11.9695 8.7224V46.7105L39.7492 27.8131C39.7543 27.7854 39.7576 27.7525 39.7576 27.7164C39.7576 27.6804 39.7543 27.6475 39.7492 27.6198L11.9695 8.7224ZM39.8765 27.7265L39.8754 27.7273L39.8765 27.7265ZM11.9893 47.7546C11.9892 47.7547 11.988 47.7526 11.9864 47.7481L11.9893 47.7546ZM7.40966 1.27231C9.59885 -0.194032 12.5896 -0.419805 15.1192 1.30098L44.36 21.1923C46.7303 22.8047 47.6971 25.4292 47.6971 27.7164C47.6971 30.0037 46.7303 32.6282 44.36 34.2406L15.1192 54.1319C12.5896 55.8527 9.59885 55.6269 7.40966 54.1606C5.29482 52.744 4.03003 50.2931 4.03003 47.6077V7.82516C4.03003 5.13982 5.29482 2.68884 7.40966 1.27231Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1149_34929"
                      x="0.0300293"
                      y="0.090332"
                      width="51.667"
                      height="63.2524"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1149_34929"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1149_34929"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sizeBigDesktop = (
    <div
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
  );

  return (
    <>
      {windowSize?.width < 640
        ? sizeMobile
        : windowSize?.width < 1024
        ? sizeTab
        : windowSize?.width < 2080
        ? sizeDesktop
        : sizeBigDesktop}
    </>
  );
};

export default EpisodeCard;
