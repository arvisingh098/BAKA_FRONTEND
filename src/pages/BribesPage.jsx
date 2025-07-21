import BackGround2 from "../components/Background2";
import Carousel from "../components/Crousel";
import video from "../assets/images/video.png";
import Button from "../components/Button";
import UserDetailCard from "../components/UserDetailsCard";
import Header from "../components/Header";
import grid from "../assets/images/grid.png";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import NotificationModal from "../components/NotificationModal";
import Bribes from "../components/Bribes";
import HeadingCard from "../components/HeadingCard";
import AttentionPopOut from "../components/AttentionPopOut";

const BribesPage = () => {
  const [infoModal, setInfoModal] = useState(false);
  const [bribeModal, setBribeModal] = useState(false);
  const [attentionModal, setAttentionModal] = useState(false);
  const [activeTab, setActiveTab] = useState("MY BRIBES");
  const [showBribe, setShowBribe] = useState([]);

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

  const bribes = [
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    {
      type: "Corruption",
      status: "pending",
      offer: "700 Token Name",
      vote: true,
    },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    {
      type: "Corruption",
      status: "pending",
      offer: "700 Token Name",
      vote: true,
    },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    {
      type: "Corruption",
      status: "pending",
      offer: "700 Token Name",
      vote: true,
    },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    {
      type: "Corruption",
      status: "pending",
      offer: "700 Token Name",
      vote: true,
    },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
    { type: "Corruption", status: "pending", offer: "700 Token Name" },
  ];

  const incomingBribes = [
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
    { type: "Corruption", button: true, offer: "700 Token Name" },
    { type: "Corruption", button: true, offer: "700 Token Name", vote: true },
  ];

  useEffect(() => {
    if (activeTab === "MY BRIBES") {
      setShowBribe(bribes);
    } else {
      setShowBribe(incomingBribes);
    }
  }, [activeTab]);

  const nftsCrousel = [
    {
      id: 1,
      title: "Baka Bears #1",
      description:
        " Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum Lorem ipsum",
      image: video,
      amount: 99999,
    },
    {
      id: 2,
      title: "Baka Bears #2",
      description: "More ipsum...",
      image: video,
      amount: 99999,
    },
    {
      id: 3,
      title: "Baka Bears #3",
      description: "Again ipsum...",
      image: video,
      amount: 99999,
    },
  ];

  const users = [
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
    { id: "Name", description: "Status" },
  ];


  const sizeMobile = <div className="w-full h-full grid grid-cols-2 pl-14 lg:pl-60 lg:pt-10  pt-1 relative gap-20 lg:gap-0 lg:px-0 px-10 ">
          <div className="flex flex-col justify-center col-span-1">
            <Carousel nfts={nftsCrousel} />
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setAttentionModal(true);
                }}
                 extraClasess={"!py-[2px] !px-2 !border-1"}
                      rounded={"rounded-[10px]"}
                      label={
                        <span
                          className="relative z-10 text-[10px] lg:text-[20px] flex justify-center items-center pt-[2px] lg:pt-0"
                          style={{
                            color: "white",
                            WebkitTextStroke: ".1px black",
                            textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                          }}
                        >
                          VOTE
                        </span>
                      }
              />
            </div>
          </div>

          <div className="col-span-1 w-full ">
            <div className="relative z-10 w-full max-w-[450px] p-[6px] !rounded-[20px] lg:!rounded-[50px] gradient-border">
              <div
                className="w-full h-full relative min-h-[60vw] lg:min-h-[60vh] rounded-[20px] lg:!rounded-[50px] overflow-hidden pb-2"
                style={{
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, .5)",
                }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background: "linear-gradient(to bottom, white, #111827)",
                    filter: "blur(10px)",
                  }}
                />

                <div className="relative z-10 w-full h-full">
                  <div
                    className="w-full h-12 lg:h-20 bg-center bg-cover flex justify-center items-center rounded-t-[20px] lg:!rounded-[50px] bg-blue-500"
                    style={{ backgroundImage: `url(${grid})` }}
                  >
                    <h3
                      className="relative z-10 font-bold text-[10px] lg:text-[24px] lg:px-0 px-4"
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
                      CHOOSE PLAYER FOR BRIBING
                    </h3>
                    <span
                      className="p-[1px] lg:p-[3px] px-[6px] lg:px-[12px] text-[8px] lg:text-[24px] rounded-full mr-3 lg:ml-3 lg:mr-0 bg-red-500  text-white font-bold cursor-pointer"
                      onClick={() => {
                        setInfoModal(true);
                      }}
                    >
                      i
                    </span>
                  </div>

                  <div className={`grid ${windowSize.height < 780? "grid-cols-3" : "grid-cols-4"}  gap-4 overflow-y-auto custom-scrollbar2 overflow-x-hidden max-h-36 lg:max-h-96 py-3 lg:py-6 pr-1 mt-0 lg:mt-4 px-6`}>
                    {users.map((user, idx) => (
                      <UserDetailCard
                        title={`Name`}
                        description={"Status Quo"}
                        rounded={"!rounded-[10px]"}
                        gradientWidth={"w-fit"}
                        bgColor={"bg-yellow-50"}
                        noWidth
                        onclick
                        to={"/manage-bribes"}
                        imageBgColor={"bg-white"}
                        gradientBorder={"p-[3px]"}
                        textColor={"!text-[6px] lg:!text-[12px] px-[2px] lg:px-0 text-[#5841D8]"}
                    extraclasses={"flex flex-col justify-center items-center py-1 lg:py-3 !px-2 lg:!px-6"}
                    height={"h-[40px] sm:h-20"}
                    width={"w-[40px] sm:w-20"}
                    imageSize={ windowSize?.width < 620 ? "37px 37px": "70px 70px"}
                    
                      />
                    ))}
                  </div>

                  {/* Button */}
                  <div className=" flex justify-center mt-3 lg:mt-6 ">
                    <Button
                      onClick={() => {
                        setBribeModal(true);
                      }}
                      extraClasess={"!py-[2px] lg:!py-1 !px-2 lg:!px-12 !border-1 lg:!border-2"}
                      rounded={"rounded-[10px]"}
                      label={
                        <span
                          className="relative z-10 text-[5px] lg:text-[20px] flex justify-center items-center pt-[2px]"
                          style={{
                            color: "white",
                            WebkitTextStroke: ".1px black",
                            textShadow: `
      -.4px -.4px 0 black,
       .4px -.4px 0 black,
      -.4px  .4px 0 black,
       .4px  .4px 0 black
    `,
                          }}
                        >
                          MANGAE BRIBES
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        const sizeTab = <div className="w-full h-full grid grid-cols-2 pl-20 gap-20 pt-4 relative ">
          
          <div className="flex flex-col justify-center col-span-1">
            <Carousel nfts={nftsCrousel} />
            <div className="flex justify-center">
              <Button
              onClick={()=>{setAttentionModal(true)}}
                label={
                  <span
                    className="relative z-10 text-[20px]"
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
                    VOTE
                  </span>
                }
                extraClasess={"!py-1 !px-12"}
                rounded={"rounded-[10px]"}
              />
            </div>
          </div>

          <div className="col-span-1 w-full ">
            <div className="relative z-10 w-full max-w-[450px] p-[6px] !rounded-[50px] gradient-border">
              <div
                className="w-full h-full relative min-h-[60vw] rounded-[50px] overflow-hidden pb-6"
                style={{
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, .5)",
                }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background: "linear-gradient(to bottom, white, #111827)",
                    filter: "blur(10px)",
                  }}
                />

                <div className="relative z-10 w-full h-full">
                  <div
                    className="w-full h-20 bg-center bg-cover flex justify-center items-center rounded-t-[50px] bg-blue-500"
                    style={{ backgroundImage: `url(${grid})` }}
                  >
                    <h3
                      className="relative z-10 font-bold text-[24px]"
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
                      CHOOSE PLAYER FOR BRIBING
                    </h3>
                    <span
                      className="p-[3px] px-[12px] rounded-full bg-red-500 ml-3 text-white font-bold cursor-pointer"
                      onClick={() => {
                        setInfoModal(true);
                      }}
                    >
                      i
                    </span>
                  </div>

                  <div className="grid grid-cols-4 xl:grid-cols-4 gap-4 overflow-y-auto custom-scrollbar2 overflow-x-hidden max-h-96 pr-1 mt-4 py-6 px-6">
                    {users.map((user, idx) => (
                      <UserDetailCard
                        title={`Name`}
                        description={"Status Quo"}
                        imageSize={"60px 60px"}
                        width={"w-16"}
                        height={"h-16"}
                        rounded={"!rounded-[10px]"}
                        gradientWidth={"w-fit"}
                        bgColor={"bg-yellow-50"}
                        noWidth
                        onclick
                        to={"/manage-bribes"}
                        imageBgColor={"bg-white"}
                        gradientBorder={"p-[3px]"}
                        extraclasses={
                          "flex flex-col justify-center items-center py-3 !px-6"
                        }
                        textColor={"!text-[12px] text-[#5841D8]"}
                      />
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex justify-center ">
                    <Button
                      onClick={() => {
                        setBribeModal(true);
                      }}
                      extraClasess={"!py-1 !px-12"}
                      rounded={"rounded-[10px]"}
                      label={
                        <span
                          className="relative z-10 text-[20px]"
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
                          MANGAE BRIBES
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  const sizeDesktop = <div className="w-full h-full grid grid-cols-2 pl-60 pt-10 relative ">
          
          <div className="flex flex-col justify-center col-span-1">
            <Carousel nfts={nftsCrousel} />
            <div className="flex justify-center">
              <Button
              onClick={()=>{setAttentionModal(true)}}
                label={
                  <span
                    className="relative z-10 text-[20px]"
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
                    VOTE
                  </span>
                }
                extraClasess={"!py-1 !px-12"}
                rounded={"rounded-[10px]"}
              />
            </div>
          </div>

          <div className="col-span-1 w-full ">
            <div className="relative z-10 w-full max-w-[450px] p-[6px] !rounded-[50px] gradient-border">
              <div
                className="w-full h-full relative min-h-[60vh] rounded-[50px] overflow-hidden pb-6"
                style={{
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, .5)",
                }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background: "linear-gradient(to bottom, white, #111827)",
                    filter: "blur(10px)",
                  }}
                />

                <div className="relative z-10 w-full h-full">
                  <div
                    className="w-full h-20 bg-center bg-cover flex justify-center items-center rounded-t-[50px] bg-blue-500"
                    style={{ backgroundImage: `url(${grid})` }}
                  >
                    <h3
                      className="relative z-10 font-bold text-[24px]"
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
                      CHOOSE PLAYER FOR BRIBING
                    </h3>
                    <span
                      className="p-[3px] px-[12px] rounded-full bg-red-500 ml-3 text-white font-bold cursor-pointer"
                      onClick={() => {
                        setInfoModal(true);
                      }}
                    >
                      i
                    </span>
                  </div>

                  <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto custom-scrollbar2 overflow-x-hidden max-h-96 pr-1 mt-4 py-6 px-6">
                    {users.map((user, idx) => (
                      <UserDetailCard
                        title={`Name`}
                        description={"Status Quo"}
                        imageSize={"60px 60px"}
                        width={"w-16"}
                        height={"h-16"}
                        rounded={"!rounded-[10px]"}
                        gradientWidth={"w-fit"}
                        bgColor={"bg-yellow-50"}
                        noWidth
                        onclick
                        to={"/manage-bribes"}
                        imageBgColor={"bg-white"}
                        gradientBorder={"p-[3px]"}
                        extraclasses={
                          "flex flex-col justify-center items-center py-3 !px-6"
                        }
                        textColor={"!text-[12px] text-[#5841D8]"}
                      />
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex justify-center ">
                    <Button
                      onClick={() => {
                        setBribeModal(true);
                      }}
                      extraClasess={"!py-1 !px-12"}
                      rounded={"rounded-[10px]"}
                      label={
                        <span
                          className="relative z-10 text-[20px]"
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
                          MANGAE BRIBES
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



  return (
    <BackGround2>
      <div className="bg-black/50 w-full min-h-screen">
        <Header />
       

         {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          : sizeDesktop}
        <Modal
          onClose={() => {
            setInfoModal(false);
          }}
          isOpen={infoModal}
          children={
            <div className="relative z-10  w-full h-full">
              <div
                className="w-full h-8 sm:h-14 lg:h-20 bg-center bg-cover flex justify-center items-center rounded-t-[25px] lg:rounded-t-[50px] bg-blue-500"
                style={{ backgroundImage: `url(${grid})` }}
              >
                <h3
                  className="relative z-10 font-bold lg:text-[24px] text-[10px] sm:text-[18px]"
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
                  WHAT IS BRIBING ?
                </h3>
                <span
                  className="lg:py-[3px] py-[1px] sm:px-[10px] lg:px-[14px] px-[7px] text-[10px] sm:text-[16px] rounded-full bg-red-500 ml-3 text-white font-bold cursor-pointer"
                  onClick={() => {
                    setInfoModal(true);
                  }}
                >
                  i
                </span>
              </div>

              <div className="px-6 py-4 lg:text-sm text-[6px] sm:text-[12px] text-gray-800 leading-relaxed w-full h-[60vh]">
                <p className="mb-4">
                  <strong>Bribing</strong> is when one player pays another
                  player to influence their in-game decisions. There are two
                  types of bribes:
                </p>

                <p className="font-semibold">1. Corruption Bribe</p>
                <p className="ml-4 mb-2">
                  – “I pay you, I own your NFTs (for now).”
                  <br />
                  • Player A gives money to Player B.
                  <br />
                  • In return, Player A gets to fully control some of Player B’s
                  NFTs for the rest of Phase 1 and all of Phase 2.
                  <br />• Player B loses all control over those NFTs during that
                  time.
                </p>

                <p className="font-semibold">2. Voting-Direction Bribe</p>
                <p className="ml-4 mb-4">
                  – “I pay you, you vote how I say.”
                  <br />
                  • Player A gives money to Player B.
                  <br />
                  • In return, Player B must lock a specific number of their
                  NFTs into the voting choices Player A decides.
                  <br />• Player A does not gain control of the NFTs beyond that
                  vote—just influence over how they are used in Phase 1.
                </p>

                <p>
                  <strong>Simply put:</strong> Corruption Bribes give control,
                  Voting-Direction Bribes only influence voting.
                </p>
              </div>
            </div>
          }
        />
        <NotificationModal
          tab={"MY BRIBES"}
          tab2={"INCOMING BRIBES"}
          setActiveTab={setActiveTab}
          open={bribeModal}
          setModal={setBribeModal}
          activeTab={activeTab}
          notifications={
            <>
              {showBribe.map((bribe, idx) => {
                return (
                  <Bribes
                    offer={bribe?.offer}
                    index={idx}
                    type={bribe.type}
                    votes={bribe?.vote ? true : false}
                    button={bribe?.button ? true : false}
                    status={bribe?.status}
                    windowSize={windowSize}
                  />
                );
              })}
            </>
          }
        />
        <AttentionPopOut
          isOpen={attentionModal}
          onClose={() => {
            setAttentionModal(false);
          }}
        />
      </div>
    </BackGround2>
  );
};

export default BribesPage;

