import React from "react";
import  "./Home5.css";

const Home5card = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="home5-card" key={index}>
                <div className="home5-card-image-container">
                <img className="home5-card-image" src={value.img} alt="not found" />
                </div>
                <p className="home5-card-title">{value.title}</p>
                <p className="home5-card-description">{value.description}</p>
                </div>
            ))};
        </>
    );
};
export default    Home5card;
