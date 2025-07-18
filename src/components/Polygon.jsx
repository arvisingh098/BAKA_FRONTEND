import grid from "../assets/images/grid.png"

const Polygon = ({width, height, heading, bgColor, noBg=false, border}) => {
  return (
    <div className={`relative ${width ? width : "w-[75px]"} ${height ? height : "h-16"}`}>
 
      <div className="absolute inset-0  bg-gradient-to-r from-yellow-50 to-yellow-400 polygon-hexagon"></div>

      <div className={`absolute ${border ? border : "inset-[6px]"} ${bgColor ? bgColor : "bg-[#00563f]"} polygon-hexagon text-white flex items-center justify-center`}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: noBg ? null :  `url(${grid})`,
            backgroundSize: "20% 20%",
            backgroundPosition: "center",
            filter: "blur(.5px)",
             boxShadow:
            "inset 4px 0px 4px 2px rgba(0, 0, 0, 0.5), inset 0px 4px 4px -2px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div className="relative z-10">{heading}</div>
      </div>
    </div>
  );
};

export default Polygon;
