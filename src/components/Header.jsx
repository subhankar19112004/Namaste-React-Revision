import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            className="w-14 h-14 object-cover rounded-full"
            src={LOGO_URL}
            alt="logo"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Food<span className="text-blue-600">Hub</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              About
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              Contact
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              Cart 🛒
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <button
          onClick={() =>
            setButtonName(buttonName === "Login" ? "Logout" : "Login")
          }
          className="min-w-[100px] py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          {buttonName}
        </button>
      </div>
    </header>
  );
};

export default Header;
