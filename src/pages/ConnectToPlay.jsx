import { useEffect, useState } from "react";
import character from "../assets/images/character.png";
import BackGround1 from "../components/Background1";
import logo from "../assets/images/logo.png";
import coin from "../assets/images/coin.png";
import { Link } from "react-router-dom";
export default function ConnectToPlay() {
  const [isPortrait, setIsPortrait] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight >= window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const characterClass =
    windowSize?.width < 1025
      ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100vw] w-[100vh]"
      : "bottom-12 left-0 right-0 h-[85vh]";

  const test = (
    <>
      <div className="absolute bottom-22 left-0 w-full h-[500px] z-10">
        <div className=" connectToPlay inset-0  absolute bottom-3 left-0  w-[110vw] bg-pink-500/50 backdrop-blur-xs"></div>
        <div className="absolute -left-2 inset-[3px] bg-[#08053C]/60  connectToPlay text-white flex items-center justify-center w-[110vw] overflow-hidden border-b-8 backdrop-blur-xs  border-pink-500/50"></div>
        <Link
          to={"/connect-wallet"}
          className="absolute bottom-10 right-[45vw] text-white text-[28px] font-bold uppercase z-50 pointer-events-auto"
        >
          Connect To Play
        </Link>
      </div>
      <div
        className="absolute bottom-32 left-6 right-0 h-[28vh] bg-contain bg-bottom bg-no-repeat z-20 pointer-events-none"
        style={{ backgroundImage: `url(${logo})` }}
      />
    </>
  );

  const testmobile = (
    <>
      <div className=" lg:rotate-0 rotate-[90deg] absolute left-4 top-0 w-full h-[350px]  z-10 cursor-pointer ">
        <div className=" connectToPlay inset-0  absolute bottom-3 left-0  w-[110vh] bg-pink-500/50 backdrop-blur-xs"></div>
        <div className="absolute -left-2 inset-[3px] bg-[#08053C]/60  connectToPlay text-white flex items-center justify-center w-[110vh] overflow-hidden border-b-8 backdrop-blur-xs  border-pink-500/50"></div>
        <Link
          className="absolute bottom-10 left-[45vh] text-white text-[14px] font-bold uppercase !cursor-pointer w-64 z-50"
          to={"/connect-wallet"}
        >
          Connect To Play
        </Link>
      </div>
      <div
        className="lg:rotate-0 rotate-[90deg] absolute bottom-1/2 translate-y-[65%] -left-24 right-0 h-[35vw] bg-contain bg-bottom bg-no-repeat z-20"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </>
  );

  const testTab = (
    <>
      <div className={`${windowSize?.width < 1025 ? "rotate-[90deg]" : "rotate-0"} absolute -left-22 top-0 w-full h-[450px]  z-10 cursor-pointer `}>
        <div className=" connectToPlay inset-0  absolute bottom-3 left-0  w-[120vh] bg-pink-500/50 backdrop-blur-xs"></div>
        <div className="absolute -left-2 inset-[3px] bg-[#08053C]/60  connectToPlay text-white flex items-center justify-center w-[120vh] overflow-hidden border-b-8 backdrop-blur-xs  border-pink-500/50"></div>
        <Link
          className="absolute bottom-12 left-[60vh] text-white text-[16px] font-bold uppercase !cursor-pointer w-64 z-50"
          to={"/connect-wallet"}
        >
          Connect To Play
        </Link>
      </div>
      <div
        className={`${windowSize?.width < 1025 ? "rotate-[90deg]" : "rotate-0"} absolute top-1/2 -translate-y-[40%] -left-1/2 translate-x-[30px] z-20 right-0 h-[28vw] bg-contain bg-bottom bg-no-repeat `}
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </>
  );

  return (
    <BackGround1>
      <div className="relative min-h-screen overflow-hidden">
        <div
          className={`${windowSize?.width < 1025 ? "rotate-[90deg]" : "rotate-0"} absolute  bg-contain bg-bottom bg-no-repeat ${characterClass} `}
          style={{ backgroundImage: `url(${character})` }}
        ></div>
        {windowSize?.width < 640
          ? testmobile
          : windowSize?.width < 1025
          ? testTab
          : test}
        <>
          {!isPortrait ? (
            <div
              className="fixed top-0 left-0 w-screen h-screen z-0"
              style={{
                backgroundImage: `url(${coin})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 0 left 50%",
                backgroundSize: "120% 110%",
              }}
            ></div>
          ) : (
            <div
              className="fixed top-0 left-0 z-0"
              style={{
                width: `${window.innerHeight}px`,
                height: `${window.innerWidth}px`,
                transform: `rotate(90deg) translateY(-100%)`,
                transformOrigin: "top left",
                backgroundImage: `url(${coin})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 0 left 50%",
                backgroundSize: "120% 110%",
              }}
            ></div>
          )}
        </>
      </div>
    </BackGround1>
  );
}

