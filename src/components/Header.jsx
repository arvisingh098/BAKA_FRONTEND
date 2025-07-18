import logo from "../assets/images/logo.png";
import CountDiv from "./CountDiv";
import coin1 from "../assets/images/coin1.png";
import honey from "../assets/images/honey.png";
import { useEffect, useState } from "react";
import NotificationModal from "./NotificationModal";
import NotificationDetails from "./NotificationDetails";
import NicknameModal from "./NicknameModal";
import Token from "./Token";
import eth from "../assets/images/eth.png";

const Header = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

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

  const notifications = [
    {
      time: "3/11/2025 05:00",
      message: 'Incoming Bribe "nickname" 800 token "token name" and 9 NFT',
    },
    {
      time: "3/11/2025 05:00",
      message: "Discount 20%  All NFT",
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
    {
      time: "3/11/2025 05:00",
      message: 'Incoming Bribe "nickname" 800 token "token name" and 9 NFT',
    },
    {
      time: "3/11/2025 05:00",
      message: "Discount 20%  All NFT",
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
    {
      time: "3/11/2025 05:00",
      message: 'You Get Attacked by "NIKNAME"',
    },
  ];

  const tokens = [
    {
      name: "ETH",
      amount: "0.2",
      image: eth,
      bgColor: "bg-purple-50",
    },
    {
      name: "HON",
      amount: "50",
      image: honey,
      bgColor: "bg-yellow-100",
    },
    {
      name: "ETH",
      amount: "0.2",
      image: eth,
      bgColor: "bg-purple-50",
    },
    {
      name: "HON",
      amount: "50",
      image: honey,
      bgColor: "bg-yellow-100",
    },
    {
      name: "ETH",
      amount: "0.2",
      image: eth,
      bgColor: "bg-purple-50",
    },
  ];
  const nfts = [
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
    {
      id: "00000",
      description: (
        <div className="flex justify-start gap-2">
          <Token
            image={eth}
            border={"p-[2px]"}
            bgSize={"30px 30px"}
            bgPosition={"center"}height={"h-6"} width={"w-6"}
          />
          <p className="pt-1">0009</p>
        </div>
      ),
    },
  
  ];

  const sizeMobile = (
    <div className="flex justify-between items-center px-6 py-4 lg:px-32 lg:py-8  z-50">
      <div>
        <img src={logo} alt="Bakakuma Logo" className="h-10" />
      </div>
      <div className="flex items-center gap-8">
        <CountDiv
          image={coin1}
          count={"50"}
          backgroundPosition={".3px .6px"}
          bgImageSize={"38px 38px"}
          width={"w-6 lg:w-16"}
          height={"h-6 lg:h-16"}
          countClass={"text-[10px]"}
          rounded={"rounded-[6px]"}
          extraClasses={" !min-w-20 !py-[2px] "}
        />
        <CountDiv
          image={honey}
          count="99999999"
          backgroundPosition={"-1.4px 2px"}
          width={"w-6 lg:w-16"}
          height={"h-6 lg:h-16"}
          countClass={"text-[10px]"}
          extraClasses={"!min-w-20 !py-[2px] "}
          bgImageSize={"38px 38px"}
          rounded={"rounded-[6px]"}
        />
        <CountDiv
          width={"w-6 lg:w-16"}
          countClass={"text-[10px]"}
          extraClasses={"!min-w-20 !py-[2px] "}
          rounded={"rounded-[6px]"}
          height={"h-6 lg:h-16"}
          count="Profile"
          bgColor={"bg-pink-800"}
          bgImageSize={"38px 38px"}
          onClick={() => {
            setProfileModal(true);
          }}
        />
        <div className="p-[3px] rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400 ">
          <div
            onClick={() => {
              setNotificationModal(true);
            }}
            className={`h-10 w-10 cursor-pointer rounded-full ${"bg-black"} 
                bg-center bg-no-repeat bg-contain`}
            style={{
              //   backgroundImage: `url(${image})`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>
      <NotificationModal
        notifications={
          <>
            {notifications.map((each) => {
              return (
                <NotificationDetails
                  message={each?.message}
                  time={each?.time}
                />
              );
            })}
          </>
        }
        tab={"Notification"}
        activeTab={"Notification"}
        open={notificationModal}
        setModal={setNotificationModal}
      />
      <NicknameModal
        isOpen={profileModal}
        onClose={() => {
          setProfileModal(false);
        }}
        tokens={tokens}
        nfts={nfts}
      />
    </div>
  );

  const sizeTab = (
    <div className="flex justify-between items-center px-6 py-10  z-50">
      <div>
        <img src={logo} alt="Bakakuma Logo" className="h-24" />
      </div>
      <div className="flex items-center gap-8">
        <CountDiv
          image={coin1}
          count={"50"}
          backgroundPosition={".3px .6px"}
          bgImageSize={"38px 38px"}
          width={"w-10"}
          height={"h-10 "}
          countClass={"text-[16px]"}
          rounded={"rounded-[6px]"}
          extraClasses={" !min-w-28 !py-[2px] "}
        />
        <CountDiv
          image={honey}
          count="99999999"
          backgroundPosition={"-1.4px 2px"}
          bgImageSize={"38px 38px"}
           width={"w-10"}
          height={"h-10 "}
          countClass={"text-[16px]"}
          rounded={"rounded-[6px]"}
          extraClasses={" !min-w-28 !py-[2px] "}
        />
        <CountDiv
          bgImageSize={"38px 38px"}
          bgColor={"bg-pink-800"}
          count="Profile"
          width={"w-10"}
          height={"h-10 "}
          countClass={"text-[16px]"}
          rounded={"rounded-[6px]"}
          extraClasses={" !min-w-28 !py-[2px] "}
          onClick={() => {
            setProfileModal(true);
          }}
        />
        <div className="p-[3px] rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400 ">
          <div
            onClick={() => {
              setNotificationModal(true);
            }}
            className={`h-16 w-16 cursor-pointer rounded-full ${"bg-black"} 
                bg-center bg-no-repeat bg-contain`}
            style={{
              //   backgroundImage: `url(${image})`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>
      <NotificationModal
        notifications={
          <>
            {notifications.map((each) => {
              return (
                <NotificationDetails
                  message={each?.message}
                  time={each?.time}
                />
              );
            })}
          </>
        }
        tab={"Notification"}
        activeTab={"Notification"}
        open={notificationModal}
        setModal={setNotificationModal}
      />
      <NicknameModal
        isOpen={profileModal}
        onClose={() => {
          setProfileModal(false);
        }}
        tokens={tokens}
        nfts={nfts}
      />
    </div>
  );

  const sizeDesktop = (
    <div className="flex justify-between items-center pt-20 px-32">
      <div>
        <img src={logo} alt="Bakakuma Logo" className="h-32" />
      </div>
      <div className="flex items-center gap-8">
        <CountDiv image={coin1} count={"50"} backgroundPosition={".3px .6px"} />
        <CountDiv
          image={honey}
          count="99999999"
          backgroundPosition={"-1.4px 2px"}
        />
        <CountDiv
          count="Profile"
          bgColor={"bg-pink-800"}
          onClick={() => {
            setProfileModal(true);
          }}
        />
        <div className="p-[3px] rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400 ">
          <div
            onClick={() => {
              setNotificationModal(true);
            }}
            className={`h-16 w-16 cursor-pointer rounded-full ${"bg-black"} 
                bg-center bg-no-repeat bg-contain`}
            style={{
              //   backgroundImage: `url(${image})`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>
      <NotificationModal
        notifications={
          <>
            {notifications.map((each) => {
              return (
                <NotificationDetails
                  message={each?.message}
                  time={each?.time}
                />
              );
            })}
          </>
        }
        tab={"Notification"}
        activeTab={"Notification"}
        open={notificationModal}
        setModal={setNotificationModal}
      />
      <NicknameModal
        isOpen={profileModal}
        onClose={() => {
          setProfileModal(false);
        }}
        tokens={tokens}
        nfts={nfts}
      />
    </div>
  );
  const sizeBigDesktop = (
    <div className="flex justify-between items-center pt-20 px-32">
      <div>
        <img src={logo} alt="Bakakuma Logo" className="h-32" />
      </div>
      <div className="flex items-center gap-8">
        <CountDiv image={coin1} count={"50"} backgroundPosition={".3px .6px"} />
        <CountDiv
          image={honey}
          count="99999999"
          backgroundPosition={"-1.4px 2px"}
        />
        <CountDiv
          count="Profile"
          bgColor={"bg-pink-800"}
          onClick={() => {
            setProfileModal(true);
          }}
        />
        <div className="p-[3px] rounded-full bg-gradient-to-r from-yellow-50 to-yellow-400 ">
          <div
            onClick={() => {
              setNotificationModal(true);
            }}
            className={`h-16 w-16 cursor-pointer rounded-full ${"bg-black"} 
                bg-center bg-no-repeat bg-contain`}
            style={{
              //   backgroundImage: `url(${image})`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>
      <NotificationModal
        notifications={
          <>
            {notifications.map((each) => {
              return (
                <NotificationDetails
                  message={each?.message}
                  time={each?.time}
                />
              );
            })}
          </>
        }
        tab={"Notification"}
        activeTab={"Notification"}
        open={notificationModal}
        setModal={setNotificationModal}
      />
      <NicknameModal
        isOpen={profileModal}
        onClose={() => {
          setProfileModal(false);
        }}
        tokens={tokens}
        nfts={nfts}
      />
    </div>
  );

  return (
    <>
    {windowSize?.width < 640
          ? sizeMobile
          : windowSize?.width < 1024
          ? sizeTab
          :windowSize?.width < 2080 ? sizeDesktop : sizeBigDesktop}</>
  );
};

export default Header;
