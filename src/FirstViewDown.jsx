import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import meat from "./img/7.jpg";
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
          <div className="card-1"></div>
        </Fade>

        <Flip right>
          <div className="card-1"></div>
        </Flip>
        <Fade top>
          <div className="card-1"></div>
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
