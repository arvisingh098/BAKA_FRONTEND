import { useEffect, useState } from "react";
import backgroundImage from "../assets/images/bg2.png";

const BackGround2 = ({ children }) => {
  const [bgStyle, setBgStyle] = useState({});
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isLandscape = w < 1025;

      if (isLandscape) {
        // Rotate full layout
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
          pointerEvents: "none",
        });

        setContainerStyle({
          position: "fixed",
          top: 0,
          left: 0,
          width: `${h}px`,
          height: `${w}px`,
          transform: `rotate(90deg) translateY(-100%)`,
          transformOrigin: "top left",
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

        setContainerStyle({
          position: "fixed",
          top: 0,
          left: 0,
          width: `${w}px`,
          height: `${h}px`,
          transform: "none",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background */}
      <div style={bgStyle} />

      {/* Foreground */}
      <div style={containerStyle} className="overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BackGround2;
