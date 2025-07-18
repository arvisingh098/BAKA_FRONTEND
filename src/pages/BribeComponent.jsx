const BribeComponent = ({tab, tab2, activeTab , setActiveTab, tabId, tab2Id, pannel })=>{
    return <div
            className="relative w-full h-full overflow-y-visible shadow-lg p-2 border-[1.5px] bg-[#23313a]/60 backdrop-blur-xs border-yellow-50  rounded-r-2xl rounded-b-2xl"
            
          >
            <div className="flex justify-start absolute -left-[1.4px] -top-8 lg:-top-10">
              {tab && (
                <div
                  className="relative lg:w-[250px] w-[105px] lg:h-[40px] h-[30px] cursor-pointer"
                  onClick={() => setActiveTab(tabId)}
                >
                  
                  <div
                    className={`absolute inset-0 z-0 ${
                      activeTab === tabId ? "bg-yellow-50" : ""
                    } bribetab1-border bribetab1`}
                  ></div>
    
                  
                  {activeTab !== tabId && (
                    <div className="absolute top-[1.5px] right-[2px] bottom-[2px] left-[1px] z-20 bg-black/30 backdrop-blur-[.5px] bribetab1"></div>
                  )}
    
                 
                  <div
                    className={`absolute z-10 top-[1px] right-[1.5px] ${
                      activeTab === tabId ? "-bottom-[1px]" : "bottom-[1px]"
                    } left-[1.5px] bribetab1 bg-[#23313a] text-white flex items-center justify-start px-2`}
                   
                  >
                    {tab}
                  </div>
                </div>
              )}
              {tab2 && (
                <div
                  className="relative lg:w-[250px] w-[110px] lg:h-[40px] h-[30px] cursor-pointer"
                  onClick={() => setActiveTab(tab2Id)}
                >
                  <div
                    className={`absolute z-0 inset-0 ${
                      activeTab === tab2Id ? "bg-yellow-50" : ""
                    } bribetab2`}
                  ></div>
    
                   {activeTab !== tab2Id && (
                    <div className="absolute top-[1px] right-[1px] bottom-[4px] left-[1px] z-20 bg-black/30 backdrop-blur-[.5px] bribetab2"></div>
                  )}
    
                  <div
                    className={`absolute z-10 top-[1px] right-[1px] ${
                      activeTab === tab2Id ? "-bottom-[1px]" : "bottom-[1px]"
                    } left-[1px] bribetab2 bg-[#23313a] text-white flex items-center justify-center`}
                   
                  >
                    {tab2}
                  </div>
                </div>
              )}
            </div>
    
           
            <div className="">{pannel}</div>
          </div>
}

export default BribeComponent