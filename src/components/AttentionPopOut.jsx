import React, { useEffect, useState } from "react";
import popout from "../assets/images/attention.png";
import Button from "./Button";
import bearBaka from "../assets/images/bearBaka.png";
import CancelButton from "./CancelButton";

const bears = Array(6).fill(null);

export default function AttentionPopOut({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

    const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
          }); 
        
          useEffect(() => {
            function handleResize() {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            }
            window.addEventListener("resize", handleResize);
        
            handleResize();
        
            return () => window.removeEventListener("resize", handleResize);
          }, []);

   const sizeMobile = (
    <div>
      <div
        className="absolute  top-1/2 -translate-y-[43%] left-6 right-0 h-[60vw] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-9 right-1/2 translate-x-[50%] text-[16px] text-white  flex  items-center  gap-28 justify-between">
          <span
            className="relative z-10 font-extrabold text-[16px]"
            style={{
              color: "white",
              WebkitTextStroke: ".4px black",
              textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
            }}
          >
            ATTENTION
          </span>
        </div>
        <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-6 ">
          <div className=" text-[12px] lg:text-[24px] xl:text-[28px] 2xl:text-3xl font-medium text-center w-[60%]">
            With conformation of this vote your Baka's will be stacked
            throughout the whole game.
          </div>
          <div className="flex justify-center items-center gap-8 mb-10">
            <CancelButton
              onClick={() => {
                onConfirm();
              }}
              color={"bg-green-500"}
               rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[8px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CONFIRM
                </span>
              }
            />
            <CancelButton
              onClick={() => {
                onClose();
              }}
              color={"bg-red-500"}
               rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[8px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CANCEL
                </span>
              }
            />
          </div>
        </div>
      </div>

     
    </div>
  );
   const sizeTab = (
    <div>
      <div
        className="absolute  top-1/2 -translate-y-[43%] left-6 right-0 h-[60vw] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-18 right-1/2 translate-x-[50%] text-[28px] text-white  flex  items-center  gap-28 justify-between">
          <span
            className="relative z-10 font-extrabold text-[32px]"
            style={{
              color: "white",
              WebkitTextStroke: ".4px black",
              textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
            }}
          >
            ATTENTION
          </span>
        </div>
        <div className=" absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-6 ">
          <div className=" text-[25px] font-medium text-center w-[60%]">
            With conformation of this vote your Baka's will be stacked
            throughout the whole game.
          </div>
          <div className="flex justify-center items-center gap-8 mb-10">
            <CancelButton
              onClick={() => {
                onConfirm();
              }}
              color={"bg-green-500"}
               rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[14px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CONFIRM
                </span>
              }
            />
            <CancelButton
              onClick={() => {
                onClose();
              }}
              color={"bg-red-500"}
               rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[14px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CANCEL
                </span>
              }
            />
          </div>
        </div>
      </div>

     
    </div>
  );
   const sizeDesktop = (
    <div>
         <div
        className="absolute top-32 left-6 right-10 h-[60vh] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-22 right-[44vw] text-[30px] text-white  flex  items-center  gap-28 justify-between">
          <span
            className="relative z-10 font-extrabold text-[28px]"
            style={{
              color: "white",
              WebkitTextStroke: ".4px black",
              textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
            }}
          >
            ATTENTION
          </span>
        </div>
        <div className=" absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-20 ">
          <div className=" md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-3xl font-medium text-center w-[60%]">
            With conformation of this vote your Baka's will be stacked
            throughout the whole game.
          </div>
          <div className="flex justify-center items-center gap-8 mb-10">
            <CancelButton
              onClick={() => {
                onConfirm();
              }}
              color={"bg-green-500"}
              rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[20px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CONFIRM
                </span>
              }
            />
            <CancelButton
              onClick={() => {
                onClose();
              }}
              color={"bg-red-500"}
              rounded={"!rounded-[10px]"}
              label={
                <span
                  className="relative z-10 font-extrabold text-[20px]"
                  style={{
                    color: "white",
                    WebkitTextStroke: ".4px black",
                    textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                  }}
                >
                  CANCEL
                </span>
              }
            />
          </div>
        </div>
      </div>

     
    </div>
  );


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
      {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          : sizeDesktop}
    </div>
  );
}
