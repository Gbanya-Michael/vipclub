import React from "react";
import "./Vip.scss";

export default function Vip() {
  return (
    <>
      <div className="vip">
        <div className="vip-box">
          <div className="vip-slideshow">
            <img src="vip-images/vip-slide1.svg" alt="" />
          </div>

          <div className="channel">
            <a className="channel__link" href="/">
              Click here to join our VIP channel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
