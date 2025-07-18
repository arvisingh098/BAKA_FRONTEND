


import Button from "./Button";
import CancelButton from "./CancelButton";

const NotificationDetails = ({ message, time, index }) => {
  return (
       <div key={index} className="">
      <table className="min-w-full text-sm text-white bg-[#071627]/70 rounded-2xl overflow-hidden mb-2">
        <tbody>
          <tr className="border-b border-white/10">
            <td className=" px-1 py-1 align-top w-4">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-1" />
            </td>
            <td className="px-4 py-3  text-gray-300 align-top whitespace-nowrap w-20 text-[8px] sm:text-[10px] lg:text-[16px]">
              {time}
            </td>
            <td className="px-1 lg:px-6 py-3 font-medium align-top text-left text-[8px] sm:text-[10px] lg:text-[16px] w-44 sm:w-70 lg:w-[50vw] ">
                 <div className="font-medium leading-snug">{message}</div>
            </td>
            <td className="px-4 py-3 text-right align-top">
              <CancelButton label={"See Detail"} color={"bg-red-500"} rounded={"rounded-[10px] lg:rounded-[15px]"} inset={"-inset-2"} extraClasess={"!py-[1px] px-[6px] lg:px-4 lg:py-1 rounded-xl"} labelClass={"text-[10px] sm:text-[13px] lg:text-[15px] "}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NotificationDetails;
