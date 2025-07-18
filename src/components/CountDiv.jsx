const CountDiv = ({ image, count, backgroundPosition, bgColor, width, height, bgImageSize , extraClasses, rounded, countClass, border, onClick }) => {
  return (
    <div className={` ${border ? border : "p-[3px]"} ${rounded ? rounded : "rounded-xl"} bg-gradient-to-r from-yellow-50 to-yellow-400`}>
      <div className={`flex items-center justify-end gap-2 bg-blue-900 ${rounded ? rounded : "rounded-xl"} px-3 py-2 min-w-50 relative ${extraClasses}`} onClick={()=>{
        onClick ? onClick() : ()=>{}
      }}>
        <div className={`${border ? border : "p-[3px]"} rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400 absolute -left-2`}>
          <div
            className={`${width ? width :"w-16"} ${ height ?  height :" h-16"} rounded-full ${
              bgColor ? bgColor : "bg-green-800"
            } 
                bg-center bg-no-repeat bg-contain`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: bgImageSize ? bgImageSize : "68px 68px",
              backgroundPosition: backgroundPosition
                ? backgroundPosition
                : "0px 0px",
            }}
          ></div>
        </div>

        <span className={`text-white font-medium ${countClass ? countClass : ""}`}>{count}</span>
      </div>
    </div>
  );
};

export default CountDiv;
