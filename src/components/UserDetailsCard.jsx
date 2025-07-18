import UserCard from "./UserCard";
import user from "../assets/images/user1.png"
import { Link } from "react-router-dom";

const UserDetailCard = ({image, height, width, imageSize, title, description , bgColor, imageBgColor, cardWidth, noWidth, textColor, rounded, extraclasses, gradientHeight, gradientWidth, gradientBorder, onClick , to, ableClick}) => {
  return <div className={` relative   ${rounded ? rounded : "rounded-3xl"} ${bgColor ? bgColor : "bg-black"} ${extraclasses ? extraclasses : "flex flex-col justify-center items-center py-3 !px-3"} `}  style={{
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" 
          
      }}>
        { ableClick && <div className=" bg-transparent w-full h-full  z-80 absolute top-0 cursor-pointer" onClick={()=>{onClick(true)}}></div>}
        <Link to={to || "#"} >
    <UserCard image={image ? image : user} height={height} width={width} imageSize={imageSize} bgColor={imageBgColor} rounded={rounded} gradientHeight={gradientHeight} gradientWidth={gradientWidth} gradientBorder={gradientBorder} />
   <div className={`${ noWidth ? "" : "w-[140px]"} flex flex-col lg:gap-1 pt-1"`}>
     <p className={`${textColor ? textColor : "text-white"} text-[12px] font-bold !text-left `}>{title}</p>
    <div className={`flex items-center ${textColor ? textColor : "text-white"} !pt-0 !text-left`}>{description}</div>
   </div>
   </Link>
  </div>;
};

export default UserDetailCard;
