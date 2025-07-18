import { Link } from "react-router-dom";
import grid from "../assets/images/grid.png";

const Button = ({
  label,
  onClick,
  disabled = false,
  extraClasess,
  color,
  rounded,
  inset,
  labelClass,
  link = false,
  to,
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center px-6 py-2
    ${rounded ? rounded : "rounded-full"}
    text-white font-semibold overflow-hidden
    ${disabled 
      ? "bg-gray-400 cursor-not-allowed" 
      : color 
        ? color 
        : "bg-gradient-to-b from-orange-300 to-orange-500 hover:from-orange-500 hover:to-orange-600 cursor-pointer"}
    border-4 border-white/80
    shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
    before:content-[''] before:absolute
    before:${inset ? inset : "inset-0"}
    before:${rounded ? rounded : "rounded-full"}
    before:border-[1px] before:border-white/80
    before:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]
    before:pointer-events-none
    ${extraClasess ? extraClasess : ""}
  `;

  const backgroundOverlay = (
    <div
      className="absolute inset-0 rounded-full pointer-events-none z-0"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "400% 200%",
        opacity: 0.3,
      }}
    />
  );

  const labelSpan = (
    <span className={`relative z-10 whitespace-nowrap text-center ${labelClass}`}>
      {label}
    </span>
  );

  return link ? (
    <Link
      to={to}
      onClick={onClick}
      className={baseStyles}
      aria-disabled={disabled}
    >
      {backgroundOverlay}
      {labelSpan}
    </Link>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {backgroundOverlay}
      {labelSpan}
    </button>
  );
};

export default Button;
