import { Link } from "react-router-dom";

function ProjectButton() {
  return (
    <div className="flex justify-center px-5 mt-5">
      <Link to={'/projects'}>
        <button className="text-white bg-violet-600 px-2 py-1 rounded-[5px] w-[120px] shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/30 transition-shadow duration-200">
        Projects
       </button>
      </Link>
      
    </div>
  );
}

export default ProjectButton;
