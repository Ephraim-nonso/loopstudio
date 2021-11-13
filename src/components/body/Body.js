import React from "react";
import "./Body.css";
import virtual from "./../images/desktop/image-interactive.jpg";
import ImageContent from "./ImageContent";

function Body() {
  const imageDiv = ImageContent.map((item) => (
    <div key={item.id} className="single-img">
      <img src={item.img} alt="images" />
      <h3>{item.text}</h3>
    </div>
  ));

  return (
    <div className="middle-content">
      <div className="first-content">
        <img src={virtual} alt="virtual" />
        <div className="virtual-content">
          <h3>THE LEADER IN INTERACTIVE VR</h3>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brands.
          </p>
        </div>
      </div>

      <div className="second-content">
        <div className="creation">
          <h3>OUR CREATIONS</h3>
          <button>SEE ALL</button>
        </div>

        <div className="img-section">{imageDiv}</div>
      </div>
    </div>
  );
}

export default Body;
