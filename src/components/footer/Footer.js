import React from "react";
import "./Footer.css";
import facebook from "./../images/icon-facebook.svg";
import twitter from "./../images/icon-twitter.svg";
import pinterest from "./../images/icon-pinterest.svg";
import instagram from "./../images/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="logo-others">
          <h4>loopstudios</h4>
          <ul className="nav-btm-items">
            <li className="nav-item">About</li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">Events</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Support</li>
          </ul>
        </div>

        <div className="social-others">
          <div className="social">
            <img src={facebook} alt="facebook" className="icon" />
            <img src={twitter} alt="twitter" className="icon" />
            <img src={pinterest} alt="pinterest" className="icon" />
            <img src={instagram} alt="instagram" className="icon" />
          </div>
          <p>&copy;Loopstudios. All rights reserved.</p>
          <p>Challenge by: Frontend Mentor</p>
          <p>Curated by: Ephraim</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
