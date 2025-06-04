import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full h-svh p-4 gap-4 flex justify-start items-start">
      {children}
    </div>
  );
};

export default Container;
