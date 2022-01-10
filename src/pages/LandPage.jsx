import React from "react";
import FirstViewDown from "./FirstViewDown";
import Landing from "./Landing";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

function LandPage() {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <Landing />
          <FirstViewDown />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandPage;
