import React, { useEffect, useState } from "react";
import popout from "../assets/images/popout.png";
import Button from "./Button";
import bearBaka from "../assets/images/bearBaka.png";

const bears = Array(6).fill(null);

export default function PopOutScreen() {
  const [selected, setSelected] = useState(0);
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
        className="absolute lg:rotate-0 rotate-[90deg] top-1/2 -translate-y-[43%] left-6 right-0 h-[60vw] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-7  left-1/2 -translate-x-[42%] text-[30px] text-white  flex  items-center  gap-4 justify-between">
          <Button
            label={"Back"}
            color={"bg-green-500"}
            extraClasess={"text-[8px] !px-[8px] !py-[2px] mt-1"}
          />
          <span
            className="relative z-10 w-64 font-extrabold text-[14px] ml-8"
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
            Your Nickname
          </span>
        </div>
        <div className=" absolute left-1/2 top-18 -translate-x-[50%] flex flex-col items-center justify-center ">
          <div className="w-10 h-10 bg-[#316BE3] flex items-end justify-center rounded">
            <div
              className="w-7 h-7 rounded  bg-cover"
              style={{ backgroundImage: `url('${bearBaka}')` }}
            />
          </div>

          <div className="flex gap-2 mt-6">
            {bears.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-6 h-6 flex items-end justify-center cursor-pointer transition-all duration-200
              ${
                selected === index
                  ? "bg-yellow-500 border-2 border-black"
                  : "bg-yellow-400"
              } rounded`}
              >
                <div
                  className="w-4 h-4 rounded  bg-cover"
                  style={{ backgroundImage: `url('${bearBaka}')` }}
                />
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] text-gray-800 font-medium">
            Choose Your Baka Bear
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:rotate-0 rotate-[90deg]">
        <Button
          rounded={"!rounded-[20px]"}
          link
          to={"/landing"}
          extraClasess={
            "px-6 !absolute top-24 drop-shadow-[0_0_12px_rgba(253,224,71,0.95)] "
          }
          label={
            <span
              className="relative z-10 text-[16px]"
              style={{
                color: "white",
                WebkitTextStroke: ".2px black",
                textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
              }}
            >
              Lets Play
            </span>
          }
        />
      </div>
    </div>
  );

  const sizeTab =  <div>
      <div
        className="absolute lg:rotate-0 rotate-[90deg] top-1/2 -translate-y-[43%] left-6 right-0 h-[60vw] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-16 left-1/2 -translate-x-[70%] text-[30px] text-white  flex  items-center  gap-16 justify-between">
          <Button
            label={"Back"}
            color={"bg-green-500"}
            extraClasess={"text-[18px] !px-[8px] !py-[2px] mt-1"}
          />
          <span
            className="relative z-10 w-64 font-extrabold text-[28px] ml-10"
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
            Your Nickname
          </span>
        </div>
        <div className=" absolute left-1/2 top-40 -translate-x-[50%] flex flex-col items-center justify-center ">
          <div className="w-24 h-24 bg-[#316BE3] flex items-end justify-center rounded">
            <div
              className="w-20 h-20 rounded  bg-cover"
              style={{ backgroundImage: `url('${bearBaka}')` }}
            />
          </div>

          <div className="flex gap-2 mt-6">
            {bears.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-16 h-16 flex items-end justify-center cursor-pointer transition-all duration-200
              ${
                selected === index
                  ? "bg-yellow-500 border-2 border-black"
                  : "bg-yellow-400"
              } rounded`}
              >
                <div
                  className="w-10 h-10 rounded  bg-cover"
                  style={{ backgroundImage: `url('${bearBaka}')` }}
                />
              </div>
            ))}
          </div>

          <p className="mt-4 text-[24px] text-gray-800 font-medium">
            Choose Your Baka Bear
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:rotate-0 rotate-[90deg]">
        <Button
          rounded={"!rounded-[20px]"}
          link
          to={"/landing"}
          extraClasess={
            "px-6 !absolute top-56 drop-shadow-[0_0_12px_rgba(253,224,71,0.95)] "
          }
          label={
            <span
              className="relative z-10 text-[28px]"
              style={{
                color: "white",
                WebkitTextStroke: ".2px black",
                textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
              }}
            >
              Lets Play
            </span>
          }
        />
      </div>
    </div>

    const sizeDesktop = <div>
      <div
        className="absolute top-32 left-6 right-0 h-[60vh] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-20 right-[45vw] text-[30px] text-white  flex  items-center  gap-28 justify-between">
          <Button
            label={"Back"}
            color={"bg-green-500"}
            extraClasess={"text-[16px]"}
          />
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
            Your Nickname
          </span>
        </div>
        <div className=" absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center ">
          <div className="w-48 h-48 bg-[#316BE3] flex items-end justify-center rounded">
            <div
    className="w-40 h-40 rounded  bg-cover"
    style={{ backgroundImage: `url('${bearBaka}')` }}
  />
          </div>

          <div className="flex gap-2 mt-6">
            {bears.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-14 h-14 flex items-end justify-center cursor-pointer transition-all duration-200
              ${
                selected === index
                  ? "bg-yellow-500 border-2 border-black"
                  : "bg-yellow-400"
              } rounded`}
              >
                <div
    className="w-10 h-10 rounded  bg-cover"
    style={{ backgroundImage: `url('${bearBaka}')` }}
  />
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-800 font-medium">
            Choose Your Baka Bear
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          rounded={"!rounded-[20px]"}
          link
          to={"/landing"}
          extraClasess={
            "px-16 !absolute !bottom-40 drop-shadow-[0_0_12px_rgba(253,224,71,0.95)]"
          }
          label={
            <span
              className="relative z-10 text-[28px]"
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
              Lets Play
            </span>
          }
        />
      </div>
    </div>

    const sizeBigDesktop = <div>
      <div
        className="absolute top-32 left-6 right-0 h-[60vh] bg-contain bg-bottom bg-no-repeat "
        style={{ backgroundImage: `url(${popout})` }}
      >
        <div className=" absolute top-26 right-[45vw] text-[30px] text-white  flex  items-center  gap-40 justify-between">
          <Button
            label={"Back"}
            color={"bg-green-500"}
            extraClasess={"text-[24px]"}
          />
          <span
            className="relative z-10 font-extrabold text-[42px]"
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
            Your Nickname
          </span>
        </div>
        <div className=" absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center ">
          <div className="w-50 h-50 bg-[#316BE3] flex items-end justify-center rounded">
            <div
    className="w-44 h-44 rounded  bg-cover"
    style={{ backgroundImage: `url('${bearBaka}')` }}
  />
          </div>

          <div className="flex gap-2 mt-6">
            {bears.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-22 h-22 flex items-end justify-center cursor-pointer transition-all duration-200
              ${
                selected === index
                  ? "bg-yellow-500 border-2 border-black"
                  : "bg-yellow-400"
              } rounded`}
              >
                <div
    className="w-18 h-18 rounded  bg-cover"
    style={{ backgroundImage: `url('${bearBaka}')` }}
  />
              </div>
            ))}
          </div>

          <p className="mt-4 text-[28px] text-gray-800 font-medium">
            Choose Your Baka Bear
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button
          rounded={"!rounded-[20px]"}
          link
          to={"/landing"}
          extraClasess={
            "px-16 !absolute !bottom-40 drop-shadow-[0_0_12px_rgba(253,224,71,0.95)]"
          }
          label={
            <span
              className="relative z-10 text-[38px]"
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
              Lets Play
            </span>
          }
        />
      </div>
    </div>

  return (
    <> {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          :windowSize?.width < 2080 ? sizeDesktop : sizeBigDesktop}</>
  );
}
