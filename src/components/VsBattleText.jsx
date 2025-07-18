const VsBattleText = ({windowSize}) => {
  return (
    <div className="absolute -top-3 lg:top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/2 overflow-visible drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
      <svg
        // width="80"
        // height="100"
        width={ windowSize.width < 1024 ? "40" : "80"}
        height={ windowSize.width < 1024 ? "60" : "100"}
        viewBox="0 0 80 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="100%" stopColor="#4fc3f7" />
          </linearGradient>
          <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#e0f7ff" />
          </linearGradient>
        </defs>

        {/* "V" behind */}
        <text
          x="10"
          y="54"
          fontSize="60"
          fontWeight="900"
          fontStyle="italic"
          fill="url(#fillGradient)"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
          opacity="1"
        >
          V
        </text>

        {/* "S" on top, overlapping */}
        <text
          x="30"
          y="80"
          fontSize="60"
          fontWeight="900"
          fontStyle="italic"
          fill="url(#fillGradient)"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
        >
          S
        </text>
      </svg>
    </div>
  );
};

export default VsBattleText;
