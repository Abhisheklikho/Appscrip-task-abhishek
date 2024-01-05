// HamburgerMenu.jsx
import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ onClick }) => {
  return (
    <div className="HamburgerMenu" onClick={onClick}>
      <div className="Bar"></div>
      <div className="Bar"></div>
      <div className="Bar"></div>
      </div>
      
  );
};

export default HamburgerMenu;
