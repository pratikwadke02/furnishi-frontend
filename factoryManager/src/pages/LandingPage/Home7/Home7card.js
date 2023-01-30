import React from "react";
import  "./Home7.css";

const Home7card = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="home7-card" key={index}>
                <div className="home7-card-image-container">
                <img className="home7-card-image" src={value.img} alt="not found" />
                </div>
                <p className="home7-card-title">{value.title}</p>
                <p className="home7-card-description">{value.description}</p>
                </div>
            ))};
        </>
    );
};
export default   Home7card;
