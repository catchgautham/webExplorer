import React from "react";
import "./LoadingSymbol.scss";

const LoadingSymbol: React.FC = () => {
  return (
    <div className="loading-symbol-outer">
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>
      <div className="circle circle-three"></div>
      <div className="circle circle-four"></div>
      <div className="circle circle-five"></div>
    </div>
  );
};

export default LoadingSymbol;
