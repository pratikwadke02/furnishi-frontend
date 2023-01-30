import React from "react";
import  "./Home9.css";

const Home9card = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="home9-card" key={index}>
                <div className="home9-card-image-container">
                <img className="home9-card-image" src={value.img} alt="not found" />
                </div>
                <p className="home9-card-title">{value.title}</p>
                <p className="home9-card-description">{value.description}</p>
                </div>
            ))};
        </>
    );
};
export default    Home9card;
