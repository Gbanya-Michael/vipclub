import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-box">
          <div className="ticket">
            <p>Have a question?</p>
            <div className="ticket__comment">
              <textarea placeholder="Type your concern"></textarea>
            </div>
            <div className="ticket__name">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="ticket__email">
              <input type="email" placeholder="Enter your email" />
            </div>
            <button>Submit</button>
          </div>

          <ul className="telegram">
            <li>OR</li>
            <li>
              <a href="/" alt="">
                Contact us on Telegram
              </a>
            </li>
          </ul>
          <div className="declaration">
            <p>
              By Joining any of our platforms, you agree to our fair use policy.
            </p>
            <p>You confirm that you are over 21 years and above</p>
            <p> All Rights Reserved © Fortune Dragon</p>
          </div>
        </div>
      </div>
    </>
  );
}
