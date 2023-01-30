import React from "react";
import "./Home3.css";

const Home3card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="home3-card" key={index}>
        <div className="home3-card-image-container">
          <img className="home3-card-image" src={value.img} alt="not found" />
         </div>
          <p className="home3-card-title">{value.title}</p>
          <p className="home3-card-description">{value.description}</p>
        </div>
      ))}
      ;
    </>
  );
};
export default Home3card;
