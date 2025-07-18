const Token = ({image, bgColor, bgSize, height, width, border, bgPosition})=> {
    return (
        
         <div className={`${border ? border : "p-[6px]"} rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400`}>
          <div
            className={`${height ? height : "h-8"} ${width ? width : "w-8"} rounded-full ${
              bgColor ? bgColor : "bg-green-800"
            } 
                bg-center bg-no-repeat bg-contain`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: bgSize ? bgSize : "68px 68px",
              backgroundPosition: bgPosition ? bgPosition : "0px 0px",
            }}
          ></div>
        </div>
      
    )

}

export default Token