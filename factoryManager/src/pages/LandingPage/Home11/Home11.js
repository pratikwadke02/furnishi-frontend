import React from "react";
import { Home11api } from "./Home11api";
import "./Home11.css";
import Home11card from "./Home11card";

const Reason = () => {
  return (
    <>
      <div className="Home11">
      <div className="Home11-inner">
        <Home11card details={Home11api} />
      </div>
      </div>
    </>
  );
};
export default Reason;
