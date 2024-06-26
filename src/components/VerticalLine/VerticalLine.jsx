import React from "react";
import "./VerticalLine.css";

const VerticalLine = ({ year }) => {
  return (
    <div className="vertical-line-container ">
      <div className="vertical-line "></div>
      <div className="date">{year}</div>
    </div>
  );
};

export default VerticalLine;
