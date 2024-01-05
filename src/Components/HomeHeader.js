import "./HomeHeader.css";
import Logo from "../Images/Logo.png";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import React, { useState } from "react";

function HomeHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="HomeHeader">
        <div className="HeaderLogo">
          <div className="ImgWithHumburgar">
            {/* Hamburger Menu Button */}
            <div
              className={`HamburgerMenu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="Bar"></div>
              <div className="Bar"></div>
              <div className="Bar"></div>
            </div>
            <img src={Logo} alt="logo"></img>
          </div>

          <span>LOGO</span>
          <div className="HeaderIcons">
            {/* Search Icon */}
            <FaSearch size={18} />

            {/* Heart Icon */}
            <FaHeart size={18} />
            {/* Shopping Cart Icon */}
            <FaShoppingCart size={18} />
            {/* User/Profile Icon */}
            <FaUser id="user" size={18} />

            {/* Language Dropdown */}
            <select name="language" id="language">
              <option value="english" selected>
                ENG
              </option>
              <option value="hindi">Hindi</option>
              <option value="bhojpuri">Bhojpuri</option>
            </select>
          </div>
        </div>

        <div className="HeaderTabs">
          {/* Navigation List */}
          <ul className={`NavList ${isMenuOpen ? "active" : ""}`}>
            <li>SHOP</li>
            <li>SKILLs</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
      <div className="Description">
        <div className="home-shop">
          <div id="home">HOME |</div>

          <div id="shop">SHOP</div>
        </div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h2>
      </div>
    </>
  );
}

export default HomeHeader;
