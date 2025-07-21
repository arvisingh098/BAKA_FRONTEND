import Header from "../components/Header";
import BackGround2 from "../components/Background2";
import phase from "../assets/images/phase.png";
import StatusCard from "../components/StatusCard";
import episode1 from "../assets/images/episode1.png";
import episode2 from "../assets/images/episode2.png";
import circle from "../assets/images/circleImage.png";
import EpisodeCard from "../components/EpisodeCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PhaseComponent from "../components/PhaseComponent";

function LayoutContent() {

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

  const sizeMobile = <>
      <div className=" flex justify-start ml-16 md:ml-48  flex-row">
        <PhaseComponent />

        <div className="flex flex-col gap-4 mt-0 ml-10 md:ml-4">
          <EpisodeCard />
          <div className="relative flex flex-col gap-1.5">
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={"heheheh"}

            />
            <StatusCard
              image={episode2}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
              }
            />
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={""}
            />
            <div className="p-[3px] !rounded-full gradient-border absolute -top-1 -right-10">
              <div
                className={`h-[117px] w-[117px] rounded-full bg-center bg-no-repeat bg-contain`}
                style={{
                  backgroundImage: `url(${circle})`,
                  backgroundSize: "150px 150px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <marquee className="mt-6 bg-blue-950 py-2 text-yellow-300 text-[10px] text-center whitespace-nowrap">
        <div className="font-medium tracking-widest space-x-6">
          ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!! BAKA BAKA BAKA
          !!!
        </div>
      </marquee>
    </>

    const sizeTab = <>
      <div className=" flex justify-start ml-30 pt-16 flex-row">
       <PhaseComponent />

        <div className="flex flex-col gap-4 mt-0 ml-10 md:ml-4">
          <EpisodeCard />
          <div className="relative flex flex-col gap-4 mt-8">
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={"heheheh"}

            />
            <StatusCard
              image={episode2}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
              }
            />
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={""}
            />
            <div className="p-[3px] !rounded-full gradient-border absolute -top-4 -right-12">
              <div
                className={`h-[210px] w-[210px] rounded-full bg-center bg-no-repeat bg-contain`}
                style={{
                  backgroundImage: `url(${circle})`,
                  backgroundSize: "210px 210px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <marquee className="mt-8 bg-blue-950 py-2 text-yellow-300 text-[16px] text-center whitespace-nowrap">
        <div className="font-medium tracking-widest space-x-6">
          ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!! BAKA BAKA BAKA
          !!!
        </div>
      </marquee>
    </>

   const sizeDesktop = <>
    <div className="mt-16 flex justify-start ml-52">
          <PhaseComponent />
          <div className="flex flex-col gap-12 ml-20">
            <EpisodeCard />
            <div className="relative flex flex-col gap-4">
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={"heheheh"}
            />
            <StatusCard
              image={episode2}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
              }
            />
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={""}
            />
            <div className="p-[3px] !rounded-full gradient-border absolute -top-4 -right-20">
              <div
                className={`h-[300px] w-[300px] rounded-full bg-center bg-no-repeat bg-contain`}
                style={{
                  backgroundImage: `url(${circle})`,
                  backgroundSize: "300px 300px",
                }}
              ></div>
            </div>
            </div>
          </div>
        </div>
        <marquee className="mt-20 bg-blue-950 py-2 text-yellow-300 text-sm text-center animate-marquee">
      <div className="font-medium tracking-widest space-x-6">  ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!! BAKA BAKA BAKA !!! ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!</div>
      </marquee>
   </>

    const sizeBigDesktop = <>
    <div className="mt-16 flex justify-start ml-52">
         <PhaseComponent />
          <div className="flex flex-col gap-12 ml-20">
            <EpisodeCard />
            <div className="relative flex flex-col gap-4">
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={"heheheh"}
            />
            <StatusCard
              image={episode2}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing unt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
              }
            />
            <StatusCard
              image={episode1}
              name={"User Nickname"}
              status={"Status quo"}
              storyHeading={"Story Fragment"}
              description={""}
            />
            <div className="p-[3px] !rounded-full gradient-border absolute -top-4 -right-20">
              <div
                className={`h-[300px] w-[300px] rounded-full bg-center bg-no-repeat bg-contain`}
                style={{
                  backgroundImage: `url(${circle})`,
                  backgroundSize: "300px 300px",
                }}
              ></div>
            </div>
            </div>
          </div>
        </div>
        <marquee className="mt-8 bg-blue-950 py-2 text-yellow-300 text-sm text-center animate-marquee">
      <div className="font-medium tracking-widest space-x-6">  ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!! BAKA BAKA BAKA !!! ⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!⭐⭐⭐ PHASE 1 IS LIVE !!! GO VOTE AND PARTICIPATE !!!</div>
      </marquee>
   </>


  return (
    <>
      {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          :windowSize?.width < 2080 ? sizeDesktop : sizeBigDesktop}
    </>
  );
}

export default function BakaLanding() {
  return (
    <BackGround2>
  <div className="w-full h-full relative">
    <div className="absolute inset-0">
      
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      <div className="pt-[100px] lg:pt-45">
        <LayoutContent />
      </div>
    </div>
  </div>
</BackGround2>

  );
}

