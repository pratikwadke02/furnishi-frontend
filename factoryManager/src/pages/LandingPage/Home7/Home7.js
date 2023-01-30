import React from "react";
import { Home7api } from "./Home7api";
import "./Home7.css";
import Home7card from "./Home7card";

const Reason = () => {
    

    return (
        <>
        <div className="Home7">
        <div className="Home7-inner">
        <Home7card details={Home7api} />
      </div>
      </div>
        </>
    )
};
export default Reason;
