import { Link } from "react-router-dom";

function AboutMeButton() {
  return (
    <div className="flex justify-center px-5 mt-5">
      <Link to={'/aboutme'}>
       <button className="text-white bg-teal-600 px-2 py-1 rounded-[5px] w-[120px] shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-shadow duration-200">
          About Me
        </button>
      </Link>
    </div>
  );
}
export default AboutMeButton;
