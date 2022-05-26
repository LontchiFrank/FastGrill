import React from "react";
import FirstViewDown from "./FirstViewDown";
import Landing from "./Landing";
import SecondView from "./SecondView";

function LandPage() {
  return (
    <div style={{ width: "100vw" }}>
      <Landing />
      <FirstViewDown />
    </div>
  );
}

export default LandPage;
