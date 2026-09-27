import Nav1 from "../Components/Nav1";
import AutoTypeContainer from "../Components/AutoTypeContainer";
import HeroComponent from "../Components/HeroComponent";
import Footer from "../Components/Footer";
import ButtonsComponent from "../Components/ButtonsComponent";
import { DataContext } from "../Data/DataContextProvider";
import { useContext } from "react";

function LandingPage() {
  const data = useContext(DataContext);
  const darkmode = data.darkmode;

  return (
    <div
     className={`w-full min-h-screen flex flex-col ${
    darkmode ? "bg-black text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
  }`}
    >
      <Nav1 />
      <AutoTypeContainer />
      <HeroComponent />
      <ButtonsComponent/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
