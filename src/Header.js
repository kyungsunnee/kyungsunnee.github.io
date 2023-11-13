import React, { useState, useEffect } from "react";
import "./App.css";
import phone from "./img/phone-call.png";
import mail from "./img/arroba.png";
import git from "./img/github.png";
import drive from "./img/google-drive.png";
import notion from "./img/Notion_app_logo.png";
// import { scrollToTopFunc } from "./App"; // scrollToTop 함수 import

function Header() {
  const name = "Park Kyungsun";
  const job = "Product Designer";

  function nameClick() {
    // scrollToTopFunc();
  }

  return (
    <div className="Header">
      <div className="Header_content">
        <div id="header-left">
          <div id="name" onClick={nameClick()}>
            {name}
          </div>
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
              <img alt="phone icon" src={mail} className="info-icon" />
            </a>
            <span className="info-txt">kyungsunnee@naver.com</span>
          </div>
          <div className="info-div info-mg">
            <a
              href="https://github.com/kyungsunnee?tab=repositories"
              target="_blank"
            >
              <img alt="phone icon" src={git} className="info-icon" />
            </a>
            <a
              className="info-txt"
              href="https://github.com/kyungsunnee?tab=repositories"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="info-div info-mg">
            <a
              href="https://www.notion.so/sunnee/kyungsun-space-a1d9630386c944e2b9b1f958a110c7a2#e09edbf154474fbe86c52ae14eae88cd"
              target="_blank"
            >
              <img
                alt="phone icon"
                src={notion}
                className="info-icon"
                target="_blank"
              />
            </a>
            <a
              className="info-txt"
              href="https://www.notion.so/sunnee/kyungsun-space-a1d9630386c944e2b9b1f958a110c7a2#e09edbf154474fbe86c52ae14eae88cd"
              target="_blank"
            >
              Notion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
