import React, { useEffect, useRef } from "react";
import "./Header.css";
import gsap from "gsap";

function Header() {
  // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

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

        <div className="hero-content" ref={boxRef}>
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
