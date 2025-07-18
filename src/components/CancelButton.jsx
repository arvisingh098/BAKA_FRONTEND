
import grid from "../assets/images/grid.png";

const CancelButton = ({
  label,
  onClick,
  disabled = false,
  extraClasess,
  color,
  rounded,
  inset,
  labelClass,
  noInset
}) => {
  const isDisabled = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : color
    ? color
    : "bg-[#1a1a1a]";

  return (
    <div
      className={`flex justify-center items-center p-[1px] lg:p-[2px] bg-gradient-to-r from-yellow-50 via-yellow-300 to-yellow-500 ${
        rounded ? rounded : "rounded-full"
      }`}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative inline-flex items-center justify-center 
          px-6 py-1 whitespace-nowrap text-white overflow-hidden 
          cursor-pointer ${rounded ? rounded : "rounded-xl"} 
          ${isDisabled}
          ${extraClasess ? extraClasess : ""}
          ${
            noInset
              ? ""
              : `shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] 
          before:content-[''] before:absolute before:${
            inset ? inset : "inset-0"
          } before:${rounded ? rounded : "rounded-full"}
          before:border-[1px] before:border-white/80 
          before:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] 
          before:pointer-events-none`
          }
        `}
      >
        <div
          className={`absolute inset-0 pointer-events-none z-0 ${
            rounded ? rounded : "rounded-xl"
          } `}
          style={{
            backgroundImage: `url(${grid})`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 200%",
            opacity: 0.4,
          }}
        />
        <span className={`relative text-[10px] z-10 ${labelClass ? labelClass : ""} `}>{label}</span>
      </button>
    </div>
  );
};

export default CancelButton;
