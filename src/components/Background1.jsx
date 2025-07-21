import { useEffect, useState } from "react";
import backgroundImage from "../assets/images/bg1.png";

const BackGround1 = ({ children }) => {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isLandscape = w < 1025;

      if (isLandscape) {
        setBgStyle({
          position: "fixed",
          top: 0,
          left: 0,
          width: `${h}px`,
          height: `${w}px`,
          transform: `rotate(90deg) translateY(-100%)`,
          transformOrigin: "top left",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          pointerEvents: "none", // so background doesn't block interaction
        });
      } else {
        setBgStyle({
          position: "fixed",
          top: 0,
          left: 0,
          width: `${w}px`,
          height: `${h}px`,
          transform: "none",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          pointerEvents: "none",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Layer */}
      <div style={bgStyle} />

      {/* Foreground Children */}
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default BackGround1;
