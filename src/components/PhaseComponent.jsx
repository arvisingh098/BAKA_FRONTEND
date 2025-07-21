import phase1 from "../assets/images/phase1.png";
import phase2 from "../assets/images/phase2.png";
import { useNavigate } from "react-router-dom";

const PhaseComponent = ({
  border,
  rounded,
  width,
  height,
  noPadding,
  bgColor,
  backgroundSize,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`  w-[23vh] sm:w-[27vh] xl:w-[21vw] rounded-4xl relative h-[56vw] xl:h-[56.5vh] flex justify-center bg-transparent items-center"`}
      style={{ boxShadow: "0 0 12px 6px rgba(254, 252, 232, 0.55)" }}
    >
      <div className="custom-border absolute w-full  !p-1 rounded-r-full h-full  phase1-clip !rounded-l-xl rounded-bl-[600px] z-0">
        <div
          className="bg-[#3967e6]  rounded-t-[20px]  h-full phase1-image-clip relative overflow-hidden"
          style={{
            boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
          }}
        >
          <h3
            onClick={() => {
              navigate("/bribes");
            }}
            className="lg:text-[28px] sm:text-[28px] text-[12px] text-center font-extrabold z-20  absolute top-4 left-0 translate-x-[20%] leading-none"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `
          0px -4px 0 #fff7b2,
          2px -4px 0 #ff004f,
          -2px -4px 0 #00ff95,
          6px 4px 8px rgba(0,0,0,0.9)
        `,
            }}
          >
            PHASE 1
          </h3>

          <img
            src={phase1}
            alt="Episode"
            className="relative z-10 object- w-full h-[100%] cursor-pointer "
            onClick={() => {
              navigate("/bribes");
            }}
          />
        </div>
      </div>
      <div className="custom-border w-full !p-1 absolute xl:left-0.5 xl:top-2 top-1 rounded-r-full  h-full phase2-clip  !rounded-l-[24px]  z-0">
        <div
          className="bg-[#3967e6]  rounded-br-[24px] rounded-l-[24px] flex-col flex justify-end items-end  h-full phase2-image-clip relative  overflow-hidden"
          style={{
            boxShadow: "inset 0 4px 12px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div
            className="w-full h-full bg-black/60 z-20 absolute cursor-pointer "
            onClick={() => {
              navigate("/phase-2");
            }}
          ></div>

          <img
            src={phase2}
            alt="Episode"
            className="relative z-10 object-contain w-full cursor-pointer "
            onClick={() => {
              navigate("/phase-2");
            }}
          />
          <h3
            className="lg:text-[28px] sm:text-[28px] text-[12px] text-center font-extrabold z-10  absolute bottom-1 right-1/2 translate-x-[80%] leading-none"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `
          0px -4px 0 #fff7b2,
          2px -4px 0 #ff004f,
          -2px -4px 0 #00ff95,
          6px 4px 8px rgba(0,0,0,0.9)
        `,
            }}
          >
            PHASE 2
          </h3>
          <div className="z-20 absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="39"
              viewBox="0 0 28 39"
              fill="none"
              className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
            >
              <g clip-path="url(#clip0_1149_31901)">
                <path
                  d="M13.9611 38.7893C11.1637 38.7893 8.36638 38.7893 5.56904 38.7893C2.84573 38.7893 0.815144 36.7689 0.804568 34.036C0.793992 29.2295 0.788704 24.423 0.804568 19.6165C0.804568 17.7236 1.68766 16.32 3.33222 15.4161C3.59662 15.2725 3.68123 15.1237 3.68123 14.8312C3.66536 13.5233 3.67065 12.21 3.68123 10.902C3.70767 4.85666 8.75769 0.151174 14.7595 0.576528C20.0105 0.948713 24.2197 5.45215 24.2673 10.7372C24.2779 12.1036 24.2779 13.4754 24.2673 14.8472C24.2673 15.1183 24.3414 15.2619 24.5899 15.3948C26.2609 16.32 27.1387 17.7396 27.144 19.6749C27.144 24.4389 27.107 29.1976 27.1599 33.9615C27.1863 36.6413 24.9971 38.8531 22.3214 38.7999C19.5399 38.7468 16.7584 38.7893 13.9716 38.7893H13.9611ZM13.9716 14.8738C15.7748 14.8738 17.578 14.8684 19.3812 14.8791C19.7038 14.8791 19.8254 14.8046 19.8149 14.459C19.7884 13.7466 19.8149 13.0341 19.8096 12.3163C19.8043 11.3965 19.8572 10.4767 19.6509 9.56214C19.0428 6.85582 16.4041 4.85134 13.6755 5.03743C10.7618 5.23948 8.43512 7.446 8.17601 10.2746C8.05439 11.6411 8.16015 13.0075 8.11784 14.374C8.10727 14.7515 8.19716 14.8844 8.60434 14.8738C10.3917 14.8472 12.1843 14.8631 13.9716 14.8631V14.8738ZM12.4963 29.8037C12.4963 31.0319 12.0204 33.4192 13.7072 33.7276C15.2831 34.02 15.4311 32.3665 15.4364 31.2393C15.4417 30.027 14.9922 27.7992 15.759 26.8315C16.5416 25.8479 17.2343 25.0663 16.9118 23.6892C16.3142 21.1158 12.766 20.5735 11.4017 22.796C10.7724 23.8221 10.7936 25.1407 11.4863 26.1297C11.8036 26.587 12.3218 26.8315 12.4857 27.3632C12.6919 28.0385 12.4963 29.0965 12.4963 29.8037Z"
                  fill="url(#paint0_linear_1149_31901)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1149_31901"
                  x1="13.9773"
                  y1="0.549805"
                  x2="13.9773"
                  y2="38.8009"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.335586" stop-color="#FFFCF1" />
                  <stop offset="0.845586" stop-color="#E1A61E" />
                </linearGradient>
                <clipPath id="clip0_1149_31901">
                  <rect
                    width="26.35"
                    height="38.25"
                    fill="white"
                    transform="translate(0.800049 0.549805)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseComponent;
