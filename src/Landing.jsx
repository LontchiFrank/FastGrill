import React from "react";
import ribon from "./img/1.png";
import food from "./img/2.png";
function Landing() {
  return (
    <div className="overall">
      <div className="round-div ">
        <div className="small-round-div">
          <div className="round-div">
            <div className="small1">
              <div className="round-div">
                <div className="small2">
                  {/* <img
                    src={ribon}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <div className="pan">
                    {/* <img
                      src={food}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
