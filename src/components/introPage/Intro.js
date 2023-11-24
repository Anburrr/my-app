import React from "react";
import "./Intro.scss";
import Instagram from "../../assets/images/instagram-logo.png";
import Twitter from "../../assets/images/twitter.png";
import Github from "../../assets/images/github.png";
import { Link } from "react-router-dom";


function Intro() {
  return (
    <>
      <div class="intro" id="Intro">
        <div class="animation">
          <p class="nameIntro">Hi my name is...</p>
        </div>

        <div class="animation2">
          <p class="typing">Arsh Bakhshi</p>
        </div>

        <div class="name-Class"> </div>

        <div class="textIntro-Class">
          <p class="textIntro">An Aspiring Web Developer </p>
        </div>

        <div class="personInfo-div">
          <p class="personInfo">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at
          </p>
        </div>

       

          <div className="allInsideButtons">
          <div class="btn-holder">
            <button class="btn btn-2 hover-slide-right">
              <Link to="/contact">
                <span>Contact Me!</span>
              </Link>
            </button>
          </div>

          <div className="iconIMG">
            <a className="Tag" href="https://www.instagram.com/">
              <img id="socialIcons" className="IGPhoto" src={Instagram} />
            </a>
            <a className="Tag" href="https://twitter.com/Anba786">
              {" "}
              <img id="socialIcons" className="TTPhoto" src={Twitter} />
            </a>
            <a className="Tag" href="https://github.com/Anburrr">
              <img id="socialIcons" className="GHPhoto" src={Github} />
            </a>
          </div>
        </div>
      </div>

      <div class="openContainer">
        <div class="container">
          <a href="#projectPage">
            <div class="scroll-down"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
