import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="bg-image">
        <nav>
          <div className="logo">loopstudios</div>
          <ul className="nav-items">
            <li className="nav-item">About</li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">Events</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Support</li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
