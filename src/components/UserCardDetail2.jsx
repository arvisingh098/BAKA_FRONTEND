import UserCard from "./UserCard";
import user from "../assets/images/user3.png"
import { Link } from "react-router-dom";
import UserCard2 from "./UserCard2";

const UserDetailCard2 = ({image, height, width, imageSize, title, description , bgColor, imageBgColor, cardWidth, noWidth, textColor, rounded, extraclasses, gradientHeight, gradientWidth, gradientBorder, onClick , to}) => {
  return <div className={` relative   ${rounded ? rounded : "rounded-3xl"} ${bgColor ? bgColor : "bg-black"} ${extraclasses ? extraclasses : "flex flex-col justify-center items-center py-3 !px-2"} `}  style={{
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" 
          
      }}>
        <Link to={to || "#"} >
    <UserCard2 image={image ? image : user} height={height} width={width} imageSize={imageSize} bgColor={imageBgColor} rounded={rounded} gradientHeight={gradientHeight} gradientWidth={gradientWidth} gradientBorder={gradientBorder} />
   <div className={`${ noWidth ? "" : "w-[140px]"} flex flex-col gap-1 pt-1"`}>
     <p className={`${textColor ? textColor : "text-white"} text-[12px] font-bold !text-left `}>{title}</p>
    <div className={`flex items-center ${textColor ? textColor : "text-white"} !pt-0 !text-left`}>{description}</div>
   </div>
   </Link>
  </div>;
};

export default UserDetailCard2;
