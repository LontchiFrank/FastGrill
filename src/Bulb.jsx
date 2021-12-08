import React, { useState } from "react";

function Bulb() {
  const [color, setColor] = useState(false);

  const toggle = () => {
    setColor(!color);
  };

  return (
    <div>
      <div
        className="bulb"
        style={{ backgroundColor: color ? "yellow " : "white" }}
      ></div>
      <button
        onClick={() => toggle()}
        style={{ padding: "2em", borderRadius: "10px" }}
      >
        ON/OFF
      </button>
    </div>
  );
}

export default Bulb;
