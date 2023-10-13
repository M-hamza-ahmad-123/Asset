import React from "react";
import ToggleButton from "../../utils/ToggleButton";
import UpperHead from "./UpperHead";

function RightSide({ isSidebarOpen, toggleSidebar }) {
  return (
    <main
      className={`flex-1 p-4 ml-64 ${
        isSidebarOpen ? "" : "ml-0"
      } transition-all duration-500`}
    >
      <UpperHead
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      ></UpperHead>

      <div className="min-h-[45rem] m-4 bg-gray-600 rounded-lg transition-all duration-300 flex">
        <div className="h-60 w-5/12 bg-white m-4 rounded-3xl transition-all duration-300 flex"></div>
      </div>
    </main>
  );
}

export default RightSide;
