import React from "react";

function LeftSideMenu({ isSidebarOpen }) {
  return (
    <aside
      className={`w-64 bg-gray-800 text-white transform rounded-lg m-2 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform ease-in-out duration-500 fixed top-0 left-0 bottom-0 z-50`}
    >
      {/* Sidebar content */}
      <div className="p-4"></div>
    </aside>
  );
}

export default LeftSideMenu;
