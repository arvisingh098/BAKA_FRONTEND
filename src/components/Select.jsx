import React, { useState } from "react";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Available Token");

  const options = ["Token 1", "Token 2"];

  return (
    <div className="relative  origin-center lg:w-[200px] h-2 sm:h-3 lg:h-5 lg:ml-16 rounded-full overflow-visible shadow-md text-[3px] sm:text-[6px] lg:text-[10px] font-bold lg:my-1 z-50">
   
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full sm:pl-4 sm:pr-8 pl-1 text-white bg-gradient-to-b from-[#1275db] to-[#005bbb] border-[#fff8dc] border sm:border-2 rounded-full font-bold italic flex items-center justify-between cursor-pointer"
      >
        {selected}
        <div
          className="pointer-events-none rounded-r-xl absolute right-0 top-0 h-full sm:w-[20px] w-2 flex items-center justify-center"
          style={{
            background: "linear-gradient(to bottom, #fff8dc, #d1a955)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="2"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

  
      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-full bg-black text-white rounded-md sm:border-2 border-1 border-white shadow-lg z-50 text-[4px] sm:text-[10px]">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="sm:px-3 sm:py-1 px-1 py-[2px] hover:bg-white hover:text-black cursor-pointer"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
