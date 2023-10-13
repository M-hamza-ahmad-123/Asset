import React from "react";

const ToggleButton = ({ isOpen, onClick }) => {
  const buttonClasses = isOpen
    ? "w-12 h-12 flex items-center justify-center bg-orange-800 hover:bg-orange-600 text-white rounded-full transition-all duration-1000 ease-in-out transform rotate-180"
    : "w-12 h-12 flex items-center justify-center bg-teal-700 hover:bg-teal-600 text-white rounded-full transition-all duration-1000 ease-in-out";

  return (
    <button className={buttonClasses} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-6 h-6 transition-transform duration-1000 ease-in-out ${
          isOpen ? "rotate-360" : ""
        }`}
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
    </button>
  );
};

export default ToggleButton;
