import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function AutoTypeContainer(){
    
     const { darkmode } = useContext(DataContext);

    const [text] = useTypewriter({
        words: ["Full Stack Developer","Lifter","Mern Stack Developer","React Developer","Web Developer"],
        loop:true,
        typeSpeed:120,
        deleteSpeed:120
    })

    return(
        <div className="flex justify-center  px-7  py-3 mt-[140px]">
           <h1  className={`text-2xl ${darkmode ? "text-[#F5F1EA]" : "text-[#111111]"}`}>I'm a <span className={`font-medium text-2xl font-manrope ${darkmode? "text-sky-500" : "text-blue-600"}`}>{text}</span><span><Cursor/></span></h1>
        </div>
    )
}

export default AutoTypeContainer