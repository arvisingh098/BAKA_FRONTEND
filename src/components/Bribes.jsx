import { button } from "framer-motion/client";
import Button from "./Button";
import CancelButton from "./CancelButton";

const Bribes = ({
  index,
  type = "Corruption",
  offer = "700 Token Name",
  votes = null,
  status ,
  button = false
}) => {
  return (
    <div key={index} className="mb-4">
      <table className="w-full text-sm text-white bg-[#071627]/70 rounded-2xl overflow-hidden shadow-md table-fixed">
        <tbody>
          <tr className="h-12 lg:h-20">
       
            <td className="w-[70px] px-4 align-middle">
              <div className="w-6 lg:w-12 h-6 lg:h-12 rounded-full bg-gradient-to-br from-[#94C2BD] to-[#87DBD0] flex items-center justify-center">
                <div className="w-5 lg:w-8 h-5 lg:h-8 bg-white rounded-full" />
              </div>
            </td>

           
            <td className="w-[20%] px-3 align-middle text-[8px] lg:text-[13px]">
              <div className="text-white font-medium">Type</div>
              <div className="font-light">{type}</div>
            </td>

           
            <td className="w-[20%] px-3 align-middle text-[8px] lg:text-[13px]">
              <div className="text-white font-medium">Your Offer</div>
              <div className="font-light">{offer}</div>
            </td>

            
            <td className="w-[30%] px-3 align-middle text-[8px] lg:text-[13px]">
              {votes ? (
                <div className="flex gap-4">
                  <div>
                    <div className="text-white font-medium">Vote A</div>
                    <div className="font-light">{votes.a}</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Vote B</div>
                    <div className="font-light">{votes.b}</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">Vote C</div>
                    <div className="font-light">{votes.c}</div>
                  </div>
                </div>
              ) : (
                <div className="h-full" /> 
              )}
            </td>

           
            <td className="w-[15%] px-3 align-middle text-[8px] lg:text-[13px] text-left">
             <>
             {status && <>
              <div className="text-white font-medium">Status</div>
              <div className="font-light">{status} . . . . .</div>
             </> }
            { button &&  <div className="flex flex-col gap-1">
             <CancelButton label={"Accept"} extraClasess={"py-[1px] !px-2 lg:!px-6 w-full"} color={"bg-green-500"} labelClass={"!text-[6px] lg:!text-[10px]"}  />
             <CancelButton label={"Decline"} extraClasess={"py-[1px] !px-2 lg:!px-6 w-full"} color={"bg-red-500"}  labelClass={"!text-[6px] lg:!text-[10px]"} />
             </div>}
             </>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bribes;
