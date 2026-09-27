import { Link } from "react-router-dom";

function ContactButton() {
  return (
    <div className="flex justify-center p-5">
      <Link to={'/contact'}>
       <button className="text-white bg-blue-600 px-2 py-1 rounded-[5px] w-[120px] shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-shadow duration-200">
        Contact
      </button>
      </Link>
     
    </div>
  );
}
export default ContactButton;
