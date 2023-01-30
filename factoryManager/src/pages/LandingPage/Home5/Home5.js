import React from "react";
import { Home5api } from "./Home5api";
import "./Home5.css";
import Home5card from "./Home5card";

const Reason = () => {
    

    return (
        <>
        <div className="Home5">
        <div className="Home5-inner">
        <Home5card details={Home5api} />
      </div>
      </div>
        </>
    )
};
export default Reason;
