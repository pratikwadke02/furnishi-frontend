import React from "react";
import  "./Home11.css";

const Home11card = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="home11-card" key={index}>
                <div className="home11-card-image-container">
                <img className="home11-card-image" src={value.img} alt="not found" />
                </div>
                <p className="home11-card-title">{value.title}</p>
                <p className="home11-card-description">{value.description}</p>
                </div>
            ))};
        </>
    );
};
export default  Home11card;
