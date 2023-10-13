import React from "react";
import { useState } from "react";
import ToggleButton from "../../utils/ToggleButton";

function UpperHead({ toggleSidebar, isSidebarOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-gray-800 rounded-md p-2 flex justify-between">
      <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar} />
      <div className="relative inline-block">
        <img
          id="avatarButton"
          type="button"
          onClick={toggleDropdown}
          className="w-11 h-11 rounded-full cursor-pointer text-white hover:bg-slate-300 transition-all duration-500"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="User dropdown"
        />

        {isDropdownOpen && (
          <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Hamza The Great</div>
              <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>Dashboard</li>
              <li>AddWallet</li>
              <li>Earnings</li>
            </ul>
            <div className="py-1">Sign out</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpperHead;
