import ProfilePic from "../Assests/ProfilePic.png";
import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function ProfileComponent() {
  const { darkmode } = useContext(DataContext);

  return (
    <div
      className={`p-5 flex flex-col gap-3 justify-center mt-7 transition-colors duration-300 ${
        darkmode ? "bg-[#181817] text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
      }`}
    >
      <h1 className="text-3xl">About me</h1>
      <p  className={`text-sm ${
          darkmode ? "text-[#B8B3AB]" : "text-gray-600"
        }`}>
        Who I am and what I'm working <br />
        towards
      </p>

      <img
        src={ProfilePic}
        alt="ProfilePic"
       className={`h-[150px] w-[150px] rounded-full object-cover cursor-zoom-in
        ring-4 transition-all duration-200 hover:scale-[1.02]
        ${
          darkmode
            ? "ring-[#343330] shadow-[0_8px_25px_rgba(255,255,255,0.08)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
            : "ring-[#e8f0ee] shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)]"
        }`}
      />

      <div className="mt-5 pr-4.5">
        <p  className={`text-[16px] leading-[1.6] tracking-[0.01em] ${
            darkmode
              ? "text-[#D0CCC5]"
              : "text-gray-800"
          }`}>
          I studied Electronics and Communication Engineering and found myself
          drawn to building things people can actually use. I’m currently
          training in the MERN stack and turning what I learn into real projects
          in Chennai.
        </p>

        <p className={`mt-4 text-[16px] leading-[1.6] tracking-[0.01em] ${
            darkmode
              ? "text-[#D0CCC5]"
              : "text-gray-800"
          }`}>
          I like understanding my code rather than just making it work. I write
          it myself, debug the errors, and make sure I can explain what’s
          happening line by line.
        </p>
      </div>
      
    </div>

    

  );
}

export default ProfileComponent;
