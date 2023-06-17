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
              Casino in your pocket. Play games and bets on the go wherever you
              are and win amazing prices. Instant payout options to accounts or
              crypto wallets worldwide. Sign up for a seemless online betting
              experience.
            </p>
          </div>
        </div>
        <div className="hero-slideshow">
          {/* <SliderComponent /> */}
          <img src="hero-images/slide1.svg" alt="" />
        </div>
        <div className="about">
          <h1>About Fortune Dragon</h1>
          <p>
            An online gambling site based in the Philippines, committed to
            providing a superior online gaming experience for our valued
            players. Our team has been deeply rooted in the Philippines online
            gambling market since 2006. Therefore, we strive to offer the most
            favorable promotions and the hottest games, while also providing the
            most genuine benefits.
          </p>
          <span>
            <a href="https://fd888.ph/#/register?referCode=1a2rhw">
              See more...
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
