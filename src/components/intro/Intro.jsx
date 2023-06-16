import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro-box">
          <div className="intro-box__notice">Read Me!!!</div>

          <div className="intro-box__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard industry's
            </p>
          </div>
        </div>
        <div className="hero-slideshow">
          <img src="hero-images/slide1.svg" alt="" />
        </div>
        <div className="about">
          <h1>About Fortune Dragon</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, Lorem Ipsum
          </p>
          <span>
            <a href="/">See more...</a>
          </span>
        </div>
      </div>
    </>
  );
}
