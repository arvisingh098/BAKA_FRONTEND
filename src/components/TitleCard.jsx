import React from 'react';

const TitleCard = () => {
  return (
    <div className="w-[320px] rounded-[20px] shadow-lg bg-white border border-gray-200 p-5 text-sm font-sans relative">

      <div className="flex items-center mb-4">
        <div className="w-[48px] h-[48px] rounded bg-gray-300 flex items-center justify-center mr-3 border-[3px] border-purple-300">

          <div className="w-[30px] h-[30px] bg-sky-200 rounded-full" />
        </div>
        <div>
          <div className="font-bold text-black text-base">USER NICK NAME</div>
          <div className="text-gray-500 text-sm">Status Quo</div>
        </div>
      </div>

      <div className="font-semibold text-black text-base mb-1">Title</div>

      <p className="text-gray-700 text-[13px] leading-tight mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur……
      </p>
      <div className="text-black text-[13px] font-medium mb-1">
        Type of Proposal
      </div>

      <div className="text-sm text-gray-700 mb-3">
        <span className="font-semibold">Baka Score</span> &nbsp;&nbsp;99999
      </div>

      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-3 text-sm">
        <button className="text-gray-600 hover:text-green-600">👍</button>
        <span className="text-xs text-gray-700">9999</span>
        <button className="text-gray-600 hover:text-red-600">👎</button>
        <button className="ml-auto text-gray-600 hover:text-blue-500">💬</button>
      </div>
    </div>
  );
};

export default TitleCard;
