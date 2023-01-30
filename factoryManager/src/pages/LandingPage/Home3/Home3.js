import React from "react";
import { Home3api } from "./Home3api";
import "./Home3.css";
import Home3card from "./Home3card";

const Reason = () => {
  return (
    <>
      <div className="Home3">
        <div className="Home3-inner">
          <Home3card details={Home3api} />
        </div>
      </div>
    </>
  );
};
export default Reason;
