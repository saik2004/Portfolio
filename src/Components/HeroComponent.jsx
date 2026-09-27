import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function HeroComponent(){

    const { darkmode } = useContext(DataContext);

    return(
        <div className="flex px-5 justify-center text-center">
           <p className={darkmode? "text-[#B8B3AB]" : "text-gray-600"}>
              I build fast, clean web apps<br />
              with React, Node and <br /> MongoDB.
           </p>
           
        </div>
    )
}

export default HeroComponent