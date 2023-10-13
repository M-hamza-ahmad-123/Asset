import React, { useState } from "react";
import ToggleButton from "../utils/ToggleButton";
import LeftSideMenu from "./leftSideMenu";
import RightSide from "./rightSide/rightSide";
const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 ">
      {/* Sidebar */}
      <LeftSideMenu isSidebarOpen={isSidebarOpen}></LeftSideMenu>
      {/* Main Content */}
      <RightSide
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      ></RightSide>
    </div>
  );
};

export default MainPage;
