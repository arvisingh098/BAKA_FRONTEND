const Tab = ({ label, value, tab, setTab, secondTab=false }) => {
  const isActive = tab === value;

  return (
    <div
      onClick={() => setTab(value)}
      className="relative cursor-pointer"
    >
      <div className={` ${secondTab ? "trizopoad" : "trizopoad2"} p-[1px] bg-[#00917D]`}>
        <div
          className={`${secondTab ? "trizopoad" : "trizopoad2"} px-4 py-2 text-sm font-medium bg-white ${
            isActive ? " text-[#00917D]" : "bg-transparent text-[#0007]"
          }`}
        >
          {label}
        </div>
      </div>

      {isActive && (
        <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-white"></span>
      )}
    </div>
  );
};

export default Tab;
