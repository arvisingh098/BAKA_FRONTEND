import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

  <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>

  <div className="relative z-10 lg:w-full w-[60vw] max-w-[60vw] lg:max-w-md p-[6px] lg:!rounded-[50px] !rounded-[30px] gradient-border">
  
    <div className="w-full h-[75vw] lg:h-full lg:!rounded-[50px] !rounded-[30px] bg-white relative">
      <button
        className="absolute sm:-top-12 -top-8 right-0 bg-red-500 sm:py-[3px] py-[1px] sm:px-[10px] px-[5px] rounded-full text-white text-[10px] sm:text-[16px]  "
        onClick={onClose}
      >
        &times;
      </button>
      {children}
    </div>
  </div>
</div>

  );
}

export default Modal
