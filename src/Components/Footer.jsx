import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function Footer() {
  const { darkmode } = useContext(DataContext);

  return (
    <footer
      className={`mt-auto px-5 py-4 border-t transition-colors duration-300 ${
        darkmode
          ? "bg-[#181817] border-[#393631] text-[#B8B3AB]"
          : "bg-[#FFFCF9] border-[#E2EBE8] text-gray-600"
      }`}
    >
      <div className="flex flex-col items-center gap-2">

        <p className="text-[11px]">
          © 2026 Saikumar. Built with React
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saik2004"
            target="_blank"
            rel="noreferrer"
            className={`text-[11px] font-medium transition-colors ${
              darkmode
                ? "text-[#D8D4CD] hover:text-white"
                : "text-[#37413E] hover:text-black"
            }`}
          >
            GitHub
          </a>

          <span
            className={`w-1 h-1 rounded-full ${
              darkmode ? "bg-[#55514B]" : "bg-[#C8D2CF]"
            }`}
          />

          <a
            href="https://www.linkedin.com/in/2004saikumar/"
            target="_blank"
            rel="noreferrer"
            className={`text-[11px] font-medium transition-colors ${
              darkmode
                ? "text-[#D8D4CD] hover:text-white"
                : "text-[#37413E] hover:text-black"
            }`}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;