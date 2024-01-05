// Card.js
import React from "react";
import './Card.css';
import card1 from "../Images/card1.png";

const Card = () => {
  // Your Card component logic here
    return (
      <>
        {/* Card content */}
        <div className="card">
          <div className="cardImg">
            <img alt="" src={card1}></img>
          </div>
          <div cardDescrption>
            <h4>PRODUCT NAME</h4>
            <h6>
              <a href="https://github.com/Abhisheklikho">Sign in</a> or Create
              an account to see pricing
            </h6>
          </div>
        </div>
      </>
    );
};

export default Card;
