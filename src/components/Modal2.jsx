const Modal2 = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#0b1e2e] to-[#13293d] rounded-xl p-4">
        <div className="relative flex">
          <div className="bg-[#1e3750] text-white font-semibold py-2 px-4 rounded-tl-xl">
            MY BRIBES
          </div>
          <div className="relative bg-[#2c4564] text-white font-semibold py-2 px-4 ml-[-12px] clip-tab">
            INCOMING BRIBES
          </div>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
          <div className="flex gap-4 p-4 bg-[#0f2336] rounded-xl text-white">
            <div className="w-12 h-12 bg-[#aacce0] rounded-full flex items-center justify-center">
              👤
            </div>
            <div className="flex-1 grid grid-cols-4 gap-y-1 text-sm">
              <div>
                <span className="text-gray-400">Type</span>
                <br />
                Corruption
              </div>
              <div>
                <span className="text-gray-400">Your Offer</span>
                <br />
                700 Token Name
              </div>
              <div className="col-span-1">
                <span className="text-gray-400">Vote A</span> 4<br />
                <span className="text-gray-400">Vote B</span> 5<br />
                <span className="text-gray-400">Vote C</span> 1
              </div>
              <div className="text-right">
                <span className="text-gray-400">Status</span>
                <br />
                Pending . . . . .
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Modal2;
