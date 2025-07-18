import React from "react";

const UserCard2 = ({
  image,
  bgColor,
  height,
  width,
  imageSize,
  bgImage,
  outerShadow = false, 
  rounded,
  gradientHeight,
  gradientWidth,
  gradientBorder
}) => {
  return (
    <div
      className={`${gradientBorder ? gradientBorder : "p-[3px]"} ${rounded ? rounded : "rounded-xl"} bg-gradient-to-r ${gradientWidth ? gradientWidth : ""} ${gradientHeight ? gradientHeight : ""} bg-gray-400/70`}
      style={{
        boxShadow: outerShadow
          ? "4px 4px 10px rgba(0, 0, 0, 1)" 
          : "none",
      }}
    >
      <div
        className={`${height ? height : "h-[140px]"} ${width ? width : "w-[140px]"} ${rounded ? rounded : "rounded-xl"} ${
          bgColor ? bgColor : ""
        } bg-no-repeat bg-contain relative overflow-hidden`}
        style={{
          backgroundImage: bgImage
            ? `url(${image}), url(${bgImage})`
            : `url(${image})`,
          backgroundSize: bgImage
            ? `${imageSize || "100px 100px"}, 600% 200%`
            : imageSize || "130px 130px",
          backgroundPosition: bgImage
    ? "center calc(100% + 2px), center"
    : "center calc(100% + 2px)",
          backgroundRepeat: bgImage ? "no-repeat, no-repeat" : "no-repeat",
          boxShadow:
            "inset 4px 0px 4px -2px rgba(0, 0, 0, 0.5), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default UserCard2;
