import React from "react";
import FirstViewDown from "./FirstViewDown";
import Landing from "./Landing";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import SecondView from "./SecondView";

function LandPage() {
  return (
    <div>
      <Landing />
      <FirstViewDown />
    </div>
  );
}

export default LandPage;
