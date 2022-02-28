import React from "react";
import image2 from "../img/10.jpg";
import image3 from "../img/12.png";
import { Parallax } from "react-parallax";

const image1 =
  "https://www.pexels.com/photo/close-up-shot-of-grilled-food-9200385/";

const inlineStyle = {
  // background: "#fff",
  left: "50%",
  top: "55%",
  position: "absolute",
  // padding: "20px",
  transform: "translate(-50%, -50%)",
};
function SecondView() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Parallax bgImage={image2} blur={{ min: -2, max: 9 }}>
        <div
          style={{ height: 750, backgroundPosition: "center", width: "100%" }}
        >
          <div style={inlineStyle}>
            <div
              class="special-card d-flex"
              style={{
                width: "950px",
                height: "450px",
                background: "white",
                borderRadius: "5px",
              }}
            >
              <div
                className="pic"
                style={{
                  width: "45%",
                  height: "100%",
                }}
              ></div>
              <div
                className="pic-txt"
                style={{
                  width: "55%",
                  height: "100%",
                }}
              >
                <div className="first-opt">
                  <h2 className="title-txt pt-4">SPECIAL OFFER</h2>
                </div>
                <div className="second-opt px-4">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Nullam egestas aliquam est, vel elementum orci
                    accumsan at. Suspendisse facilisis molestie ultrices Ut
                    ultrices neque facilisis hendrerit rhoncus.This content is a
                    little bit longer.
                  </p>
                  <div className="d-flex">
                    <p className="m">Price: </p>
                    <h4 className="off-1 ">6000frs</h4>
                  </div>
                  <h3 className="on-1">5000frs</h3>
                  <div className="colect d-flex">
                    <div className="rating d-flex">
                      <p style={{ marginRight: "6px" }}>Ratings:</p>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div
                      className="banner"
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "65%",

                        width: "50%",
                        height: "60%",
                      }}
                    >
                      <img
                        src={image3}
                        alt=""
                        style={{
                          zIndex: "1",
                          width: "70%",
                          height: "90%",
                        }}
                      />
                    </div>
                  </div>
                  <p class="card-text-1">
                    <small class="text-muted">
                      <i
                        class="fas fa-map-marker-alt"
                        style={{ marginRight: "6px" }}
                      ></i>
                      Location 48 Spices at Sampit, Buea
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default SecondView;
