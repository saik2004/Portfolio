import { useContext } from "react";
import { DataContext } from "../Data/DataContextProvider";

function ContactForm() {
  const { darkmode } = useContext(DataContext);

  return (
    <div
      className={`flex-1 flex flex-col gap-4 p-5 transition-colors duration-300 ${
        darkmode ? "bg-[#181817] text-[#F5F1EA]" : "bg-[#FFFCF9] text-[#111111]"
      }`}
    >
      {/* Title */}
      <h1 className="text-3xl leading-tight">
        Let's build something
        <br />
        together
      </h1>

      {/* Description */}
      <p
        className={`text-sm leading-6 ${
          darkmode ? "text-[#B8B3AB]" : "text-gray-600"
        }`}
      >
        Have an idea or project in mind?
        <br />
        I'd love to hear from you.
      </p>

      {/* Social Links */}
      <div className="flex gap-2 mt-1">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/dev.sai_?stkn=MTFjazI3azE2bjQ0cg=="
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
            darkmode
              ? "bg-[#302329] text-[#F0A8C0] border-[#513743] hover:bg-[#3A2931]"
              : "bg-[#FCEEF4] text-[#C13D72] border-[#F3D2DF] hover:bg-[#F9E2EB]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-4 h-4"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          Instagram
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/2004saikumar"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
            darkmode
              ? "bg-[#202A35] text-[#8EBCE8] border-[#33475A] hover:bg-[#263341]"
              : "bg-[#EEF5FC] text-[#1769A8] border-[#D2E4F4] hover:bg-[#E2EFFA]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h3v1.23c.43-.78 1.38-1.58 3.05-1.58 3.26 0 3.95 2.14 3.95 4.92V19h-3v-4.05c0-.97-.02-2.22-1.35-2.22-1.35 0-1.55 1.05-1.55 2.15V19h-3v-9Z" />
          </svg>
          LinkedIn
        </a>

        {/* Email */}
        <a
          href="mailto:dev.sai.contact@gmail.com"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
            darkmode
              ? "bg-[#332D22] text-[#E8C98D] border-[#514633] hover:bg-[#3B3427]"
              : "bg-[#FCF5E8] text-[#A56A00] border-[#F0DFBC] hover:bg-[#F8EEDC]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          Email
        </a>
      </div>

      {/* Form */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4 mt-3"
      >
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="27ae8065-34a6-4bb2-8028-7abf4376c08d"
        />

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            className={`text-sm font-medium ${
              darkmode ? "text-[#F5F1EA]" : "text-gray-800"
            }`}
          >
            Name
          </label>

          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}"
            title="Name should contain only letters, spaces, hyphens or apostrophes."
            autoComplete="name"
            className={`w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-all duration-200 ${
              darkmode
                ? "bg-[#242321] text-[#F5F1EA] placeholder:text-[#77736C] border-[#3A3936] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                : "bg-white text-gray-900 placeholder:text-gray-400 border-[#D8E4E1] focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            className={`text-sm font-medium ${
              darkmode ? "text-[#F5F1EA]" : "text-gray-800"
            }`}
          >
            Email
          </label>

          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            maxLength={100}
            autoComplete="email"
            className={`w-full px-3 py-2.5 rounded-lg text-sm outline-none border transition-all duration-200 ${
              darkmode
                ? "bg-[#242321] text-[#F5F1EA] placeholder:text-[#77736C] border-[#3A3936] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                : "bg-white text-gray-900 placeholder:text-gray-400 border-[#D8E4E1] focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            className={`text-sm font-medium ${
              darkmode ? "text-[#F5F1EA]" : "text-gray-800"
            }`}
          >
            Message
          </label>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
            minLength={20}
            maxLength={1000}
            className={`w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none border transition-all duration-200 ${
              darkmode
                ? "bg-[#242321] text-[#F5F1EA] placeholder:text-[#77736C] border-[#3A3936] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                : "bg-white text-gray-900 placeholder:text-gray-400 border-[#D8E4E1] focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
          />

          <p
            className={`text-[11px] ${
              darkmode ? "text-[#77736C]" : "text-gray-400"
            }`}
          >
            20–1000 characters
          </p>
        </div>

        {/* Send */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium shadow-[0_3px_10px_rgba(37,99,235,0.18)] hover:bg-blue-700 hover:shadow-[0_5px_14px_rgba(37,99,235,0.28)] transition-all duration-200"
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
