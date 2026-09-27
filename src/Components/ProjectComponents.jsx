import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";
import { useState } from "react";

function ProjectComponent() {
  const data = useContext(DataContext);
  const Projects = data.Projects;
  const darkmode = data.darkmode;

  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All"
      ? Projects
      : Projects.filter((project) => project.category === filter);

  return (
    <div
      className={`p-5 flex flex-col gap-3 justify-center transition-colors duration-300 ${
        darkmode ? "bg-[#181817] text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Projects</h1>
        <h1
          className={`text-sm ${darkmode ? "text-[#B8B3AB]" : "text-gray-700"}`}
        >
          Total projects: {Projects.length}
        </h1>
      </div>

      <p
        className={`text-sm ml-0.5 ${
          darkmode ? "text-[#B8B3AB]" : "text-gray-600"
        }`}
      >
        A few things I've built. Each one <br /> has the code on GitHub.
      </p>

      <div className="flex gap-2 overflow-x-auto py-2">
        {["All", "Frontend", "React", "Full Stack"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              filter === category
                ? "bg-violet-600 text-white shadow-[0_3px_10px_rgba(124,58,237,0.18)]"
                : darkmode
                  ? "bg-[#242321] text-[#D0CCC5] border border-[#3A3936] hover:bg-[#2B2A27]"
                  : "bg-[#f5f9f8] text-gray-700 border border-[#d8e4e1] hover:bg-[#eaf3f1]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 justify-center">
        {[...filteredProjects].reverse().map((items) => {
          return (
            <div
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                darkmode
                  ? "border-[#393631] bg-[#242321] shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
                  : "border-[#e1ebe8] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)]"
              }`}
            >
              <img
                src={items.img}
                alt={items.title}
                className="w-full rounded-xl p-1.5"
              />

              <div className="p-4">
                <h1
                  className={`text-lg font-medium ${
                    darkmode ? "text-[#F5F1EA]" : "text-gray-900"
                  }`}
                >
                  {items.title}
                </h1>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    darkmode ? "text-[#B8B3AB]" : "text-gray-600"
                  }`}
                >
                  {items.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {items.toolsused.split(", ").map((tool) => (
                    <span
                      key={tool}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors duration-200 ${
                        darkmode
                          ? "bg-[#2A2825] text-[#D0CCC5] border-[#3A3936]"
                          : "bg-[#F5F9F8] text-gray-700 border-[#D8E4E1]"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <hr
                  className={`my-4 ${
                    darkmode ? "border-[#393631]" : "border-[#e8eeec]"
                  }`}
                />

                <div className="flex gap-3">
                  <a
                    href={items.projectlink}
                    className="flex-1 text-center bg-violet-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-[0_3px_10px_rgba(124,58,237,0.18)] hover:bg-violet-700 hover:shadow-[0_5px_14px_rgba(124,58,237,0.28)] transition-all duration-200"
                  >
                    Live Project ↗
                  </a>

                  <a
                    href={items.githublink}
                    className={`flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      darkmode
                        ? "bg-[#2A2825] text-[#F5F1EA] border border-[#45423D] hover:bg-[#34312D] hover:border-[#514D47]"
                        : "bg-[#30343B] text-white border border-[#30343B] hover:bg-[#25282E] hover:border-[#25282E]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectComponent;
