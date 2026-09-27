import indianflag from "../Assests/indianflag.png";
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function Nav1() {
  const { darkmode, setdarkmode } = useContext(DataContext);

  return (
    <div
      className={`flex justify-between p-3 items-center transition-colors duration-300 sticky top-0 w-full ${
        darkmode
          ? "bg-[#211F1C] text-[#F5F1EA] shadow-[0_8px_35px_rgba(255,255,255,0.12)]"
          : "bg-[#FFFCF9] text-[#111111] shadow-[0_2px_6px_rgba(15,23,42,0.08),0_8px_20px_rgba(15,23,42,0.08),0_16px_40px_rgba(15,23,42,0.06)]"
      }`}
    >
      <div
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-colors duration-300 ${
          darkmode
            ? "bg-[#2A2825] border-[#393631] shadow-[0_2px_6px_rgba(255,255,255,0.06),0_8px_20px_rgba(255,255,255,0.04)]"
            : "bg-white border-[#e2ebe8] shadow-[0_2px_6px_rgba(15,23,42,0.08),0_8px_20px_rgba(15,23,42,0.08),0_16px_40px_rgba(15,23,42,0.06)]"
        }`}
      >
        <p className="text-xl font-medium">Sai</p>

        <img
          className="h-3.5 w-5 object-cover rounded-[2px]"
          src={indianflag}
          alt="Indian Flag"
        />
      </div>

      <button
        onClick={() => setdarkmode(!darkmode)}
        className={`relative w-[58px] h-[30px] rounded-full p-1 transition-all duration-300 ${
          darkmode ? "bg-[#2A2825]" : "bg-[#E8EEEC]"
        }`}
      >
        <div
          className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-xs bg-white shadow-md transition-transform duration-300 ${
            darkmode ? "translate-x-[26px]" : "translate-x-0"
          }`}
        >
          {darkmode ? "🌙" : "☀️"}
        </div>
      </button>
    </div>
  );
}

export default Nav1;
