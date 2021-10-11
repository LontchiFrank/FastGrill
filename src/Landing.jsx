import React from "react";
import ribon from "./img/nap.jpg";
import ribon1 from "./img/nap2.jpg";
import food from "./img/6.png";
// import food1 from "./img/meat.png";
import food2 from "./img/meat1.png";
import Navig from "./Navig";

function Landing() {
  return (
    <div className="overall container-fluid p-0 m-0">
      <div className="row r1 m-0">
        <Navig />
      </div>
      <div className="round-div ">
        <div className="small-round-div">
          <div className="round-div">
            <div className="small1">
              <div className="round-div">
                <div className="small2">
                  {/* <div className="table-nap d-flex">
                    <img
                      src={ribon1}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div> */}
                  <div className="table-nap1 d-flex">
                    <img
                      src={ribon}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="pans">
                    <div className="pan">
                      <img
                        src={food}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    {/* <div className="pan1">
                      <img
                        src={food1}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div> */}
                    <div className="pan2">
                      <img
                        src={food2}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
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
