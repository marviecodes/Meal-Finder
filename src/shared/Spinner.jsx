import React from "react";
import spinner from "../assets/gradient-5812_256.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="" className="spinner-img" />
    </div>
  );
};

export default Spinner;
