import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import meat from "../img/7.jpg";
import trop from "../img/8.jpg";
import pot from "../img/6.jpg";
import top from "../img/9.jpg";

export default function FirstViewDown() {
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
                    <i class="fas fa-map-marker-alt"></i>Location Kuchina's
                    avenue
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
                    <i class="fas fa-map-marker-alt"></i>Location 48 Spices
                    avenue
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
                    <i class="fas fa-map-marker-alt"></i>Location Dream's Lounge
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="line-3 px-4">
        <div className="img-side">
          <div className="center-img">
            <img src={meat} alt="" className="picture" />
          </div>
        </div>
        <div className="txt-side">
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            rhoncus lorem. Mauris vel ipsum nec turpis malesuada posuere. Donec
            placerat, nisi at malesuada rutrum, velit felis luctus mauris, vitae
            mollis justo urna ac augue. Aenean mauris est, fringilla non eros
            ac, posuere auctor ligula. Pellentesque quis fringilla sapien
          </p>
        </div>
      </div>
    </div>
  );
}

// export default FirstViewDown;
