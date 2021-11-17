import "./App.css";
import React, { useEffect, useRef } from "react";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import gsap from "gsap";

function App() {
  // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div>
      <Header />
      <Body boxRef={boxRef} />
      <Footer />
    </div>
  );
}

export default App;
