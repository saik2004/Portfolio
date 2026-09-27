import Nav2 from "../Components/Nav2";
import ProfileComponent from "../Components/ProfileComponen";
import SkillComponent from "../Components/SkillComponent";
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";
import Footer from "../Components/Footer";

function AboutMe() {
  const { darkmode } = useContext(DataContext);
  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${
        darkmode ? "bg-[#181817] text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
      }`}
    >
      <Nav2 />
      <ProfileComponent />
      <hr className={`ml-4 mr-4 ${darkmode ? "border-[#393631]/70" : "border-[#e2e8e6]"}`}
      />
      <SkillComponent />
      <Footer/>
    </div>
  );
}

export default AboutMe;
