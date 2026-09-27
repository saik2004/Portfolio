import indianflag from "../Assests/indianflag.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function Nav2() {
  const { darkmode, setdarkmode } = useContext(DataContext);

  return (
    <div
      className={`flex justify-between p-3 items-center transition-colors duration-300 sticky top-0  ${
        darkmode
          ? "bg-[#211F1C] text-[#F5F1EA]  shadow-[0_2px_6px_rgba(255,255,255,0.06)]"
          : "bg-[#FFFCF9] text-[#111111] shadow-[0_2px_6px_rgba(15,23,42,0.08),0_8px_20px_rgba(15,23,42,0.08),0_16px_40px_rgba(15,23,42,0.06)]"
      }`}
    >
      <div className="flex gap-2 items-center">
        {/* Back Button */}
        <Link to={"/"}>
          <button
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full
              text-sm font-medium
              transition-all duration-200
              hover:-translate-x-[1px]
              ${
                darkmode
                  ? "text-[#F5F1EA] bg-[#242321] shadow-[0_2px_8px_rgba(255,255,255,0.08)] hover:bg-[#2B2A27] hover:shadow-[0_4px_14px_rgba(255,255,255,0.12)]"
                  : "text-black bg-[#f5f9f8] shadow-[0_2px_8px_rgba(15,23,42,0.10)] hover:bg-[#eaf3f1] hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>

            <span>Back</span>
          </button>
        </Link>

        {/* Sai Badge */}
        <Link to={"/"}>
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
        </Link>
      </div>

      {/* Light/Dark Toggle */}
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

export default Nav2;
