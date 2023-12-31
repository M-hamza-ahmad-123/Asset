import React from "react";

export const Loader = () => {
  return (
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500 border-opacity-50 mx-auto">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 border-opacity-50 mx-auto"></div>
    </div>
  );
};
