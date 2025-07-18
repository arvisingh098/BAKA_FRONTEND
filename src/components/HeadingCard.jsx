import React from "react";

const HeadingCard = ({
  image,
  bgColor,
  height,
  width,
  imageSize,
  bgImage,
  outerShadow = false,
  heading,
  textSize,
  border, 
  rounded,
  noPadding=false,
  backgroundSize
}) => {
  return (
    <div
      className={`${border ? border : "p-[3px]"} ${rounded ? rounded : "!rounded-lg"} bg-gradient-to-r gradient-border`}
      style={{
        boxShadow: "4px 4px 10px rgba(0, 0, 0, .3)" ,
      }}
    >
      <div
        className={`${width ? width : "w-32"} ${rounded ? rounded : "!rounded-lg"} py-0.5 ${noPadding ? "": "pl-2"} text-white relative overflow-hidden ${
          bgColor ? bgColor : ""
        }`}
        style={{
          boxShadow:
            "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.5), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: backgroundSize ? backgroundSize : "300% 300%",
            backgroundPosition: "center",
            filter: "blur(.5px)",
          }}
        ></div>
        <div className={`relative z-10 ${textSize ? textSize : ""}`}>{heading}</div>
      </div>
    </div>
  );
};

export default HeadingCard;
