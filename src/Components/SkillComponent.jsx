import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function SkillComponent() {
  const { darkmode } = useContext(DataContext);

  const skillClass = `px-3 py-1 rounded-md border w-fit transition-colors duration-300 ${
    darkmode
      ? "border-[#3A3936] bg-[#242321] text-[#D0CCC5]"
      : "border-[#d8e4e1] bg-[#f5f9f8] text-gray-800"
  }`;

  const headingClass = darkmode
    ? "font-medium text-[#F5F1EA]"
    : "font-medium text-gray-900";

  const dividerClass = darkmode ? "border-[#393631]" : "border-[#e2e8e6]";

  return (
    <div
      className={`p-5 flex flex-col gap-3 mb-7 justify-center transition-colors duration-300 ${
        darkmode ? "bg-[#181817] text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
      }`}
    >
      <h1 className="text-3xl">Skills</h1>
      <p className={`text-sm ${darkmode ? "text-[#B8B3AB]" : "text-gray-600"}`}>
        Technologies I use to build projects <br /> and confidently discuss in
        interviews.
      </p>

      <hr className={dividerClass} />

      <div className="flex flex-col gap-2">
        <h1 className={headingClass}>Frontend</h1>
        <div className="flex flex-wrap gap-3">
          <p className={skillClass}>HTML</p>
          <p className={skillClass}>CSS</p>
          <p className={skillClass}>Javascript</p>
          <p className={skillClass}>React</p>
          <p className={skillClass}>Axios</p>
        </div>
      </div>

      <hr className={dividerClass} />

      {/* Backend */}
      <div className="flex flex-col gap-2">
        <h1 className={headingClass}>Backend</h1>

        <div className="flex flex-wrap gap-3">
          <p className={skillClass}>Node.js</p>
          <p className={skillClass}>Express</p>
          <p className={skillClass}>MongoDB</p>
        </div>
      </div>

      <hr className={dividerClass} />

      {/* Tools */}
      <div className="flex flex-col gap-2">
        <h1 className={headingClass}>Tools</h1>

        <div className="flex flex-wrap gap-3">
          <p className={skillClass}>Git</p>
          <p className={skillClass}>GitHub</p>
          <p className={skillClass}>VS Code</p>
        </div>
      </div>
    </div>
  );
}

export default SkillComponent;
