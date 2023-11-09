import React, { useState, useEffect } from "react";
import "./App.css";
import phone from "./img/phone-call.png";
import mail from "./img/arroba.png";
import git from "./img/github.png";
import drive from "./img/google-drive.png";

function Header() {
  const name = "Park Kyungsun";
  const job = "Product Designer";

  return (
    <div className="Header">
      <div className="Header_content">
        <div id="header-left">
          <div id="name">{name}</div>
          <div id="job">{job}</div>
        </div>
        <div id="header-right">
          <div className="info-div">
            <a href="tel:01049631210">
              <img alt="phone icon" src={phone} className="info-icon" />
            </a>
            <span className="info-txt">01049631210</span>
          </div>
          <div className="info-div info-mg">
            <a href="mailto:kyungsunnee@naver.com">
              {" "}
              <img alt="phone icon" src={mail} className="info-icon" />
            </a>
            <span className="info-txt">kyungsunnee@naver.com</span>
          </div>
          <div className="info-div info-mg">
            <a
              className="info-txt"
              href="https://github.com/kyungsunnee?tab=repositories"
            >
              <img alt="phone icon" src={git} className="info-icon" />
            </a>
            <a
              className="info-txt"
              href="https://github.com/kyungsunnee?tab=repositories"
            >
              Github
            </a>
          </div>
          <div className="info-div info-mg">
            <img alt="phone icon" src={drive} className="info-icon" />
            <a className="info-txt">Google Drive</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
