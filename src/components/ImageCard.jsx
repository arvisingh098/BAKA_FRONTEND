const ImageCard = ({image, heading, description, height, width, coinImg}) => {

  return (
    <div className={`${width ? width : "w-[292px]"} ${height ? height : "h-[332px]"} rounded-[20px] gradient-border p-[2px] shadow-md`}>
      <div className="h-full w-full rounded-[18px] bg-[#D8ECFB] flex flex-col overflow-hidden">
        <div className="bg-[#78C0FB] text-white text-center text-sm font-bold py-1 rounded-t-[18px] border-b border-blue-200">
          EPISODE 3
        </div>

        <div className="flex-1 bg-white flex items-center justify-center p-1">
          <img
            src={image}
            alt="Episode 3 Baka NFT"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="bg-[#D8ECFB] px-3 py-2 text-sm font-medium text-gray-800">
          <div className="mb-2">Allocated Your Baka NFT</div>
          <div className="flex items-center bg-blue-200 rounded-[12px] p-1 px-2">
            <img
              src={coinImg} 
              alt="Coin"
              className="w-5 h-5 mr-2"
            />
            <span className="text-white text-xs font-semibold">-</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ImageCard