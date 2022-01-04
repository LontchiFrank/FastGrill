import React from "react";
import ribon from "./img/nap.jpg";
import Fade from "react-reveal/Fade";
import food from "./img/6.png";
// import food1 from "./img/meat.png";
import food2 from "./img/soya.png";
import food3 from "./img/meat.png";
import Navig from "./Navig";
import FirstViewDown from "./FirstViewDown";

function Landing() {
  // useEffect(() => {}, [input]);

  return (
    <div className="overall container-fluid p-0 m-0">
      <div className="row r1 m-0">
        <Navig />
      </div>
      <div className="all-round">
        <div className="round-div ">
          <div className="small-round-div">
            <div className="round-div">
              <div className="small1">
                <div className="round-div ">
                  <div className="small2">
                    <div className="pans">
                      <div className="pan">
                        <img
                          src={food}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                          className="spining"
                        />
                      </div>
                      <div className="pan2">
                        <img
                          src={food2}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                          className="spining1"
                        />
                      </div>
                      <div className="pan3">
                        <img
                          src={food3}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                          className="spining2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Fade right>
            <div className="black-box">
              <div className="header">
                <h2 className="title"> FAST GRILL </h2>
              </div>
              <div className="menu">
                <h3 className="menu-h">Menu</h3>
                <div className="container">
                  <div className="list p-3">
                    <i class="fas fa-hamburger"></i>
                    <h6 className="item">
                      Beaf Steak with fries and Tomatoe Sauce{" "}
                    </h6>
                  </div>
                  <div className="list p-3">
                    <i class="fas fa-hamburger"></i>
                    <h6 className="item">
                      Season Grilled Chicken with fried plantain and Tomatoe
                      Sauce
                    </h6>
                  </div>
                  <div className="list p-3">
                    <i class="fas fa-hamburger"></i>
                    <h6 className="item">Grilled Goat Meat with pepper Soup</h6>
                  </div>
                  <div className="list p-3">
                    <i class="fas fa-hamburger"></i>
                    <h6 className="item">
                      Pork Meat and grilled plantains with Pepper Sauce
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Landing;
