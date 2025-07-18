import BackGround3 from "../components/Background3";
import Header from "../components/Header";
import HeadingCard from "../components/HeadingCard";
import grid from "../assets/images/grid.png";
import ProposalCard from "../components/ProposalCard";

const SubmissionPages = () => {
  return (
    <BackGround3>
      <Header />
      <div className=" flex flex-col">
        <div>
          <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#77ECFC] to-transparent z-10"></div>

          <div
            className="flex justify-between items-center w-full py-2"
            style={{
              background:
                "linear-gradient(to right, rgba(68,131,255,0) 0%, rgba(56,121,250,1) 70%, rgba(68,131,255,0) 98%)",
            }}
          >
            <div className="ml-36">
              <div
                className="w-full flex justify-start rounded-[10px] px-2 py-1"
                style={{
                  background:
                    "linear-gradient(to right, #000000 40%, transparent 80%)",
                }}
              >
                <div className="w-full font-semibold text-white">
                  + Create Submission
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <HeadingCard
                heading={"All Submission"}
                bgColor={"bg-black"}
                image={grid}
                textSize={"text-blue-500 text-[16px] text-center py-[2px]"}
                width={"w-40"}
                backgroundSize={"100% 100%"}
              />
              <HeadingCard
                heading={"Lead Board"}
                bgColor={"bg-black"}
                image={grid}
                textSize={"text-blue-500 text-[16px] text-center py-[2px]"}
                width={"w-40"}
                backgroundSize={"100% 100%"}
              />
              <HeadingCard
                heading={"Your Submission"}
                bgColor={"bg-black"}
                image={grid}
                textSize={"text-blue-500 text-[16px] text-center py-[2px]"}
                width={"w-40"}
                backgroundSize={"100% 100%"}
              />
            </div>

            <div className="mr-36">
              <div
                className="w-full flex justify-start rounded-l-[10px] px-2 py-1"
                style={{
                  background:
                    "linear-gradient(to right, #000000 40%, transparent 70%)",
                }}
              >
                <div className="w-full font-semibold text-white text-[14px]">
                  + Create Submission
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full h-[3px] bg-gradient-to-r from-transparent via-[#77ECFC] to-transparent z-10"></div>
        </div>

        <div
          className="flex-1 mx-24 max-h-[68.4vh] bg-white/9 rounded-t-xl shadow-2xl overflow-y-auto"
          style={{
            boxShadow:
              "-12px 0 24px rgba(0, 0, 0, 0.6), 12px 0 12px rgba(0, 0, 0, 0.6)",
          }}
        >
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          
        </div>
      </div>
    </BackGround3>
  );
};

export default SubmissionPages;
