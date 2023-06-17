import React from "react";
import "./Vip.scss";

export default function Vip() {
  return (
    <>
      <div className="vip">
        <div className="vip-box">
          <div className="vip-slideshow">
            <slide />
            <img src="vip-images/vip-slide1.svg" alt="" />
          </div>

          <div className="channel">
            <a
              className="channel__link"
              href="https://t.me/+soD-l3_vX1szOGQ1"
              alt="Join VIP betting group"
            >
              Click here to join our VIP channel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
