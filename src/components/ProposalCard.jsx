// import avatar from "../assets/images/avatar-placeholder.png"; // Replace with your avatar image

export default function ProposalCard() {
  return (
    <div
      className="w-[600px] rounded-[22px] p-6 bg-white border-[3px] relative overflow-hidden"
      style={{
        boxShadow: "0 0 0 3px #ca8a04, 0 0 0 6px #9333ea",
        backgroundImage: "url('/background-pattern.png')", // Optional background
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-[10px] bg-gradient-to-tr from-orange-400 to-purple-500 p-[2px]">
          {/* <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover rounded-[8px] border-4 border-white"
          /> */}
        </div>
        <div>
          <h1 className="text-xl font-extrabold leading-tight">
            USER NICK NAME
          </h1>
          <p className="text-sm text-gray-600 font-medium">Status Quo</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">Tittle</h2>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.......
      </p>

      {/* Type & Score */}
      <div className="mb-6">
        <p className="text-sm font-semibold">Type of Proposal</p>
        <div className="flex justify-between mt-2 text-sm font-semibold">
          <span>Baka Score</span>
          <span>99999</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-300/40 backdrop-blur-sm rounded-full px-4 py-2 flex justify-start items-center gap-6 w-fit">
        <div className="flex items-center gap-1 text-gray-800">
          {/* Down Arrow SVG */}
          <svg
            className="w-5 h-5 text-green-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm font-semibold">9999</span>
        </div>
        <div className="flex items-center gap-1 text-gray-800">
          {/* Message Bubble SVG */}
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.518 0-2.94-.338-4.167-.937L3 20l1.158-3.82C3.421 15.136 3 13.61 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm font-semibold">99</span>
        </div>
      </div>
    </div>
  );
}
