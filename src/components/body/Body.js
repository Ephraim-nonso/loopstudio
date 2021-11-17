import React, { useEffect, useRef } from "react";
import "./Body.css";
import virtual from "./../images/desktop/image-interactive.jpg";
import ImageContent from "./ImageContent";
import gsap from "gsap";

function Body() {
  const box1 = useRef();
  const box2 = useRef();

  useEffect(() => {
    const right = box1.current;
    const left = box2.current;

    gsap.to(right, { x: 100, repeat: 1, repeatDelay: 5 });
  }, []);

  const onEnter = (currentTarget) => {
    gsap.to(currentTarget, { bacgroundColor: "red" });
  };

  const imageDiv = ImageContent.map((item) => (
    <div key={item.id} className="single-img">
      <div
        className="tiles"
        style={{
          backgroundImage: `url(${item.img})`,
          minHeight: "350px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={onEnter}
      >
        <h3>{item.text}</h3>
      </div>
    </div>
  ));

  return (
    <div className="middle-content">
      <div className="first-content">
        <img src={virtual} alt="virtual" />
        <div className="virtual-content" ref={box1}>
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
