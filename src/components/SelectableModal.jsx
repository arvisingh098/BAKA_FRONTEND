import Tab from "./Tab";

const SelectableModal = () => {
    return (
        <div className="flex justify-between items-center relative filter-container px-4 pt-4 gap-4">
          <div className="filter-menus flex overflow-x-auto overflow-y-hidden">
           <Tab
              label="Support"
              value="support"
            secondTab={true}
            //   setTab={() => handleTicketCategory("support")}
            />
            <Tab
              label="Installation"
              value="installation"
            //   tab={type || ""} // Use type instead of pathname
            //   setTab={() => handleTicketCategory("installation")}
            />
          </div>
        </div>
    )
}

export default SelectableModal;