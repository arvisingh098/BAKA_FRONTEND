import { useEffect, useState } from "react";
import backgroundImage from "../assets/images/bg1.png";
import coin from "../assets/images/coin.png";
import BackGround1 from "./Background1";

const BackGroundCoins = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight >= window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <>
      <BackGround1>
        <div className="backdrop-blur-sm bg-black/40 min-h-screen flex items-center justify-center absolute bottom-0 left-0 right-0 top-0 z-50">
          {children}
        </div>
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
      </BackGround1>
    </>
  );
};

export default BackGroundCoins;
