import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import meat from "../img/7.jpg";
import trop from "../img/8.jpg";
import pot from "../img/6.jpg";
import top from "../img/9.jpg";
import SecondView from "./SecondView";
function FirstViewDown() {
  // const parallax = useRef<IParallax>(null!)
  return (
    <div className="main-first">
      <div className="line-1">
        <Fade left>
          <h3>Our Qualities</h3>
        </Fade>
      </div>
      <div className="line-2 px-4">
        <Fade bottom>
          <div className="card-1">
            <div class="card mb-3">
              <img src={trop} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title ">Grilled Cow meat</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  <div className="d-flex">
                    <p className="m">Price: </p>
                    <h4 className="off ">3500frs</h4>
                  </div>
                  <h3 className="on">2000frs</h3>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <i
                      class="fas fa-map-marker-alt"
                      style={{ marginRight: "6px" }}
                    ></i>
                    Location Kuchina's avenue
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Fade>

        <Flip right>
          <div className="card-1">
            <div class="card mb-3">
              <img src={pot} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title ">Grilled Cow meat</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  <div className="d-flex">
                    <p className="m">Price: </p>
                    <h4 className="off ">3500frs</h4>
                  </div>
                  <h3 className="on">2500frs</h3>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <i
                      class="fas fa-map-marker-alt"
                      style={{ marginRight: "6px" }}
                    ></i>
                    Location 48 Spices avenue
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Flip>
        <Fade top>
          <div className="card-1">
            <div class="card mb-3">
              <img src={top} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title ">Grilled Cow meat</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  <div className="d-flex">
                    <p className="m">Price: </p>
                    <h4 className="off ">2000frs</h4>
                  </div>
                  <h3 className="on">1000frs</h3>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <i
                      class="fas fa-map-marker-alt"
                      style={{ marginRight: "6px" }}
                    ></i>
                    Location Dream's Lounge
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div class="custom-shape-divider-top-1641838575">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <SecondView />
    </div>
  );
}

export default FirstViewDown;
