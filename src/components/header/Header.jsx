import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header_box">
        <div className="header">
          <div className="header__logo">
            <img src="logo.svg" alt="" />
          </div>
          <div className="header__description">
            <h1>
              Best online betting and gaming platform. Easy and fast payout
              methods.
            </h1>
          </div>
          <ul className="header__sign-up">
            <li className="header__sign-up--join">
              <a href="/" alt="">
                Join Vip Group
              </a>
            </li>
            <li className="header__sign-up--log">
              <a href="/" alt="">
                Sign up for free
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
