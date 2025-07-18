import { useEffect, useState } from "react";

const StatusCard = ({ image, name, status, storyHeading, description }) => {

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

  const sizeMobile = <div
      className="flex items-center justify-start gap-2 rounded-[4px] px-3 py-2 min-w-50 relative h-[35px]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="p-[3px] !rounded-[6px] bg-gradient-to-r gradient-border absolute -left-2">
        <div
          className={`h-8 w-8  rounded-[4px]
                bg-center bg-no-repeat bg-contain`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "33px 33px",
          }}
        ></div>
      </div>

      <div className="flex justify-start items-center w-[30vh] pl-7 ">
        <div className="flex flex-col">
          <h1
            className="text-transparent bg-clip-text font-bold text-[8px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {name}
          </h1>
          <span className="text-[4px] font-medium">{status}</span>
        </div>
        <div className=" flex flex-col justify-start ml-6">
          <h1
            className="text-transparent bg-clip-text font-bold text-[8px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {storyHeading}
          </h1>
          <span className="text-[5px]  w-28">{description}</span>
        </div>
      </div>
    </div>

    const sizeTab = <div
      className="flex items-center justify-start gap-2 rounded-[4px] px-3 py-2 min-w-50 relative h-[50px] ml-12"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="p-[3px] !rounded-[10px] bg-gradient-to-r gradient-border absolute -left-2">
        <div
          className={`h-14 w-14  rounded-[4px]
                bg-center bg-no-repeat bg-contain`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "55px 55px",
          }}
        ></div>
      </div>

      <div className="flex justify-start items-center w-[30vh] pl-20 ">
        <div className="flex flex-col">
          <h1
            className="text-transparent bg-clip-text font-bold text-[12px] w-16 leading-3.5"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {name}
          </h1>
          <span className="text-[7px] font-medium">{status}</span>
        </div>
        <div className=" flex flex-col justify-start ml-6">
          <h1
            className="text-transparent bg-clip-text font-bold text-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {storyHeading}
          </h1>
          <span className="text-[7px]  w-40">{description}</span>
        </div>
      </div>
    </div>

    const sizeDesktop = <div
      className="flex items-center justify-end gap-2 rounded-xl px-3 py-2 min-w-50 relative h-[75px]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="p-[3px] rounded-xl bg-gradient-to-r gradient-border absolute -left-2">
        <div
          className={`h-20 w-20  rounded-xl
                bg-center bg-no-repeat bg-contain`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "83px 83px",
          }}
        ></div>
      </div>

      <div className="flex justify-start items-center w-[43vw] pl-24">
        <div>
          <h1
            className="text-transparent bg-clip-text font-bold text-[18px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {name}
          </h1>
          <span className="text-[12px] font-medium">{status}</span>
        </div>
        <div className="pl-24 flex flex-col justify-start">
          <h1
            className="text-transparent bg-clip-text font-bold text-[14px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {storyHeading}
          </h1>
          <span className="text-[8px]  w-44">{description}</span>
        </div>
      </div>
    </div>

const sizeBigDesktop = <div
      className="flex items-center justify-end gap-2 rounded-xl px-3 py-2 min-w-50 relative h-[75px]"
      style={{
        background: "linear-gradient(to bottom, white 10%, #8E8689 95%)",
      }}
    >
      <div className="p-[3px] rounded-xl bg-gradient-to-r gradient-border absolute -left-2">
        <div
          className={`h-20 w-20  rounded-xl
                bg-center bg-no-repeat bg-contain`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "83px 83px",
          }}
        ></div>
      </div>

      <div className="flex justify-start items-center w-[43vw] pl-24">
        <div>
          <h1
            className="text-transparent bg-clip-text font-bold text-[18px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {name}
          </h1>
          <span className="text-[12px] font-medium">{status}</span>
        </div>
        <div className="pl-24 flex flex-col justify-start">
          <h1
            className="text-transparent bg-clip-text font-bold text-[14px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #4483FF 31%, #294F99 86%)",
            }}
          >
            {storyHeading}
          </h1>
          <span className="text-[8px]  w-44">{description}</span>
        </div>
      </div>
    </div>



  return (
   <>
    {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          :windowSize?.width < 2080 ? sizeDesktop : sizeBigDesktop}
   </>
  );
};

export default StatusCard;

