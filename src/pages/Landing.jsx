import React from "react";
import Fade from "react-reveal/Fade";
import food from "../img/6.png";
// import food1 from "./img/meat.png";
import food2 from "../img/soya.png";
import food3 from "../img/meat.png";
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
        <div class="custom-shape-divider-bottom-1641672739">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Landing;