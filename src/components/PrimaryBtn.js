import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button
      className="btn rounded-none border-none bg-gradient-to-r from-blue-400 to-blue-500  text-white hover:bg-gradient-to-r
    hover:from-blue-500 hover:to-blue-400 "
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
