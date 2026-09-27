import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function ButtonsComponent() {
  const { darkmode } = useContext(DataContext);

  return (
    <div className="w-[320px] mx-auto mt-7 grid grid-cols-2 gap-3">

      {/* About Me */}
      <Link
        to="/aboutme"
        className={`group col-span-2 h-[105px] rounded-2xl p-4 flex flex-col justify-between border transition-all duration-200 ${
          darkmode
            ? "bg-[#18302E] border-[#28514D] text-[#F5F1EA] hover:bg-[#1D3936]"
            : "bg-[#EAF7F5] border-[#CDE5E1] text-[#111111] hover:bg-[#E1F2EF]"
        }`}
      >
        <span className="text-xs font-medium opacity-60">
          01
        </span>

        <div>
          <h2 className="text-lg font-medium">
            About Me
          </h2>

          <p
            className={`text-xs mt-1 ${
              darkmode ? "text-[#B8B3AB]" : "text-gray-600"
            }`}
          >
            Who I am
          </p>
        </div>
      </Link>


      {/* Projects */}
      <Link
        to="/projects"
        className={`group h-[105px] rounded-2xl p-4 flex flex-col justify-between border transition-all duration-200 ${
          darkmode
            ? "bg-[#291F38] border-[#47345E] text-[#F5F1EA] hover:bg-[#302344]"
            : "bg-[#F3ECFF] border-[#E3D5FF] text-[#111111] hover:bg-[#EDE3FF]"
        }`}
      >
        <span className="text-xs font-medium opacity-60">
          02
        </span>

        <h2 className="text-base font-medium">
          Projects
        </h2>
      </Link>


      {/* Contact */}
      <Link
        to="/contact"
        className={`group h-[105px] rounded-2xl p-4 flex flex-col justify-between border transition-all duration-200 ${
          darkmode
            ? "bg-[#1D2938] border-[#30465F] text-[#F5F1EA] hover:bg-[#223143]"
            : "bg-[#EDF5FF] border-[#D4E5F7] text-[#111111] hover:bg-[#E4F0FC]"
        }`}
      >
        <span className="text-xs font-medium opacity-60">
          03
        </span>

        <h2 className="text-base font-medium">
          Contact
        </h2>
      </Link>

    </div>
  );
}

export default ButtonsComponent;