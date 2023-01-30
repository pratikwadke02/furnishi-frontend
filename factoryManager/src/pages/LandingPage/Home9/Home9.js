import React from "react";
import { Home9api } from "./Home9api";
import "./Home9.css";
import Home9card from "./Home9card";

const Reason = () => {
    

    return (
        <>
        <div className="Home9">
        <div className="Home9-inner">
        <Home9card details={Home9api} />
      </div>
      </div>
        </>
    )
};
export default Reason;
